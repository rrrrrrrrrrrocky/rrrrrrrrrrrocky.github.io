import { PostMetaData } from "@/script/util/service-utils";
import { Box } from "./box";
import { Typography } from "./typography";
import Link from "next/link";
import dayjs from "dayjs";

const MarkdownListView = ({
  postMetadata,
}: {
  postMetadata: Array<PostMetaData>;
}) => {
  return (
    <Box
      component="section"
      className="grid h-[inherit] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 py-10 w-full">
      {postMetadata.map((post) => {
        return (
          <Link
            href={{
              pathname: `/posts/${post.slug}`,
            }}
            key={post.slug}
            className="px-6 cursor-pointer group hover:scale-105 transition-all duration-200 py-4 flex flex-col gap-y-4 justify-between rounded-lg shadow-lg bg-white">
            <Box className="flex flex-col gap-y-2">
              <Typography
                className="group-hover:text-blue-500 line-clamp-2"
                component="h2">
                {post.title}
              </Typography>
              {dayjs(post.createdAt || null).isValid() && (
                <Typography component="span" className="text-gray-400">
                  {dayjs(post.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                </Typography>
              )}

              <Typography component="p" className="text-gray-500 line-clamp-3">
                {post.description}
              </Typography>
            </Box>
            {post.tags.length > 0 && (
              <Box className="flex flex-wrap gap-2 justify-start items-center">
                {post.tags.map((tag, idx) => {
                  return (
                    <Typography
                      key={idx}
                      className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                      component="span">
                      {tag}
                    </Typography>
                  );
                })}
              </Box>
            )}
          </Link>
        );
      })}
    </Box>
  );
};

export default MarkdownListView;
