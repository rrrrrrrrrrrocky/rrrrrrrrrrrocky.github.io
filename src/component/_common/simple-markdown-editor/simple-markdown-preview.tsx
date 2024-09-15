"use client";

import React, { HTMLAttributes, useEffect, useState } from "react";
import "./css/markdown-preview.css";
import { markdownToHtml } from "@/script/util/markdown-utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  htmlString: string;
}

const SimpleMarkdownPreview = ({ htmlString, className, ...props }: Props) => {
  const [html, setHtml] = useState("");
  const getHtml = async () => {
    const html = await markdownToHtml(htmlString || "");
    setHtml(html);
    return html;
  };

  useEffect(() => {
    getHtml();
  }, [htmlString]);

  return (
    <div
      // id="rrrrrrrrrrr-markdown-preview"
      className={["markdown-body", className].join(" ")}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
};

export default SimpleMarkdownPreview;
