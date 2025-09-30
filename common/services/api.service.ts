/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAuthCookie } from "@/lib/cookies";
import axios, { AxiosRequestConfig } from "axios";
import { delay, finalize, from, map, Observable, of, shareReplay } from "rxjs";


interface CustomConfig extends AxiosRequestConfig {
  requireAuth?: boolean;
  signout?: (path?: string) => void;
}

type Options = {
  setCache: boolean;
  delayTime: number;
  cacheTTL: number; // Optional TTL for cache expiry in minutes
  refreshToken: boolean;
  config?: CustomConfig;
};

interface CacheItem {
  data: any;
  expiry: number; // Timestamp for cache expiry
}

export const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || 'https://api.321apollo.com'}/api`,
  withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

http.interceptors.request.use(async (config: any) => {
  if (config.requireAuth) {
    const token = await getAuthCookie();
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});

// ✅ Response interceptor — handle 401 errors globally
http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const { requireAuth, signout } = error.config as CustomConfig;
      if (requireAuth && signout) signout();
    }
    return Promise.reject(error);
  }
);

class ApiService {
  private static cache: Map<string, CacheItem> = new Map(); // Changed to Map for LRU Cache
  private static inflightRequests: Map<string, Observable<any>> = new Map();
  private defaultOption: Options = {
    setCache: true,
    delayTime: 700,
    cacheTTL: 5,
    refreshToken: false,
  };

  private static readonly MAX_CACHE_SIZE = 50; // Max cache size (for LRU cache)

  //   private refreshToken(): Observable<string> {
  //     const device_id = localStorage.getItem('eathlos_device_id_pk');
  //     const refresh_token = localStorage.getItem('eathlos_refresh_token_pk');

  //     if (!refresh_token || !device_id) return throwError(() => new Error('No refresh token available'));

  //     const payload = new URLSearchParams({
  //       grant_type: 'refresh_token',
  //       refresh_token,
  //       DeviceId: device_id
  //     });

  //     return this.httpPostRequest<{ access_token: string; refresh_token: string; device_id: string }>('security/token', payload, '', { baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api` }).pipe(
  //       map((res) => {
  //         if (res) {
  //           localStorage.setItem('eth_refresh_token_pk', res.refresh_token);
  //           return res.access_token;
  //         } else {
  //           throw new Error('Invalid refresh token response');
  //         }
  //       }),
  //       catchError((err) => {
  //         console.error('Error refreshing token', err);
  //         return throwError(() => new Error('Token refresh failed'));
  //       })
  //     );
  //   }

  private httpRequest<T>(method: "get" | "post" | "put" | "delete", endPoint: string, payload?: any, params?: string, Options?: Partial<Options>): Observable<T> {
    const options = { ...this.defaultOption, ...Options };
    const cacheKey = `${method.toUpperCase()}:${endPoint}:${params ?? ""}:${JSON.stringify(payload ?? {})}`;

    const cachedResponse = this.getCachedResponse<T>(cacheKey, options);
    if (cachedResponse) return cachedResponse;

    if (ApiService.inflightRequests.has(cacheKey)) {
      return ApiService.inflightRequests.get(cacheKey) as Observable<T>;
    }

    const request$ = from(
      method === "get"
        ? http.get<T>(endPoint, options.config)
        : method === "post"
        ? http.post<T>(endPoint, payload, options.config)
        : method === "put"
        ? http.put<T>(endPoint, payload, options.config)
        : http.delete(endPoint, options.config)
    ).pipe(
      map(({ data, status }) => {
        if (status === 200 || status === 201 || status === 204) {
          this.storeInCache(cacheKey, data, options);
          return data;
        }
        throw new Error("Request failed");
      }),
      finalize(() => ApiService.inflightRequests.delete(cacheKey)),
      shareReplay(1)
    );

    ApiService.inflightRequests.set(cacheKey, request$);
    return request$;
  }

  httpGetRequest<T>(endPoint: string, params?: string, Options?: Partial<Options>): Observable<T> {
    return this.httpRequest("get", endPoint, undefined, params, Options);
  }

  httpPostRequest<T>(endPoint: string, payload: any, params?: string, Options?: Partial<Options>): Observable<T> {
    return this.httpRequest("post", endPoint, payload, params, {
      ...Options,
      setCache: false,
    });
  }

  httpPutRequest<T>(endPoint: string, payload: any, params?: string, Options?: Partial<Options>): Observable<T> {
    return this.httpRequest("put", endPoint, payload, params, {
      ...Options,
      setCache: false,
    });
  }

  httpDeleteRequest<T>(endPoint: string, Options?: Partial<Options>): Observable<T> {
    return this.httpRequest("delete", endPoint, undefined, undefined, {
      ...Options,
      setCache: false,
    });
  }

  // Reset the cache (if needed)
  resetCache() {
    ApiService.cache.clear();
  }

  private getCachedResponse<T>(cacheKey: string, options: Options): Observable<T> | null {
    const cachedItem = ApiService.cache.get(cacheKey);
    if (cachedItem && options.setCache) {
      if (Date.now() < cachedItem.expiry) {
        return of(cachedItem.data).pipe(delay(options.delayTime || this.defaultOption.delayTime)); // Return cached data if not expired
      } else {
        ApiService.cache.delete(cacheKey); // Delete expired cache
      }
    }
    return null; // No valid cache found
  }

  private storeInCache<T>(cacheKey: string, data: T, options: Options): void {
    if (options.setCache) {
      const expiryTime = Date.now() + (options.cacheTTL || this.defaultOption.cacheTTL) * 60 * 1000;
      ApiService.cache.set(cacheKey, { data, expiry: expiryTime });
      // **Implement LRU Cache Removal if Exceeds Limit**
      if (ApiService.cache.size > ApiService.MAX_CACHE_SIZE) {
        // Remove LRU cache item if cache size exceeds max limit
        const oldestKey = ApiService.cache.keys().next().value;
        if (oldestKey) {
          ApiService.cache.delete(oldestKey);
        }
      }
    }
  }
}

export const apiService = new ApiService();
