import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import "./style.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Line 1",
      data: [65, 59, 50, 35, 10, 55, 8],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.5,
      //   cubicInterpolationMode: "monotone", // Set to make the line curved
    },
    {
      label: "Line 2",
      data: [40, 10, 20, 61, 35, 30, 9],
      fill: false,
      borderColor: "rgb(255, 99, 132)",
      tension: 0.5,
      //   cubicInterpolationMode: "monotone", // Set to make the line curved
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom- left",
    },
  },
  title: {
    display: true,
    text: "Chart.js line chart",
    font: { size: 25 },
  },
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },

};

export const LineChart = () => {
  return (
    <div className="line-chart">
      <Line data={data} options={options} />
    </div>
  );
};
