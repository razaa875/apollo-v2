"use client";

import { Button } from "@/components/ui/button";
import Cart from "./cart-item";
import { SelectShippingAddress } from "./shipping-address";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "sonner";
import { useAuth } from "@/providers";

interface IFormSubmit {
  items: {
    productId: number;
    quantity: number;
  }[];
  shippingId: string; // ✅ match field name
}

export default function MainCart() {
  const { isAuthenticated } = useAuth()
  const form = useForm({
    defaultValues: {
      items: [],
      shippingId: "",
    },
  });

  function onSubmit(values: IFormSubmit) {
    if (!values.shippingId) {
      toast.error("Please select a shipping address to continue");
      return;
    }
    console.log(values);
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="pt-[35%] md:pt-[15%] lg:pt-[8%] w-[90%] mx-auto min-h-dvh"
      >
        <h1 className="text-[24px] lg:text-[38px] xl:text-[42px] font-bold text-center">
          Your Cart
        </h1>

        <div className="flex flex-col-reverse lg:flex-row lg:justify-between mt-8">
          <div className="lg:w-[55%]">
            <SelectShippingAddress />
          </div>

          <div className="lg:w-[40%]">
            <Cart />
          </div>
        </div>
        {
          isAuthenticated &&
          <div className="flex justify-center">
            <Button type="submit" className="mt-6 btn-primary">
              Proceed to Checkout
            </Button>
          </div>
        }
      </form>
    </FormProvider>
  );
}
