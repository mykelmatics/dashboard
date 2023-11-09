import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./style.css";

const data = [
  { name: "Jan", value: -50 },
  { name: "Feb", value: 5 },
  { name: "Mar", value: 130 },
  { name: "Apr", value: -20 },
  { name: "May", value: 110 },
  { name: "Jun", value: 80 },
  { name: "Jul", value: -80 },
  { name: "Aug", value: 120 },
  { name: "Sept", value: 80 },
  { name: "Oct", value: 60 },
  { name: "Nov", value: -90 },
  { name: "Dec", value: 100 },
];

const options = {
  chart: {
    type: "column",
    backgroundColor: "#060b27",
    boxShadow:
      "2px 2px 4px #0e0a0e80, -2px -2px 4px #29517080, inset 0px 1px 250px #0510181a",
  },
  title: {
    text: "User Traffic",
  },
  xAxis: {
    categories: data.map((item) => item.name),
    dashStyle: "dash",
  },
  plotOptions: {
    column: {
      color: "#0082cb", // Color for positive values
      negativeColor: "#fb4540", // Color for negative values
    },
  },
  series: [
    {
      name: "Traffik",
      data: data.map((item) => item.value),
    },
    {
      name: "Line",
      type: "line",
      data: [-70, 85, 130, 10, 130, 95, -95, 140, 100, 90, -100, 120],
      color: "#0082cb",
      dashStyle: "dash",
    },
  ],
};

const UserBarChart = () => {
  const chartStyle = {
    background: "#060b27", // Set the background color here
  };

  return (
    <div className="userBarChart-container" style={chartStyle}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default UserBarChart;
