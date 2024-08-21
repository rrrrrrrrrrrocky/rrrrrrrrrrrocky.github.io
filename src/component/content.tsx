"use client";

import MDEditor from "@uiw/react-md-editor";

const Content = ({ content }: { content: string }) => {
  return (
    <div
      className="markdownDiv"
      data-color-mode="light"
      style={{ padding: 15 }}>
      <MDEditor.Markdown style={{ padding: 10 }} source={content} />
    </div>
  );
};

export default Content;
