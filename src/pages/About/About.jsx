import React from "react";
import Hero from "../../components/Hero/Hero";
import data from "../../data/data.json";
import { arrText } from "../../data/text";

export default function About({ ...props }) {
  const { section_1 } = data.about;

  return (
    <div {...props}>
      <div className="banner_2">
        <h2>{section_1.banner}</h2>
      </div>
      <section>
        <div className="boxBig revers">
          <div className="boxSmall">
            <h2>{section_1.title}</h2>
            <p>{section_1.subtitle_1}</p>
            <span>{section_1.subtitle_2}</span>
            <span>{section_1.subtitle_3}</span>
            <span>{section_1.subtitle_4}</span>
          </div>
          <div
            className="image"
            style={{ backgroundImage: `url(${section_1.image})` }}
          ></div>
        </div>
      </section>
      <section>
        <article>
          <h3>{arrText.about.title}</h3>
          {arrText.about.subtitle.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
        <Hero data={data.about} />
      </section>
    </div>
  );
}
