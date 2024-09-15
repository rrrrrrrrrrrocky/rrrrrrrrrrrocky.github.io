import React from "react";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/script/util/service-utils";
import Content from "@/component/content";

function getPostContent(slug: any) {
  const folder = "src/_post/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("src/_post");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params }: any) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `The Bubbly Baker ${id.replaceAll("_", " ")}`,
  };
}

export default function RecipePage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  // console.log(post);
  return (
    <main>
      <article>
        <Content content={post.content} />
        {/* <Markdown>{post.content}</Markdown> */}
      </article>
    </main>
  );
}
