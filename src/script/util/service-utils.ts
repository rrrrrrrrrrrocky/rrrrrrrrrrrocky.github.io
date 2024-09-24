import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface PostMetaData {
  title: string;
  slug: string;
  content: string;
  tags: Array<string>;
  createdAt: string;
  description: string;
}

export const getPostMetadata = (basePath: string): Array<PostMetaData> => {
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
      const matterData = matter(fileContents);

      return {
        title: matterData.data.title,
        slug: folderName,
        content: matterData.content,
        tags: matterData.data.tags,
        createdAt: matterData.data.createdAt,
        description: matterData.data.description || "",
      };
    })
    .sort((a, b) => (dayjs(b.createdAt).isAfter(dayjs(a.createdAt)) ? 1 : -1));

  return dynamicPostFolder;
};
