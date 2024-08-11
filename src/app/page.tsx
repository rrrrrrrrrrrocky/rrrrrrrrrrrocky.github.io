import { Container } from "@/component/ui/container";
import SearchView from "@/component/ui/md-view";
import getPostMetadata from "@/script/util/service-util";

export default function Home() {
  const postMetadata = getPostMetadata("src/_post");
  console.log("postMetadata >>", postMetadata);
  return (
    <Container component="main" className="container mx-auto">
      <SearchView postMetadata={postMetadata} />
    </Container>
  );
}
