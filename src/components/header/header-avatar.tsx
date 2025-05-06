"use client";
import { cn } from "@/classnames";
import useHeaderSticky from "@/hooks/use-header-sticky";
import { UserButton } from "@clerk/nextjs";

export default function HeaderAvatar() {
  const sticky = useHeaderSticky();

  return (
    <UserButton
      appearance={{
        elements: {
          userButtonAvatarBox: cn(
            "transition-all",
            sticky ? "!w-9 !h-9" : "!w-12 !h-12"
          ),
        },
      }}
    />
  );
}
