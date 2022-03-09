import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

function Chart({ dataProp }) {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  const options = {
    showLine: true,
    maintainAspectRatio: false,
  };

  const data = {
    datasets: [
      {
        label: "Velocity vs time",
        data: dataProp,
        backgroundColor: "#45F0E1",
      },
    ],
  };

  return <Scatter options={options} data={data} height={250} />;
}

export default Chart;
