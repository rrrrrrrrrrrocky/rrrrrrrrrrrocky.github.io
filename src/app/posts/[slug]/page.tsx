import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { getPostMetadata, PostMetaData } from "@/script/util/service-utils";
import { notFound } from "next/navigation";
import { Box } from "@/component/ui/box";
import { Typography } from "@/component/ui/typography";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/component/ui/loading-spinner";

const SimpleMarkdownPreview = dynamic(
  () =>
    import(
      "@/component/_common/simple-markdown-editor/simple-markdown-preview"
    ),
  {
    ssr: false,
    loading: () => (
      <Box className="h-full flex flex-1 flex-col items-center justify-center">
        <LoadingSpinner />
      </Box>
    ),
  }
);

const getPostContent = (slug: string): PostMetaData => {
  const folderName = `src/_post/${slug}/`;
  const file = folderName + "index.md";
  const content = fs.readFileSync(file, "utf8");

  const matterData = matter(content);
  return {
    title: matterData.data.title,
    slug: folderName,
    content: matterData.content,
    tags: matterData.data.tags,
    createdAt: matterData.data.createdAt,
    description: matterData.data.description || "",
  };
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/_post");
  const params = posts.map((post) => ({ slug: post.slug }));

  return params;
};

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = getPostContent(params.slug);

  return {
    title: post.title,
  };
}

const PostDetailPage = async (props: {
  params: {
    slug: string;
  };
}) => {
  const slug = props.params.slug;
  const post = await getPostContent(slug);

  if (!post) {
    return notFound();
  }

  return (
    <Box className="flex flex-1 h-[inherit] w-[inherit] flex-col c2-400 px-4 py-12">
      <Box className="flex flex-col gap-y-2 w-full">
        <Typography component="h1" className="t3-700">
          {post.title}
        </Typography>

        {dayjs(post.createdAt || null).isValid() && (
          <Typography component="span" className="text-gray-400 text-left">
            {dayjs(post.createdAt).format("YYYY-MM-DD HH:mm:ss")}
          </Typography>
        )}

        {post.tags.length > 0 && (
          <Box className="flex flex-wrap gap-2 justify-start items-center">
            {post.tags.map((tag, idx) => {
              return (
                <Typography
                  key={idx}
                  className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  component="span">
                  {tag}
                </Typography>
              );
            })}
          </Box>
        )}
      </Box>

      <SimpleMarkdownPreview htmlString={post.content} />
    </Box>
  );
};

export default PostDetailPage;
