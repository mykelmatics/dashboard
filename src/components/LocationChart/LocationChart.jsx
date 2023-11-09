import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./style.css";

const options = {
  chart: {
    type: "column",
    backgroundColor: "#060b27",
    boxShadow:
      "2px 2px 4px #0e0a0e80, -2px -2px 4px #29517080, inset 0px 1px 250px #0510181a",
  },
  title: {
    text: "Location",
    align: "left",
    style: {
      color: "white",
      display: "inline-block",
      marginRight: "10px",
    },
  },
  xAxis: {
    categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    gridLineWidth: 1,
    gridLineDashStyle: "Dash",
    gridLineColor: "hsla(248, 25%, 34%, 1)",
  },
  yAxis: {
    min: 0,
    title: {
      text: "Total",
    },
    gridLineWidth: 0,
  },
  legend: {
    layout: "horizontal",
    align: "right",
    verticalAlign: "top",
    itemStyle: {
      color: "white",
    },
    itemMarginTop: 5,
  },
  plotOptions: {
    column: {
      stacking: "normal",
      borderRadiusTopLeft: "40",
      borderRadiusTopRight: "40",
      pointWidth: 13,
      tickmarkPlacement: "left",
    },
  },
  series: [
    {
      name: "Country",
      data: [5, 3, 4, 5, 3, 4, 6],
      color: "#00F2DE",
    },
    {
      name: "City",
      data: [2, 2, 3, 3, 2, 2, 3],
      color: "hsla(2, 96%, 62%, 1)",
    },
  ],
};

const LocationChart = () => {
  return (
    <div className="location-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LocationChart;
