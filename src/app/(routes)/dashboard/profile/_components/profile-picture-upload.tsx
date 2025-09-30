"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Camera, User, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfilePictureUploadProps {
  currentImage?: string;
  onImageChange?: (file: File | null) => Promise<void> | void; // allow async
}

export function ProfilePictureUpload({
  currentImage,
  onImageChange,
}: ProfilePictureUploadProps) {
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB");
      return;
    }

    setLoading(true);

    try {
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Call callback (maybe uploading to server)
      await onImageChange?.(file);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (currentImage) setPreview(currentImage);
  }, [currentImage]);

  return (
    <div className="flex items-center gap-4">
      <div className="relative group">
        <Avatar className="size-40 cursor-pointer transition-all duration-200 group-hover:opacity-80">
          <AvatarImage src={preview} alt="Profile picture" />
          <AvatarFallback className="bg-muted">
            <User className="size-18 text-[#1b1f3a62]"/>
          </AvatarFallback>
        </Avatar>

        {/* Loader overlay */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
            <Loader2 className="size-8 animate-spin text-white" />
          </div>
        )}

        {/* Camera overlay */}
        {!loading && (
          <div
            onClick={handleClick}
            className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          >
            <Camera className="size-6 text-white" />
          </div>
        )}

        {/* Camera icon badge */}
        {!loading && (
          <div
            onClick={handleClick}
            className="absolute -top-1 -right-1 size-10 bg-secondary rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary/90 transition-colors"
          >
            <Camera className="size-6 text-primary-foreground" />
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload profile picture"
      />
    </div>
  );
}
