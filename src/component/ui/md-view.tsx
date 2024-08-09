"use client";
import SearchBar from "./search-bar";
import PostCard from "./post-card";
import React from "react";

export default function SearchView(props: any) {
  const { postMetadata } = props;
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="postsContainer">
        {postMetadata
          .filter((val: any) => {
            return val.title.includes(searchValue);
          })
          .map((post: any, postIndex: number) => {
            return <PostCard key={postIndex} post={post} />;
          })}
      </div>
    </>
  );
}
