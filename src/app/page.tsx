import MarkdownListView from "@/component/ui/markdown-list-view";
import { getPostMetadata } from "@/script/util/service-utils";

export default function Home() {
  const postMetadata = getPostMetadata("src/_post");
  return <MarkdownListView postMetadata={postMetadata} />;
}
