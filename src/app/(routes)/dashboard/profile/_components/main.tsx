/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { parseISO, format } from 'date-fns';

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
import { toast } from "sonner";
import { AxiosError } from "axios";
import { IUser } from "@/common/models/interface";

// import { Loader2 } from "lucide-react";
// import { IUserProfile } from "@/common/models/interface";

type ICountry = { id: number; name: string };
type ICity = { id: number; name: string };

type FormValues = {
  id: number;
  firstName: string,
  lastName: string,
  name: string;
  email: string;
  role: string;
  address: string;
  created_at: string;
  date_of_birth: string;
  gender: string;
  last_login: string
  phone_number: string;
  profile_picture_url: string | null;
  status: string;
};

export const ProfileMain = () => {
  const { user, updateUser } = useProfile();
  const { signout } = useAuth();

  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initials = useMemo(() => {
    if (!user) return '';
    if (!user.profile_picture_url) {
      const parts = user.name.trim().split(' ');
      return parts && parts.length > 1 ? parts[0][0].toUpperCase() + parts[1][0].toUpperCase() : parts[0][0].toUpperCase();
    }
    return '';
  }, [user]);

  const { control, register, setValue, reset } =
    useForm<FormValues>();

  const uploadPhoto = (file: File | null) => {
    if (file) {
      const formData = new FormData();
      formData.append('profile_picture', file);
      apiService
        .httpPutRequest<{ profile_picture_url: string; message: string; status: string; }>(
          "user/profile/image",
          formData,
          undefined,
          {
            config: { requireAuth: true, signout: () => signout("/login") },
          }
        )
        .subscribe({
          next: (res) => {
            if (res.status === "success") {
              toast.success(res.message);
              setValue("profile_picture_url", res.profile_picture_url);
              updateUser({ profile_picture_url: res.profile_picture_url });
            }
          },
          error: (err: AxiosError<{ message: string }>) => {
            setLoading(false);
            toast.error(err.response?.data?.message || err.message);
            setValue('profile_picture_url', user?.profile_picture_url || null);
          }
        });
    }
  };

  const updateFormValues = useCallback(
    (user: IUser | null) => {
      if (user) {
        reset({
          profile_picture_url: user.profile_picture_url,
          firstName: user.name.split(' ')[0] || '',
          lastName: user.name.split(' ')[1] || '',
          email: user.email || '',
          phone_number: user.phone_number || '',
          date_of_birth: new Date(user.date_of_birth).toLocaleDateString('sv-SE'),
          gender: user.gender || '',
          address: user.address || ''
        });
      }
    },
    [reset]
  );

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    const payload = {
      // profile_picture_url: values.profile_picture_url,
      name: values.firstName + ' ' + values.lastName,
      email: values.email,
      address: values.address,
      phone_number: values.phone_number,
      gender: values.gender,
      date_of_birth: format(parseISO(values.date_of_birth), 'yyyy-MM-dd'),
      // Password: ''
    };

    apiService.httpPutRequest<{ message: string; data: IUser }>('user/profile', payload, '', { config: { requireAuth: true } }).subscribe({
      next: (res) => {
        setIsSubmitting(false);
        toast.success(res.message);
        if (res && res.data) {
          updateUser({
            ...res.data,
            profile_picture_url: values.profile_picture_url!,
            address: values.address!,
            phone_number: values.phone_number,
            date_of_birth: values.date_of_birth,
            email: values.email
          });
          updateFormValues({
            ...res.data,
            profile_picture_url: values.profile_picture_url!,
            address: values.address!,
            phone_number: values.phone_number,
            date_of_birth: values.date_of_birth,
            email: values.email
          });
        }
      },
      error: (err) => {
        setIsSubmitting(false);
        updateFormValues(user);
        toast.error(err.response?.data?.message || err.message);
      }
    });
  };

  useEffect(() => {
    updateFormValues(user);
  }, [user, updateFormValues]);

  return (
    <form className="py-10">
      <div className="flex flex-col items-center justify-center">
        <Controller
          name="profile_picture_url"
          control={control}
          render={({ field }) => (
            <ProfilePictureUpload
              // currentImage={field.value}
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
          {...register("phone_number")}
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
