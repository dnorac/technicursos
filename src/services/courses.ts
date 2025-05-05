import { readdir } from "fs/promises";
import path from "path";

export const loadCourses = async () => {
  const courseFolders = await readdir(
    path.join(process.cwd(), "src", "content")
  );
  const results = await Promise.all(
    courseFolders.map((folder) => import(`@/content/${folder}/metadata.mdx`))
  );
  const courses = results
    .map((result) => result.frontmatter)
    .toSorted()
    .map((c, i) => ({
      ...c,
      number: i + 1,
      key: c.title,
      slug: courseFolders[i],
    }));
  return courses;
};
