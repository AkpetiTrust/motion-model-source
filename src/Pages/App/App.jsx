import React from "react";
import Logo from "../../Components/Logo/Logo";
import Label from "./Components/Label/Label";
import { useParams } from "react-router-dom";
import Motion from "./Components/Motion/Motion";
import Gravity from "./Components/Gravity/Gravity";
import Projectile from "./Components/Projectile/Projectile";
import Graph from "./Components/Graph/Graph";
import Copyright from "../../Components/Copyright/Copyright";
import HelpButton from "../../Components/HelpButton/HelpButton";

function App() {
  const { section = "projectile" } = useParams();

  let component;
  if (section === "motion") {
    component = <Motion />;
  } else if (section === "gravity") {
    component = <Gravity />;
  } else if (section === "projectile") {
    component = <Projectile />;
  } else if (section === "graph") {
    component = <Graph />;
  }

  return (
    <section className="app">
      <Logo />
      <div className="label-group">
        <Label to="/app/projectile" section={section} path="projectile">
          Projectile
        </Label>
        <Label to="/app/gravity" section={section} path="gravity">
          Motion due to gravity
        </Label>
        <Label to="/app/motion" section={section} path="motion">
          Equation of motion calculator
        </Label>
        <Label to="/app/graph" section={section} path="graph">
          Graph
        </Label>
      </div>
      <div className="shapes" aria-hidden={true}>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
      {component}
      <Copyright longPage={true} />
      <HelpButton />
    </section>
  );
}

export default App;
