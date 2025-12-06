import React from "react";
import "./Hero.css";
import Button from "../Button/Button";

export default function Hero({data, ...props }) {
  const { button, title, subtitle, image } = data.hero;
  
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${image})` }}
      {...props}
    >
      <div className="boxSmall">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div>
          <Button to={button.to}>{button.text}</Button>
        </div>
      </div>
    </div>
  );
}
