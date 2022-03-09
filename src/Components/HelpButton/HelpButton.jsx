import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

function HelpButton() {
  return (
    <Link to={"/help"} className={style.button}>
      ?
    </Link>
  );
}

export default HelpButton;
