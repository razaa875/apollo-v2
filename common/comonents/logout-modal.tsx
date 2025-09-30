import { AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers";
import { useState } from "react";

export default function LogoutModal() {
    const { signout } = useAuth();

    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        signout("/login");
        setLoading(false);
    };

    return (
        <AlertDialogContent className="">
            <AlertDialogHeader>
                <AlertDialogTitle>Logout</AlertDialogTitle>
                <AlertDialogDescription>Are you sure do you want to Logout?</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel asChild>
                    <Button variant="outline">
                        Cancel
                    </Button>
                </AlertDialogCancel>
                <Button loading={loading} onClick={handleLogout}>
                    Logout
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    )
}