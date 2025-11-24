import { useState } from "react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { useAuth } from "@/providers";
import { apiService } from "../services";
import { toast } from "sonner";

interface LogoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LogoutModal({ open, onOpenChange }: LogoutModalProps) {
  const { signout } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    apiService.httpPostRequest<{ status: string; message: string }>("user/logout", '', "", { setCache: false, config: { requireAuth: true } }).subscribe({
      next: (res) => {
        if (res.status === "success") {
          toast.success(res.message);
          signout("/login");
          setLoading(false);
        }
      },
      error: (err) => {
        console.log(err.message);
        toast.error(err.message);
        setLoading(false);
      },
    });

    // await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Logout</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to log out?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          <Button loading={loading} onClick={handleLogout}>
            Logout
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
