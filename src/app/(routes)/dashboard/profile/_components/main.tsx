/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";

import { Controller, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/src/components/ui/select";

import { ProfilePictureUpload } from "./profile-picture-upload";

import { useAuth, useProfile } from "@/providers";

import { apiService } from "@/common/services";

// import { Loader2 } from "lucide-react";
// import { IUserProfile } from "@/common/models/interface";

type ICountry = { id: number; name: string };
type ICity = { id: number; name: string };

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  country: string; // countryId
  city: string; // cityId
  image: string;
};

export const ProfileMain = () => {
  const { user, updateUser } = useProfile();
  const { signout } = useAuth();

  const [loading, setLoading] = useState(false);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  const [cities, setCities] = useState<ICity[]>([]);
  const [countries, setCountries] = useState<ICountry[]>([]);

  const { control, register, setValue, reset } =
    useForm<FormValues>();

  const fetchCities = (countryId: number) => {
    setLoadingCities(true);
    apiService
      .httpGetRequest<{ cities: ICity[] }>(
        `api/v1/country/${countryId}/cities`,
        ""
      )
      .subscribe({
        next: (res) => {
          setCities(res.cities);
          setLoadingCities(false);
        },
        error: (err) => {
          console.log("Error fetching cities:", err.message);
          setLoadingCities(false);
        },
      });
  };

  const uploadPhoto = (file: File | null) => {
    if (file) {
      const formData = new FormData();
      formData.append("VoiceMessage", file);
      apiService
        .httpPutRequest<{ image: string; message: string; status: string }>(
          "api/v1/customer/profile/photo",
          formData,
          undefined,
          {
            config: { requireAuth: true, signout: () => signout("/") },
          }
        )
        .subscribe({
          next: (res) => {
            if (res.status === "success") {
              // toast.success(res.message);
              setValue("image", res.image);
              updateUser({ logo: res.image });
            }
          },
          // error: (err) => toast.error(err.message),
        });
    }
  };

  // const onSubmit = (data: FormValues) => {
  //   setLoading(true);
  //   const payload = {
  //     address: data.address,
  //     contact: `971${Number(data.phone)}`,
  //     email: data.email,
  //     name: `${data.firstName} ${data.lastName}`,
  //     country: Number(data.country),
  //     city: Number(data.city),
  //   };
  //   apiService
  //     .httpPutRequest<{
  //       message: string;
  //       customer: IUserProfile;
  //       status: string;
  //     }>("api/v1/customer/profile", payload {
  //       config: { requireAuth: true, signout: () => signout("/") },
  //     })
  //     .subscribe({
  //       next: (res) => {
  //         setLoading(false);
  //         if (res.status === "success") {
  //           // toast.success(res.message);
  //           updateUser({ ...res.customer, logo: user?.logo || "" });
  //         }
  //       },
  //       error: (err) => {
  //         setLoading(false);
  //         console.log(err.message)
  //         // toast.error(err.message);
  //       },
  //     });
  // };

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.name.split(" ")[0] || "",
        lastName: user.name.split(" ")[1] || "",
        email: user.email,
        phone: user.contact ? user.contact.slice(3) : user.contact,
        address: user.address || "",
        country: user.country || "",
        city: "",
        image: user.logo || "",
      });
    }
  }, [user, reset]);

  useEffect(() => {
    setLoadingCountries(true);
    apiService
      .httpGetRequest<{ countries: ICountry[] }>(`api/v1/countries`)
      .subscribe({
        next: (res) => {
          setCountries(res.countries);
          setLoadingCountries(false);
        },
        error: (err) => {
          console.log("Error fetching countries:", err.message);
          setLoadingCountries(false);
        },
      });
  }, []);

  return (
    <form className="py-10">
      <div className="flex flex-col items-center justify-center">
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <ProfilePictureUpload
              currentImage={field.value}
              onImageChange={uploadPhoto}
            />
          )}
        />
        <h1 className="text-[24px] lg:text-[38px] xl:text-[42px] my-4 font-bold leading-7 lg:leading-11 text-center">
          Profile Picture
        </h1>
        <p className="text-sm lg:text-[22px] text-black/60">
          Upload a new profile picture
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-y-4 xl:gap-x-6 my-4 md:my-8 px-4 xl:px-32">
        <Input
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        <Input type="text" placeholder="Last Name" {...register("lastName")} />
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input
          disabled
          type="phone"
          placeholder="Phone Number"
          {...register("phone")}
        />
      </div>

      <Button
        loading={loading}
        type="submit"
        className="flex justify-center w-fit mx-auto px-6"
      >
        Submit
      </Button>
    </form>
  );
};
