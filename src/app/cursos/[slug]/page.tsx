import { Chapter, ChapterList } from "@/components/chapters";
import { CourseViewContainer, Intro } from "@/components/course-view";
import { loadChapters } from "@/services/courses";
import type { Page } from "@/types";

export default async function Page({
  params,
}: Page<{
  slug: string;
}>) {
  const { slug } = await params;
  const { chapters, metadata } = await loadChapters(slug);

  return (
    <CourseViewContainer>
      <Intro
        coverImageUrl={metadata.cover}
        title={metadata.title}
        slug={slug}
        description={metadata.description}
        lessons={chapters.length}
      />
      <ChapterList>
        {chapters.map((chapter, i) => (
          <Chapter course={slug} id={i + 1} key={chapter}>
            {chapter}
          </Chapter>
        ))}
      </ChapterList>
    </CourseViewContainer>
  );
}
