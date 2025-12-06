import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import data from "../../data/data.json";

export default function Footer({ ...props }) {
  const { navlink } = data.footer;

  return (
    <footer {...props}>
      <div className="logo">{data.logo}</div>
      <div className="nav">
        {navlink.map((item, index) => (
          <Link key={index} to={item.url}>
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
