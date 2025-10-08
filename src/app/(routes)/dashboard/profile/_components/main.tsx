"use client";

import { useCallback, useEffect, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { parseISO, format } from 'date-fns';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { ProfilePictureUpload } from "./profile-picture-upload";

import { useAuth, useProfile } from "@/providers";

import { apiService } from "@/common/services";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { IUser } from "@/common/models/interface";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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

  const { control, formState, register, setValue, reset, handleSubmit } =
    useForm<FormValues>({
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone_number: '',
        date_of_birth: '',
        gender: '',
        address: '',
        profile_picture_url: '',
      },
    });

  const uploadPhoto = (file: File | null) => {
    if (file) {
      setLoading(true);
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
              setLoading(false);
            }
          },
          error: (err: AxiosError<{ message: string }>) => {
            toast.error(err.response?.data?.message || err.message);
            setValue('profile_picture_url', user?.profile_picture_url || null);
            setLoading(false);
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
          date_of_birth: new Date(user.date_of_birth).toLocaleDateString('sv-SE') || '',
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
    <form onSubmit={handleSubmit(onSubmit)} className="py-10">
      <div className="flex flex-col items-center justify-center">
        <Controller
          name="profile_picture_url"
          control={control}
          render={({ field }) => (
            <ProfilePictureUpload
              currentImage={field.value}
              onImageChange={uploadPhoto}
              loading={loading}
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-y-4 xl:gap-x-6 my-4 md:my-8 px-4 xl:px-32 text-base font-light md:text-sm">
        <Input type="text" placeholder="First Name" {...register("firstName")} />
        <Input type="text" placeholder="Last Name" {...register("lastName")} />
        <Input disabled type="email" placeholder="Email" {...register("email")} />
        <Input type="phone" placeholder="Phone Number" {...register("phone_number")} />
        <Controller
          name="date_of_birth"
          control={control}
          render={({ field }) => (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("rounded-[20px] h-9 md:h-12 justify-start text-left ", !field.value && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? field.value : "Select Date of Birth"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  captionLayout="dropdown"
                  selected={field.value ? new Date(field.value) : undefined}
                  onSelect={(date) => {
                    if (!date) return;
                    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
                      .toISOString()
                      .split("T")[0];
                    field.onChange(localDate);
                  }}
                />
              </PopoverContent>
            </Popover>
          )}
        />

        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value || ''}>
              <SelectTrigger>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <Textarea placeholder="Enter your address..." className="col-span-1 lg:col-span-2" {...register("address")} />
      </div>
      <Button
        loading={isSubmitting}
        disabled={!formState.isDirty || isSubmitting}
        type="submit"
        className="flex justify-center w-fit mx-auto px-6"
      >
        Submit
      </Button>
    </form>
  );
};
