import Markdown from "markdown-to-jsx";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/script/util/service-util";

function getPostContent(slug: any) {
  const folder = "recipes/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/_post");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }: any) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `The Bubbly Baker ${id.replaceAll("_", " ")}`,
  };
}

export default function RecipePage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  console.log(post);
  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
