import React from "react";
import "./Vidget.css";
import { Link } from "react-router-dom";

export default function Vidget({ ...props }) {
  const { link, title, subtitle } = props;

  return (
    <div className="vidget" {...props}>
      <h3>{title}</h3>
      <div className="content">
        <span>{subtitle}</span>
      </div>
      <Link to={link} className="link">
        Read more
      </Link>
    </div>
  );
}
