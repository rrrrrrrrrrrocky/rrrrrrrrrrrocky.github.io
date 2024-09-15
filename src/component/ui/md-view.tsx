"use client";
import PostCard from "./post-card";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function SearchView(props: any) {
  const { postMetadata } = props;
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  // console.log("keyword.toLowerCase( >>", keyword.toLowerCase());
  return (
    <>
      <div className="postsContainer">
        {postMetadata
          .filter((val: any) => {
            console.log("val >>", val);
            return val.title.toLowerCase().includes(keyword.toLowerCase());
          })
          .map((post: any, postIndex: number) => {
            return <PostCard key={postIndex} post={post} />;
          })}
      </div>
    </>
  );
}
