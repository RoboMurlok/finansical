import React from "react";
import Card from "../../components/Card/Card";
import data from "../../data/data.json";
import { arrText } from "../../data/text";

export default function Experts({ ...props }) {
  const { section_1 } = data.experts;

  return (
    <div {...props}>
      <div className="banner_2">
        <h2>{section_1.banner}</h2>
      </div>
      <section>
        <div className="boxBig">
          <div
            className="hero"
            style={{ backgroundImage: `url(${section_1.image})` }}
          ></div>
          <div className="boxSmall">
            <h2>{section_1.title}</h2>
            <p>{section_1.subtitle_1}</p>
            <span>{section_1.subtitle_2}</span>
            <span>{section_1.subtitle_3}</span>
          </div>
        </div>
        <article>
          <h3>{arrText.experts.title}</h3>
          {arrText.experts.subtitle.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
        <article>
           {section_1.cards.map((item, index) => (
                 <Card key={index} {...item} />
               ))}
        </article>
      </section>
    </div>
  );
}
