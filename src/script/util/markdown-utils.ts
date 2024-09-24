import rehypeStringify from "rehype-stringify";
import markdown from "remark-parse";
import remarkRehype from "remark-rehype";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import breaks from "remark-breaks";
import remarkFrontmatter from "remark-frontmatter";

export const markdownToHtml = async (value: string) => {
  const processor = remark()
    .data("settings", {
      allowDangerousHtml: true,
    })
    .use(markdown)
    .use(breaks)
    .use(remarkGfm, {})
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSanitize)
    .use(rehypeSlug)
    .use(remarkFrontmatter)
    .use(rehypeStringify);

  const file = await processor.process(value);
  return file.toString();
};
