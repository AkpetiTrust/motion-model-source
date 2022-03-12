import { React, useState, useEffect, useRef } from "react";
import solve from "../../Functions/solve";
import gravity from "../../../../images/gravity.svg";
import Chart from "../Chart/Chart";

function Motion() {
  const [unknown, setUnknown] = useState("v");
  const [quantities, setQuantities] = useState([
    {
      letter: "v",
      name: "Final velocity",
      unit: "m/s",
    },
    {
      letter: "s",
      name: "Displacement",
      unit: "m",
    },
    {
      letter: "u",
      name: "Initial velocity",
      unit: "m/s",
    },
    {
      letter: "a",
      name: "Acceleration",
      unit: (
        <span key={"a"}>
          m/s <sup>2</sup>
        </span>
      ),
    },
    {
      letter: "t",
      name: "Time",
      unit: "s",
    },
  ]);
  const [known, setKnown] = useState({
    v: null,
    u: 0,
    a: 9.8,
    t: null,
    s: null,
  });

  const [direction, setDirection] = useState("downwards");

  const form = useRef();

  const handleKnownChange = (e) => {
    let value = Number(e.currentTarget.value);
    let input = e.currentTarget;
    if (e.currentTarget.value === "") {
      value = null;
    }

    setKnown((prevKnown) => {
      prevKnown[input.id] = value;
      let newKnown = prevKnown;
      return { ...newKnown };
    });
  };

  const generateData = () => {
    //   Y is velocity, X is time;
    let data = [];
    for (let i = 0; i < 50; i++) {
      let v;
      if (known.u && known.a) {
        v = known.u + known.a * i;
      } else if (known.u && !known.a) {
        let a = solve("a", known);
        v = known.u + a * i;
      } else if (!known.u && known.a) {
        let u = solve("u", known);
        v = u + known.a * i;
      } else {
        let u = 0;
        let a = 9.8;
        v = u + a * i;
      }

      data.push({ x: i, y: v });
    }

    return data;
  };

  return (
    <section className="gravity">
      <p className="talk">
        Get the graph of velocity against time of an object moving against or
        due to gravity.
      </p>

      <div className="chart-area">
        <Chart dataProp={generateData()} label="Velocity vs time" />
      </div>

      <div className="center">
        <div className="form-area">
          <form onSubmit={(e) => e.preventDefault()} ref={form}>
            <input type="hidden" />
            <div className="unknown">
              <label htmlFor="direction">Direction of motion:</label>
              <select
                name="direction"
                id="direction"
                onChange={(e) => {
                  let value = e.currentTarget.value;
                  setDirection(value);
                  if (value === "downwards") {
                    setKnown({
                      v: null,
                      u: 0,
                      a: 9.8,
                      t: null,
                      s: null,
                    });
                    setUnknown("v");
                  } else if (value === "upwards") {
                    setKnown({
                      v: 0,
                      u: null,
                      a: -9.8,
                      t: null,
                      s: null,
                    });
                    setUnknown("s");
                  }
                }}
              >
                <option value="downwards">Downwards</option>
                <option value="upwards">Upwards</option>
              </select>
              <label htmlFor="unknown">Parameter to be solved for:</label>
              <select
                name="unknown"
                id="unknown"
                value={unknown}
                onChange={(e) => {
                  setUnknown(e.currentTarget.value);
                  setKnown((prevKnown) => {
                    let newKnown = {
                      v: null,
                      u: null,
                      a: null,
                      t: null,
                      s: null,
                    };
                    newKnown.a = prevKnown.a;
                    newKnown.v = prevKnown.v;
                    newKnown.u = prevKnown.u;
                    return { ...newKnown };
                  });
                }}
              >
                {quantities
                  .filter((quantity) => quantity.letter !== "a")
                  .map((quantity) => (
                    <option
                      value={quantity.letter}
                      key={quantity.letter}
                    >{`${quantity.name} (${quantity.letter})`}</option>
                  ))}
              </select>
            </div>
            <div className="value">
              The{" "}
              {quantities
                .find((quantity) => quantity.letter === unknown)
                .name.toLowerCase()}{" "}
              is{" "}
              <span className="answer">
                {`${
                  isNaN(solve(unknown, known))
                    ? 0
                    : solve(unknown, known).toFixed(2)
                }`}{" "}
                {[
                  quantities.find((quantity) => quantity.letter === unknown)
                    .unit,
                ]}
              </span>
            </div>
            <div className="known">
              <p className="heading">
                PARAMETERS KNOWN (if unknown, leave blank):
              </p>
              {quantities.map((quantity) => {
                if (quantity.letter !== unknown && quantity.letter !== "a") {
                  return (
                    <div className="input-group" key={quantity.letter}>
                      <label htmlFor={quantity.letter}>
                        {`${quantity.name} (${quantity.letter})`}:
                      </label>
                      <input
                        type="number"
                        name={quantity.letter}
                        id={quantity.letter}
                        onChange={handleKnownChange}
                        autoComplete="off"
                        key={`${unknown}-${quantity.letter}`}
                      />
                    </div>
                  );
                }
              })}

              <div className="note">
                <p>NOTE: All units are S.I units.</p>
              </div>
              <img src={gravity} alt="gravity" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Motion;
