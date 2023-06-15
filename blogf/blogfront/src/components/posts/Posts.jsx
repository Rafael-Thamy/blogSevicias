import Post from "../post/Post";
import "./posts.css";

//it takes posts as props
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}