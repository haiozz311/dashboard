import React, { memo } from "react";
import { Line } from "react-chartjs-2";
function Chart() {
  return (
    <div>
      <Line
        data={{
          labels: [10, 20, 30, 40, 50, 60, 70],
          datasets: [
            {
              data: [
                200,
                480,
                700,
                600,
                620,
                350,
                380,
                350,
                850,
                "600",
                "650",
                "350",
                "590",
                "350",
                "620",
                "500",
                "990",
                "780",
                "650",
              ],
              borderColor: ["#4747A1"],
              borderWidth: 2,
              fill: false,
              label: "Orders",
            },
            {
              data: [
                400,
                450,
                410,
                500,
                480,
                600,
                450,
                550,
                460,
                "560",
                "450",
                "700",
                "450",
                "640",
                "550",
                "650",
                "400",
                "850",
                "800",
              ],
              borderColor: ["#F09397"],
              borderWidth: 2,
              fill: false,
              label: "Downloads",
            },
          ],
        }}
        width={741}
        height={370}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: true,
            },
            toolbar: {
              enabled: true,
            },
            elements: {
              line: {
                tension: 0.35,
              },
              point: {
                radius: 0,
              },
            },
          },
          filler: {
            propagate: true,
          },
        }}
      />
    </div>
  );
}
export default memo(Chart);
