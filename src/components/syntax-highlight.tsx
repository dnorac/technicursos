"use client";
import hljs from "highlight.js";
import { ReactNode, useEffect } from "react";

interface Props {
  post: ReactNode;
}

export default function SyntaxHighlightedPost({ post }: Props) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return post;
}
