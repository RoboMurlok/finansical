import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function Card({ ...props }) {
  const { link, postLink, title, subtitle, image, icon, button } = props;

  return (
    <div className="card">
      <div className="content">
        {icon ? (
          <div
            className="imageIcon"
            style={{ backgroundImage: `url(${icon})` }}
          ></div>
        ) : (
          <div
            className="imagePost"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
        <h4>{title}</h4>
      </div>
      <div className="content">
        <p>{subtitle}</p>
        {link ? (
          <Link to={link}>{button}</Link>
        ) : postLink !== undefined ? (
          <Button to={`/blog/${postLink}`}>{button}</Button>
        ) : null}
      </div>
    </div>
  );
}
