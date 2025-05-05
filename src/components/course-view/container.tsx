import { ReactNode } from "react";

export default function CourseViewContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="border border-border rounded-lg overflow-clip grid-popout my-8">
      {children}
    </div>
  );
}
