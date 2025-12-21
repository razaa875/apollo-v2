"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
// import { useFormContext } from 'react-hook-form';
import { useCart } from "@/providers/cart";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Cart() {
  const { cart, updateItem, removeItem, resetCart } = useCart();
  const { setValue } = useFormContext();

  const items = Object.values(cart);

  const handleIncrement = (id: number) => {
    const item = cart[id];
    updateItem({ ...item, quantity: item.quantity + 1 });
  };

  const handleDecrement = (id: number) => {
    const item = cart[id];
    if (item.quantity > 1) {
      updateItem({ ...item, quantity: item.quantity - 1 });
    } else {
      removeItem(id);
    }
  };

  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  // ✅ Only send productId & quantity to parent form
  useEffect(() => {
    const formItems = items.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));
    setValue("items", formItems);
  }, [items, setValue]);

  return (
    <div className="w-full">
      {items.length === 0 ? (
        <div className="bg-[url('/images/no-data/no-data-bg.webp')] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-y-8 py-8 h-120 lg:h-122 xl:h-100 2xl:h-120 rounded-[20px] drop-shadow-2xl">
          <h3 className="font-medium text-3xl text-white text-center">
            No Item Found
          </h3>
          <Image
            src="/images/no-data/no-data.svg"
            alt="No Data Image"
            title="No Data Image"
            height={566}
            width={566}
            className="size-60 mx-auto object-contain"
          />
          <Link href="/products" className="w-fit">
            <Button type="button" variant="destructive">
              Place Order
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <ScrollArea className="h-85">
            <div className="space-y-6 pr-4 mt-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row items-center gap-6 border-b border-black/20 pb-4"
                >
                  <Image
                    src={item.image || "/images/not-found/not-found.png"}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="object-cover bg-gray-100 rounded-lg size-24"
                  />

                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-medium line-clamp-1">
                        {item.title}
                      </h2>
                      <p className="text-base font-medium">
                        <span className="text-lg">$ </span>
                        {item.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          className="bg-primary/10 text-primary p-1 rounded-full cursor-pointer"
                          onClick={() => handleDecrement(item.id)}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          className="bg-primary/10 text-primary p-1 rounded-full cursor-pointer"
                          onClick={() => handleIncrement(item.id)}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="p-1 text-primary bg-red-600 rounded-full cursor-pointer"
                        onClick={() => removeItem(item.id)}
                      >
                        <X size={14} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="mt-10 text-end">
            <h2 className="text-xl font-bold">Total: $ {total.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}
