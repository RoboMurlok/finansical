import React from "react";
import Card from "../../components/Card/Card";
import data from "../../data/data.json";
import posts from "../../data/posts";

export default function Blog({ ...props }) {
  const { section_1 } = data.blog;
  return (
    <div {...props}>
      <div className="banner_2">
        <h2>{section_1.banner}</h2>
      </div>
      <article>
        {posts.map((item, index) => (
          <Card key={index} {...item} postLink={index}/>
        ))}
      </article>
    </div>
  );
}
