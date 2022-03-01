import React from "react";
import style from "./index.module.css";

function Section({ title, text, svg, reverse, id }) {
  return (
    <section
      className={`${style.section} ${reverse ? style.reverse : ""}`}
      id={id}
    >
      <div className={style.talk}>
        <h4 className={style.section_title}>{title}</h4>
        <p>{text}</p>
      </div>
      <div className={style.image_container}>{svg}</div>
    </section>
  );
}

export default Section;
