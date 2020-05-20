import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["blue", "red", "yellow", "green"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["blue", "red", "yellow", "green"],
      hoverBackgroundColor: ["blue", "red", "yellow", "green"],
      data: [65, 59, 80, 81],
    },
  ],
};

export const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
