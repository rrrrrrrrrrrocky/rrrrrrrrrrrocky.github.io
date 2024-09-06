"use client";
import React, { useEffect, useState } from "react";

const EditorTestPage = () => {
  const [input, setInput] = useState();

  useEffect(() => {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    console.log("range >>", range);
  }, []);

  return (
    <section className="w-full h-full p-10">
      <div
        className="w-full h-full bg-slate-50"
        onInput={(e) => {
          // console.log("e >>>", e.target);
        }}
        // onSelectCapture={(e) => {
        //   console.log("select capture >>", e);
        // }}
        // onSelect={(e) => {
        //   console.log("select >>", e);
        // }}
        contentEditable
      />
    </section>
  );
};

export default EditorTestPage;
