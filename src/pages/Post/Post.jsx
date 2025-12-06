import React from "react";
import { Link, useParams } from "react-router-dom";
import posts from "./../../data/posts";
import "./Post.css";

export default function Post() {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) return <h2>Post no encontrado</h2>;

  return (
    <div className="page">
      <div className="post">
        <img src={post.image} className="postBanner" />
        <div className="info">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to="/blog">← Volver al blog</Link>
        </div>
      </div>
    </div>
  );
}
