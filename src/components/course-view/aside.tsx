"use client";

import { cn } from "@/classnames";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { X } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function CourseViewAside({
  title,
  coverImageUrl,
  slug,
  chapters,
  currentChapter,
}: {
  title: string;
  coverImageUrl: string;
  slug: string;
  chapters: string[];
  currentChapter: number;
}) {
  const linksRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".chapter-link",
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        }
      );
    },
    {
      scope: linksRef,
    }
  );
  return (
    <div className="fixed bg-black/20 inset-0 p-4 z-10 flex flex-col sm:p-0 sm:bg-transparent sm:z-0 sm:sticky sm:top-20">
      <button
        type="button"
        className="self-end h-11 w-11 sm:hidden flex items-center justify-center bg-white rounded mb-2 cursor-pointer"
      >
        <X />
      </button>
      <aside className="border col-[index] border-border rounded-lg overflow-clip bg-white dark:bg-black inset-4 bottom-auto">
        <div className="relative aspect-video flex flex-col justify-end">
          <img
            src={coverImageUrl}
            alt=""
            width={300}
            height={300}
            className="absolute object-cover w-full aspect-video"
          />
          <h2 className="text-white relative font-bold text-xl p-4 pt-8 bg-gradient-to-b from-transparent to-black">
            {title}
          </h2>
        </div>
        <div
          className="flex flex-col divide-y divide-border border-t border-border"
          ref={linksRef}
        >
          {chapters.map((chapter, i) => {
            const url = `/cursos/${slug}/capitulos/${i + 1}`;
            return (
              <Link
                href={url}
                key={url}
                className={cn(
                  "p-4 block chapter-link opacity-0",
                  currentChapter === i + 1 &&
                    "text-neutral-800 bg-gray-100 dark:bg-gray-900 dark:text-blue-200"
                )}
              >
                {chapter}
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
