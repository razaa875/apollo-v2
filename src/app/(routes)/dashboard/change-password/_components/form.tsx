/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/providers";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  CurrentPassword: string;
  NewPassword: string;
  ConfirmPassword: string;
};

export const ChangePasswordMain = () => {
  const [loading, setLoading] = useState(false);
  const { signout } = useAuth();
  const { register, handleSubmit } = useForm<FormValues>();

  // const onSubmit = (data: FormValues) => {
  //   setLoading(true);
  //   const payload = {
  //     CurrentPassword: data.CurrentPassword,
  //     NewPassword: data.NewPassword,
  //     ConfirmPassword: data.ConfirmPassword,
  //   };
  //   apiService
  //     .httpPostRequest<{ message: string; status: string }>(
  //       "api/v1/customer/changepassword",
  //       payload,
  //       { config: { requireAuth: true, signout } }
  //     )
  //     .subscribe({
  //       next: (res) => {
  //         setLoading(false);
  //         if (res.status === "success") {
  //           toast.success(res.message);
  //           reset();
  //         }
  //       },
  //       error: (err) => {
  //         setLoading(false);
  //         toast.success(err.message);
  //         toast.error(err.message);
  //       },
  //     });
  // };

  return (
    <div className="flex flex-col justify-center items-center w-[93%] lg:w-[50%] lg:h-screen mx-auto p-6 lg:p-0">
      <h1 className="text-[25px] lg:text-[38px] xl:text-[42px] font-ubuntu font-bold leading-7 lg:leading-11 text-tertiary-light text-center">
        Change Password
      </h1>
      <form className="grid grid-cols-1 gap-y-3 xl:gap-y-5 mt-4 md:mt-8 px-0 w-full">
        <Input
          type="password"
          placeholder="Current Password"
          {...register("CurrentPassword")}
        />
        <Input
          type="password"
          placeholder="New Password"
          {...register("NewPassword")}
        />
        <Input
          type="password"
          placeholder="Confirm New Password"
          {...register("ConfirmPassword")}
        />
        <Button
          loading={loading}
          type="submit"
          className="mx-auto mt-5 text-xl p-6"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
