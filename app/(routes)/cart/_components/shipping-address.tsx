"use client";

import { useCallback, useEffect, useState } from "react";

import { BadgeCheck, MapPin, Phone, Plus, User } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

import { useAuth } from "@/providers";

import { apiService } from "@/common/services";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShippingAddressFormDialog } from "../../dashboard/shipping-address/_components/ShippingAddressFormDialog";
import { useMediaQuery } from "usehooks-ts";
import { Card, CardContent } from "@/components/ui/card";
import { IShippingAddress } from "@/common/models/interface";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useController, useFormContext } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";

export const SelectShippingAddress = () => {
  const { signout, isAuthenticated } = useAuth();
  const { setValue } = useFormContext();

  const [address, setAddress] = useState<IShippingAddress[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ connect RHF field
  const {
    field: { value, onChange },
  } = useController({
    name: "shippingId",
  });

  const isDesktop = useMediaQuery("(min-width: 1024px)", {
    initializeWithValue: true,
  });

  const handleSelect = (id: string) => {
    onChange(id); // ✅ updates RHF value
  };

  const fetchDataMethods = useCallback(() => {
    setLoading(true);

    apiService
      .httpGetRequest<{ status: string; data: IShippingAddress[] }>(
        "user/shipping-addresses",
        "",
        { setCache: false, config: { requireAuth: true } }
      )
      .subscribe({
        next: (res) => {
          if (res.status === "success") {
            const enabled = res.data.filter((i) => i.status === "enabled");
            setAddress(enabled);

            // ✅ set default selected automatically (optional)
            const defaultAddr =
              enabled.find((i) => i.is_default === 1) || enabled[0];

            if (defaultAddr) {
              setValue("shippingId", defaultAddr.id);
              onChange(defaultAddr.id);
            }

            setLoading(false);
          }
        },
        error: (err) => {
          if (err.status === 401) {
            signout("/login");
          }
          console.log(err.message);
          setLoading(false);
        },
      });
  }, [onChange, setValue, signout]);

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      setAddress([]);
      return; // ❌ API hit nahi hogi
    }

    fetchDataMethods();
  }, [fetchDataMethods, isAuthenticated]);

  return (
    <>
      <div className="mt-8 lg:mt-0">
        <div className="flex justify-end items-center mb-4">
          <Button
            type="button"
            variant="link"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 cursor-pointer"
          >
            Add Shipping Address
            <span className="bg-primary/5 rounded-lg p-2">
              <Plus size={18} />
            </span>
          </Button>
        </div>
        {loading ? (
          <div className="h-85 flex items-center justify-center">
            <Spinner className="size-10" />
          </div>
        ) :
          <>
            {!loading && address.length === 0 ? (
              <div className="h-85 flex flex-col items-center justify-center text-center border border-dashed rounded-2xl p-10">
                <MapPin size={40} className="text-muted-foreground mb-3" />
                <h3 className="font-semibold text-lg">No shipping address found</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Please add a shipping address to continue
                </p>
                <Button
                  type="button"
                  className="mt-5 flex items-center gap-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Plus size={18} />
                  Add Shipping Address
                </Button>
              </div>
            ) : (
              <>
                {isDesktop ? (
                  <ScrollArea className="h-85">
                    <RadioGroup value={value} onValueChange={handleSelect}>
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead>S#</TableHead>
                            <TableHead>Shipped To</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Addresses</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>

                        <TableBody>
                          {address.map((item, i) => (
                            <TableRow
                              key={i}
                              className="hover:bg-muted/40 transition-colors cursor-pointer"
                            >
                              <TableCell className="font-medium">{i + 1}</TableCell>
                              <TableCell className="flex items-center gap-2">
                                {item.full_name}
                                {item.is_default === 1 && (
                                  <span className="rounded-full bg-green-400 text-green-200 text-xs px-2 py-0.5">
                                    {item.is_default ? "Default" : null}
                                  </span>
                                )}
                              </TableCell>
                              <TableCell>{item.phone}</TableCell>
                              <TableCell>{item.address_line1}</TableCell>
                              <TableCell className="flex gap-2 items-center">
                                <RadioGroupItem value={String(item.id)} id={`r-${i}`} />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </RadioGroup>
                  </ScrollArea>
                ) : (
                  <div className="space-y-4 md:hidden">
                    {address.map((item, i) => (
                      <Card
                        key={i}
                        className="p-4 rounded-2xl shadow-md border border-black/10
          transition-all duration-300 hover:shadow-lg"
                      >
                        <CardContent className="p-0 space-y-4">
                          {/* Header Row */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <User size={18} className="text-primary" />
                              <p className="font-semibold text-base">
                                {item.full_name}
                              </p>
                            </div>

                            <RadioGroup defaultValue="compact">
                              <RadioGroupItem value="compact" id={`r-${i}`} />
                            </RadioGroup>
                          </div>

                          {/* Default Badge */}
                          {item.is_default === 1 && (
                            <Badge
                              variant="secondary"
                              className="w-fit flex items-center gap-1 bg-green-500 text-white text-xs rounded-full px-2 py-0.5"
                            >
                              <BadgeCheck size={12} />
                              Default
                            </Badge>
                          )}

                          <Separator />

                          {/* Phone */}
                          <div className="flex items-center gap-2 text-sm">
                            <Phone size={16} className="text-muted-foreground" />
                            <span className="font-medium">{item.phone}</span>
                          </div>

                          {/* Address */}
                          <div className="flex items-start gap-2 text-sm leading-5">
                            <MapPin
                              size={16}
                              className="text-muted-foreground mt-0.5"
                            />
                            <span>{item.address_line1}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </>
            )}

          </>}
      </div>

      <ShippingAddressFormDialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={fetchDataMethods}
      />
    </>
  );
};
