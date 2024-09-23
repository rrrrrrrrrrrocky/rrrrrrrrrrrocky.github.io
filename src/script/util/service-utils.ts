import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface PostMetaData {
  title: string;
  slug: string;
  content: string;
  tags: Array<string>;
  createdAt: string;
}

export default function getPostMetadata(basePath: string): Array<PostMetaData> {
  const folder = basePath + "/";
  // 디렉토리 내의 모든 항목 가져오기
  const items = fs.readdirSync(folder);

  const dynamicPostFolder = items
    .filter((item) => {
      const itemPath = path.join(folder, item);
      const stats = fs.statSync(itemPath);
      return stats.isDirectory();
    })
    .map((folderName) => {
      const fileContents = fs.readFileSync(
        `${basePath}/${folderName}/index.md`,
        "utf8"
      );
      const matterResult = matter(fileContents);
      console.log("matterResult >>", matterResult);

      return {
        title: matterResult.data.title,
        slug: folderName,
        content: matterResult.content,
        tags: matterResult.data.tag,
        createdAt: matterResult.data.createdAt,
      };
    });

  return dynamicPostFolder;
}

// export default function getPostMetadata(basePath: string) {
//   const folder = basePath + "/";
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));

//   // get the file data
//   const posts = markdownPosts
//     .map((filename) => {
//       const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
//       const matterResult = matter(fileContents);
//       // console.log("matterResult >>>", matterResult);
//       return {
//         title: matterResult.data.title,
//         // prep_time: matterResult.data.prep_time,
//         // cook_time: matterResult.data.cook_time,
//         // bio: matterResult.data.description,
//         slug: filename.replace(".md", ""),
//         content: matterResult.content,
//         tag: matterResult.data.tag,
//         isPublish: matterResult.data.isPublish,
//       };
//     })
//     .filter((data) => data.isPublish);
//   return posts;
// }
