import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export default function Button({ to, children, ...props }) {
  return (
    <div  {...props}>
      <Link to={to} className="btn">{children}</Link>
    </div>
  );
}
