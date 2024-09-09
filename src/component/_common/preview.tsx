"use client";
import { markedClientParse } from "@/script/util/markdown-utils";
// import "./preview.css";
import parse from "html-react-parser";
const Preview = ({ innerText }: { innerText: string }) => {
  const htmlString = markedClientParse(innerText);
  let domParser = new DOMParser();
  let doc = domParser.parseFromString(htmlString, "text/html");
  console.log("doc >>", doc);
  // return <iframe src={doc} />;
  // return (
  //   <div className="preview" dangerouslySetInnerHTML={{ __html: htmlString }} />
  // );
  // className="preview">{htmlString}</div>;
  return <section className="preview">{parse(htmlString)}</section>;
  // return <div className="preview">{htmlString}</div>;
};

export default Preview;
