"use client";
import { useEffect, useState } from "react";
import useScrollPosition from "./use-scroll-position";

export default function useHeaderSticky() {
  const [sticky, setSticky] = useState(false);
  const scrollPos = useScrollPosition();

  useEffect(() => {
    if (scrollPos > 100) setSticky(true);
    if (scrollPos < 50) setSticky(false);
  }, [scrollPos]);

  return sticky;
}
