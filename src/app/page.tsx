import { Container } from "@/component/ui/container";
import MarkdownListView from "@/component/ui/markdown-list-view";
// import SearchView from "@/component/ui/md-view";
import getPostMetadata from "@/script/util/service-utils";

export default function Home() {
  const postMetadata = getPostMetadata("src/_post");
  // console.log("postMetadata >>", postMetadata);
  return (
    <Container component="main" className="container mx-auto">
      <MarkdownListView postMetadata={postMetadata} />
      {/* <SearchView postMetadata={postMetadata} /> */}
    </Container>
  );
}
