"use client";
import MarkdownEditor from "@/component/_common/markdown-editor";
import React, { useEffect, useState } from "react";

const EditorTestPage = () => {
  const [input, setInput] = useState();

  // useEffect(() => {
  //   const selection = window.getSelection();
  //   const range = selection?.getRangeAt(0);
  //   console.log("range >>", range);
  // }, []);

  return (
    <section className="w-full h-full p-10">
      <MarkdownEditor />
    </section>
  );
};

export default EditorTestPage;
