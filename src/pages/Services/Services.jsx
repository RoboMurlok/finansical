import React from "react";
import data from "../../data/data.json";

export default function Services({ ...props }) {
  const { section_1 } = data.services;
  return (
    <div {...props}>
      <div className="banner_2">
        <h2>{section_1.banner}</h2>
      </div>
      <section>
        {section_1.boxs.map((item, index) => (
          <div
            className={`boxBig ${index % 2 === 1 ? "revers" : ""}`}
            key={index}
          >
            <div className="boxSmall">
              <h2>{item.title}</h2>
              <p>{item.subtitle_1}</p>
              <span>{item.subtitle_2}</span>
              <span>{item.subtitle_3}</span>
              <span>{item.subtitle_4}</span>
            </div>

            <div
              className="image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          </div>
        ))}
      </section>
    </div>
  );
}
