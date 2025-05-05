"use client";
import { cn } from "@/classnames";
import useScrollPosition from "@/hooks/use-scroll-position";
import Link from "next/link";
import { ComponentProps } from "react";

export default function HeaderLink({
  children,
  className,
  ...props
}: ComponentProps<typeof Link>) {
  const scrollPos = useScrollPosition();

  return (
    <Link
      className={cn(
        "transition-all p-6",
        scrollPos > 20 ? "py-4" : "py-6",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
