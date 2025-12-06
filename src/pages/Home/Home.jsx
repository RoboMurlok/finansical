import React from "react";
import Hero from "../../components/Hero/Hero";
import Vidget from "../../components/Vidget/Vidget";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import data from "../../data/data.json";
import { arrText } from "../../data/text";

export default function Home({ ...props }) {
  const { section_1, section_2, section_3, section_4 } = data.home;

  return (
    <div {...props}>
      <Hero data={data} />
      <section>
        <div className="boxBig">
          <div className="boxSmall">
            <h2>
              {section_1.title}
              {data.logo}!
            </h2>
          </div>
          <div className="boxSmall">
            <p>
              {section_1.subtitle_1}       
            </p>
            <span>
            {section_1.subtitle_2}
            </span>
          </div>
        </div>
        <article>
          {section_1.vidgets.map((item, index) => (
            <Vidget key={index} {...item} />
          ))}
        </article>
      </section>
      <section>
        <div className="boxBig">
          <div
            className="image"
            style={{ backgroundImage: `url(${section_2.image})` }}
          ></div>
          <div className="boxSmall">
            <h2>{section_2.title}</h2>
            <p>{section_2.subtitle}</p>
            <span>{section_2.context}</span>
          </div>
        </div>
        <article>
          {section_2.vidgets.map((item, index) => (
            <Vidget key={index} {...item} />
          ))}
        </article>
      </section>
      <section>
        <div className="banner_1">
          <h3>{section_3.title}</h3>
          <Button to={section_3.button.to}>{section_3.button.text}</Button>
        </div>
        <Hero data={data.home} />
      </section>
      <section>
        <article>
          <h3>{arrText.home.title}</h3>
          {arrText.home.subtitle.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
        <article>
          {section_4.cards.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </article>
      </section>
    </div>
  );
}
