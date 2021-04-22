import React, { memo } from "react";
import { Bar } from "react-chartjs-2";
function BarChart() {
  return (
    <div>
      <Bar
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Offline Sales",
              data: [480, 230, 470, 210, 330],
              backgroundColor: "#98BDFF",
            },
            {
              label: "Online Sales",
              data: [400, 340, 550, 480, 170],
              backgroundColor: "#4B49AC",
            },
          ],
        }}
        width={741}
        height={370}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          cornerRadius: 5,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0,
            },
          },
          legend: {
            display: false,
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    </div>
  );
}
export default memo(BarChart);
