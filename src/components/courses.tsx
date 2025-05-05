"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Card from "./card/card";

interface Course {
  title: string;
  description: string;
  cover: string;
  number: number;
  key: string;
  slug: string;
}

interface Props {
  courses: Course[];
}

gsap.registerPlugin(useGSAP);

export default function Courses({ courses }: Props) {
  const scopeRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".card",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        }
      );
    },
    { scope: scopeRef }
  );
  return (
    <div
      className="grid-cols-subgrid gap-8 grid col-start-1 -col-end-1"
      ref={scopeRef}
    >
      {courses.map(({ title, description, cover, slug }, i) => (
        <Card
          number={i + 1}
          title={title}
          key={title}
          description={description}
          slug={slug}
          imageUrl={cover}
        />
      ))}
    </div>
  );
}
