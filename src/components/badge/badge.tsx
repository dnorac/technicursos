import { ComponentProps } from "react";

import { cn } from "@/classnames";

export function Badge({ children, className }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "block py-3 px-6 rounded-lg uppercase text-sm border border-border w-fit",
        className
      )}
    >
      {children}
    </span>
  );
}
