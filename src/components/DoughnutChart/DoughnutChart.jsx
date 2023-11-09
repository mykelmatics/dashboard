import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import "./style.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Total User Visit", "User SIgn up", "User Subscribed"],
  datasets: [
    {
      label: "# of Votes",
      data: [30, 10, 60],
      backgroundColor: [
        "rgba(94, 92, 230, 0.5)",
        "rgba(94, 92, 230, 0.5)",
        "#3F46F7",
      ],
      borderRadius: 20,
      spacing: 10,
    },
  ],
};

const options = {
  cutout: "80%",
  plugins: {
    legend: {
      display: true,
      position: "right", 
      labels: {
        boxWidth: 40, 
        boxHeight: 5, 
        borderRadius: 10,
      },
      title: ["A", "B", "C"],
    },
  },
};

// Define a custom plugin to add the label in the center
const centerLabelPlugin = {
  id: "center-label",
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;

    ctx.restore();
    ctx.font = "30px Inter"; 
    ctx.fillStyle = "#fff"; 
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const text = "538"; 
    let textX = width / 2;
    let textY = height / 2;

    if (chart.legend.options.display) {
      // Adjust the position if the legend is displayed
      textX = (width - chart.legend.width) / 2;
    }

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

// Register the custom plugin
ChartJS.register(centerLabelPlugin);

const DoughnutChart = () => {
  return (
    <div className="doughnut-container">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
