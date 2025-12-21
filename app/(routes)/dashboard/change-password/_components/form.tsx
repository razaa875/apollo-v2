"use client";

import { apiService } from "@/common/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/providers";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormValues = {
  currentPassword: string;
  newPassword: string;
  ConfirmPassword: string;
};

export const ChangePasswordMain = () => {
  const [loading, setLoading] = useState(false);
  const { signout } = useAuth();
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    const payload = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    };
    apiService.httpPostRequest<{ message: string; status: string }>("user/change-password", payload, '', { setCache: false, config: { requireAuth: true } }).subscribe({
      next: (res) => {
        setLoading(false);
        if (res.status === "success") {
          toast.success(res.message);
          reset();
        }
      },
      error: (err) => {
        setLoading(false);
        toast.error(err.message);
        if (err.status === 401 || err.status === 403) {
          signout("/login");
        }
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-[93%] lg:w-[50%] lg:h-screen mx-auto p-6 lg:p-0">
      <h1 className="text-[25px] lg:text-[38px] xl:text-[42px] font-ubuntu font-bold leading-7 lg:leading-11 text-tertiary-light text-center">
        Change Password
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-3 xl:gap-y-5 mt-4 md:mt-8 px-0 w-full">
        <Input
          type="password"
          placeholder="Current Password"
          {...register("currentPassword")}
        />
        <Input
          type="password"
          placeholder="New Password"
          {...register("newPassword")}
        />
        <Input
          type="password"
          placeholder="Confirm New Password"
          {...register("ConfirmPassword")}
        />
        <Button
          loading={loading}
          type="submit"
          variant="default"
          size="default"
          className="mx-auto mt-5"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
