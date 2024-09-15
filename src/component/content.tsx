"use client";

import SimpleMarkdownPreview from "./_common/simple-markdown-editor/simple-markdown-preview";

const Content = ({ content }: { content: string }) => {
  return (
    <div
      className="markdownDiv"
      data-color-mode="light"
      style={{ padding: 15 }}>
      <SimpleMarkdownPreview htmlString={content} />
    </div>
  );
};

export default Content;
