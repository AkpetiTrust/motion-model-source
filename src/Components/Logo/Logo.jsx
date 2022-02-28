import React from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <p className={style.logo}>
      {" "}
      <Link to={"/"}>MOTION MODEL</Link>
    </p>
  );
}

export default Logo;
