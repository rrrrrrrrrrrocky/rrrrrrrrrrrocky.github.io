import SearchView from "@/component/ui/md-view";
import getPostMetadata from "@/script/util/service-util";

export default function Home() {
  const postMetadata = getPostMetadata("src/_post");
  console.log("postMetadata >>", postMetadata);
  return (
    <main>
      <SearchView postMetadata={postMetadata} />
    </main>
  );
}
