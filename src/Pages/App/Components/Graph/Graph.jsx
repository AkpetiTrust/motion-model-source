import { React, useState } from "react";
import Chart from "../Chart/Chart";
import { create, all, expression } from "mathjs";

function Graph() {
  const [expressions, setExpressions] = useState(["x^2"]);
  const config = {};
  const math = create(all, config);

  const generateData = () => {
    //   Y is velocity, X is time;
    let dataSets = [];
    expressions.forEach((expression, index) => {
      let backgroundColor = "";
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      backgroundColor = `rgb(${r}, ${g}, ${b})`;

      let data = [];
      for (let i = -50; i < 50; i++) {
        let y = 0;
        try {
          y = math.compile(expressions[index]).evaluate({ x: i });
        } catch (e) {
          y = undefined;
        }

        data.push({ x: i, y });
      }
      dataSets.push({
        label: `y = ${expression}`,
        data,
        backgroundColor,
      });
    });

    return dataSets;
  };

  const handleChange = (e) => {
    let value = e.currentTarget.value;
    let id = e.currentTarget.id;
    setExpressions((prevExpressions) => {
      prevExpressions[id] = value;
      return [...prevExpressions];
    });
  };

  return (
    <section className="graph">
      <div className="chart-area">
        <Chart dataSetsProp={generateData()} />
      </div>

      {expressions.length === 1 ? (
        <p className="graph-name">GRAPH OF {expressions[0]}</p>
      ) : (
        ""
      )}
      <div className="form-area">
        <label>Equation:</label>
        {expressions.map((expression, i) => (
          <p key={i}>
            y ={" "}
            <input
              type="text"
              name={i}
              id={i}
              defaultValue={expressions[i]}
              autoComplete="off"
              onChange={handleChange}
            />
          </p>
        ))}
        <button
          onClick={() => {
            setExpressions((prevExpressions) => [...prevExpressions, "x"]);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H13V16Z"
              fill="#E28413"
            />
          </svg>
        </button>
      </div>
      <p className="note">
        NOTE: You can plot multiple equations. For trig functions, use brackets,
        eg. tan(45), not tan45.
        <span>
          {" "}
          This is just a scatter diagram to get a rough idea of how the graph
          should look like, it's not a standard graph.
        </span>
      </p>
    </section>
  );
}

export default Graph;
