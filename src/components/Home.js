import React, { useContext } from "react";
import { PostContext } from "../PostContext";
import Post from "./Post";
const Home = () => {
  const { posts } = useContext(PostContext);

  return (
    <div className="posts">
      {posts.map(post => {
        return <Post key={post.id} {...post}></Post>;
      })}
    </div>
  );
};

export default Home;
