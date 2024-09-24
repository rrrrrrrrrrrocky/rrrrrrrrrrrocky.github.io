"use client";

import { Container } from "../ui/container";

import { useUserData } from "../hook/use-user-data";
import { Box } from "../ui/box";
import SimpleMarkdownEditor from "../_common/simple-markdown-editor/simple-markdown-editor";
import SimpleMarkdownPreview from "../_common/simple-markdown-editor/simple-markdown-preview";
import { useRef, useState } from "react";

const Write = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [htmlString, setHtmlString] = useState("");
  const { isLoading, isError, error } = useUserData();

  // const uploadFile = async (file: File) => {
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   const res = await fetch("/api/imageUpload", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   console.log("res >>>", res);
  // };

  // const handleChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   const [file] = [...(e.target.files || [])];
  //   uploadFile(file);
  // };

  // const inputOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   // const { value, name } = e.target;
  //   // setValue((prev) => ({ ...prev, [name]: value }));
  // };

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container component="main" className="h-[calc(100vh-56px)] w-full">
        {/* <h1 className="my-10 text-2xl">글쓰는 페이지</h1>
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
            // value={title}
            onChange={inputOnChange}
          />
        </div>
        <div className="p-4 mb-1 border-gray-300 border-[1px] flex justify-start items-center">
          <h3 className="w-[100px] mr-10 text-xl">저자</h3>

          <input
            className="w-full border-[1px] border-gray-200 p-2 outline-none focus:border-blue-500 rounded-lg"
            name="author"
            // value={author}
            onChange={inputOnChange}
          />
        </div> */}

        <Box className="w-full h-full flex-1 flex justify-center">
          <SimpleMarkdownEditor
            className="w-1/2 border-b-gray-400 border p-4"
            ref={textareaRef}
            value={htmlString}
            onChange={(e, _ref) => {
              setHtmlString(e.target.value);
            }}
          />
          <SimpleMarkdownPreview className="w-1/2" htmlString={htmlString} />
        </Box>
      </Container>
      // <Container>
      //   <div>
      //     Client
      //     <Button
      //       onClick={() => {
      //         const supabase = createSupabaseClient();
      //         supabase.auth.signOut();
      //       }}>
      //       ㄹ로그아웄
      //     </Button>
      //   </div>
      //   {userData?.userData?.email}
      // </Container>
    );
  }
};

export default Write;
