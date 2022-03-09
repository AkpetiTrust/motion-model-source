import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

function Label({ path, to, children, section }) {
  return (
    <Link
      className={`${style.label} ${path === section ? style.active : ""}`}
      to={to}
    >
      {children}
    </Link>
  );
}

export default Label;
