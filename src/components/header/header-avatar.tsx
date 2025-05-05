"use client";
import useScrollPosition from "@/hooks/use-scroll-position";
import { cn } from "@/utils";
import { UserButton } from "@clerk/nextjs";

export default function HeaderAvatar() {
  const scrollPos = useScrollPosition();

  return (
    <UserButton
      appearance={{
        elements: {
          userButtonAvatarBox: cn(
            "transition-all",
            scrollPos > 20 ? "!w-9 !h-9" : "!w-12 !h-12"
          ),
        },
      }}
    />
  );
}
