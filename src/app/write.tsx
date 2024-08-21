import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "@/component/ui/container";

const Write = () => {
  const router = useRouter();

  const [{ title, author, content }, setValue] = useState({
    title: "",
    author: "",
    content: "",
  });
  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/imageUpload", {
      method: "POST",
      body: formData,
    });

    console.log("res >>>", res);
  };

  const handleChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const [file] = [...(e.target.files || [])];
    uploadFile(file);
  };

  const inputOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const textAreaOnChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const { value, name } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async () => {
    console.log({ title, author, content });

    const markdown = `---
    title: ${title}
    excerpt: 'excerpt'
    coverImage: '/assets/blog/preview/cover.jpg'
    date: '2020-03-16T05:35:07.322Z'
    author:
      name: ${author}
      picture: '/assets/blog/authors/joe.jpeg'
    ogImage:
      url: '/assets/blog/preview/cover.jpg'
---
    ${content}
    `;

    const data = {
      markdown,
      fileName: `${new Date()}_${title}`,
    };
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      router.push("/");
    }
  };

  return (
    <Container>
      <h1 className="my-10 text-2xl">글쓰는 페이지</h1>
      <div className="p-4 my-2 border-gray-300 border-[1px] flex justify-start items-center">
        <h3 className="w-[100px] mr-10 text-xl">커버 이미지</h3>

        <input
          id="input-file"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleChangeFile}
        />
      </div>
      <div className="p-4 mb-1 border-gray-300 border-[1px] flex justify-start items-center">
        <h3 className="w-[100px] mr-10 text-xl">타이틀</h3>

        <input
          className="w-full border-[1px] border-gray-200 p-2 outline-none focus:border-blue-500 rounded-lg"
          name="title"
          value={title}
          onChange={inputOnChange}
        />
      </div>
      <div className="p-4 mb-1 border-gray-300 border-[1px] flex justify-start items-center">
        <h3 className="w-[100px] mr-10 text-xl">저자</h3>

        <input
          className="w-full border-[1px] border-gray-200 p-2 outline-none focus:border-blue-500 rounded-lg"
          name="author"
          value={author}
          onChange={inputOnChange}
        />
      </div>

      <div className="p-4 mb-1 border-gray-300 border-[1px] flex justify-start items-center">
        <h3 className="w-[100px] mr-10 text-xl">내용</h3>

        <textarea
          className="w-full border-[1px] min-h-[400px] border-gray-200 p-2 outline-none focus:border-blue-500 rounded-lg"
          name="content"
          value={content}
          onChange={textAreaOnChange}
        />
      </div>

      <div className="mt-4 mb-1 flex justify-end items-center">
        <button
          className="py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-600 text-white"
          type="submit"
          onClick={onSubmit}>
          Submit
        </button>
      </div>
    </Container>
  );
};

export default Write;
