"use client";
import { cn } from "@/classnames";
import useHeaderSticky from "@/hooks/use-header-sticky";
import Link from "next/link";
import { ComponentProps } from "react";

export default function HeaderLink({
  children,
  className,
  ...props
}: ComponentProps<typeof Link>) {
  const sticky = useHeaderSticky();

  return (
    <Link
      className={cn("transition-all p-6", sticky ? "py-4" : "py-6", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
