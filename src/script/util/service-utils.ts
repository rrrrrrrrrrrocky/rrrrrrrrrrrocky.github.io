import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath: string) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // get the file data
  const posts = markdownPosts
    .map((filename) => {
      const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
      const matterResult = matter(fileContents);
      console.log("matterResult >>>", matterResult);
      return {
        title: matterResult.data.title,
        // prep_time: matterResult.data.prep_time,
        // cook_time: matterResult.data.cook_time,
        // bio: matterResult.data.description,
        slug: filename.replace(".md", ""),
        content: matterResult.content,
        tag: matterResult.data.tag,
        isPublish: matterResult.data.isPublish,
      };
    })
    .filter((data) => data.isPublish);
  return posts;
}
