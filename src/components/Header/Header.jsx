import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import data from "../../data/data.json";

export default function Header({ ...props }) {
  return (
    <header {...props}>
    <div className="logo">{data.logo}</div>
      <Navbar />
    </header>
  );
}
