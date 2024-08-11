import Link from "next/link";

interface Props {}

const PostCard = (props: any) => {
  const { post } = props;
  return (
    <Link className="unstyled" href={`/posts/${post.slug}`}>
      <div className="postCard">
        <h3>{post.title}</h3>
        <p>{post.bio}</p>
        <div className="statsContainer">
          <div>
            <h5>Prep Time</h5>
            <p>{post.prep_time}</p>
          </div>
          <div>
            <h5>Cook Time</h5>
            <p>{post.cook_time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PostCard;
