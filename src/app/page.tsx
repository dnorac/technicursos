import Card from "@/components/card";
import { readdir } from "node:fs/promises";
import path from "node:path";

export default async function Home() {
  const courseFolders = await readdir(
    path.join(process.cwd(), "src", "content")
  );
  const results = await Promise.all(
    courseFolders.map((folder) => import(`@/content/${folder}/metadata.mdx`))
  );
  const courses = results.map((result) => result.frontmatter).toSorted();
  return (
    <>
      {/*  */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map(({ title, description, cover }, i) => (
          <Card
            title={title}
            key={title}
            description={description}
            slug={courseFolders[i]}
            imageUrl={cover}
          />
        ))}
      </div>
      {/*  */}
    </>
  );
}
