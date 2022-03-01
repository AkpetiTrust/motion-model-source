import React from "react";
import style from "./index.module.css";

function Copyright({ longPage }) {
  return (
    <p className={`${style.copyright} ${longPage ? style.longpage : ""}`}>
      BUILT BY{" "}
      <a href="https://trust-akpeti.com" target={"_blank"}>
        AKPETI TRUST
      </a>
    </p>
  );
}

export default Copyright;
