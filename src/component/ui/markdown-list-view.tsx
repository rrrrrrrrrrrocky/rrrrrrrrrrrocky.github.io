import { PostMetaData } from "@/script/util/service-utils";
import SimpleMarkdownPreview from "../_common/simple-markdown-editor/simple-markdown-preview";

const MarkdownListView = ({
  postMetadata,
}: {
  postMetadata: Array<PostMetaData>;
}) => {
  return postMetadata.map((post) => {
    return <SimpleMarkdownPreview htmlString={post.content} />;
  });
};

export default MarkdownListView;
