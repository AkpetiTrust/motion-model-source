import { React, useState } from "react";
import {
  projectileInfo,
  findFinalVelocity,
  degToRad,
} from "../../Functions/projectileFunctions";
import Chart from "../Chart/Chart";

function Projectile() {
  const [parameters, setParameters] = useState({
    angle: 0,
    u: 0,
    y: 0,
  });

  const [time, setTime] = useState(0);

  const updateParameters = (e) => {
    let value = Number(e.currentTarget.value);
    let id = e.currentTarget.id;
    setParameters((prevParams) => {
      prevParams[id] = value;
      return { ...prevParams };
    });
  };

  const generateData = () => {
    let data = [];
    let range = projectileInfo(
      parameters.angle,
      parameters.u,
      parameters.y
    ).range;
    for (let i = 0; i < range; i += range / 50) {
      let angle = degToRad(parameters.angle);
      let y =
        i * Math.tan(angle) -
        (0.5 * (9.8 * i ** 2)) / (parameters.u ** 2 * Math.cos(angle) ** 2) +
        parameters.y;

      data.push({ x: i, y });
    }

    return data;
  };

  return (
    <section className="projectile">
      <section className="talk">
        <p>
          Model the path of a projectile by providing the angle of projection
          and initial velocity.
        </p>
      </section>

      <div className="chart-area">
        <Chart dataProp={generateData()} label="y vs x" />
      </div>
      {parameters.u !== 0 ? (
        <p>
          {`Graph of y = xtan${parameters.angle} - ${(
            (0.5 * 9.8) /
            (parameters.u ** 2 * Math.cos(parameters.angle) ** 2)
          ).toFixed(2)}`}
          x<sup>2</sup>sec<sup>2</sup>
          {parameters.angle} + y<sub>0</sub>
        </p>
      ) : (
        ""
      )}

      <div className="center">
        <div className="form-area">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="hidden" name="" />
            <div className="input-group">
              <label htmlFor="angle">Angle of projection (θ):</label>
              <input
                type="number"
                name="angle"
                id="angle"
                autoComplete="off"
                onChange={updateParameters}
              />
            </div>
            <div className="input-group">
              <label htmlFor="u">Initial velocity (u):</label>
              <input
                type="number"
                name="u"
                id="u"
                autoComplete="off"
                onChange={updateParameters}
              />
            </div>
            <div className="input-group">
              <label htmlFor="y">
                Initial height of projection (y<sub>o</sub>):
              </label>
              <input
                type="number"
                name="y"
                id="y"
                autoComplete="off"
                defaultValue={0}
                onChange={updateParameters}
              />
            </div>
          </form>

          <div className="info-area">
            <p className="title">PROJECTILE INFO</p>
            <p>
              Maximum height:{" "}
              {projectileInfo(
                parameters.angle,
                parameters.u,
                parameters.y
              ).maximumHeight.toFixed(2)}
              m
            </p>
            <p>
              Range:{" "}
              {projectileInfo(
                parameters.angle,
                parameters.u,
                parameters.y
              ).range.toFixed(2)}
              m
            </p>
            <p>
              Time of flight:{" "}
              {projectileInfo(
                parameters.angle,
                parameters.u,
                parameters.y
              ).timeOfFlight.toFixed(2)}
              s
            </p>
            <p>
              At time, t ={" "}
              <input
                type="number"
                name="t"
                id="t"
                autoComplete="off"
                defaultValue={0}
                onChange={(e) => {
                  setTime(Number(e.currentTarget.value));
                }}
              />{" "}
              , the velocity is{" "}
              {findFinalVelocity(parameters.angle, parameters.u, time)}m/s
            </p>
            <p>NOTE: All units are S.I units.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projectile;
