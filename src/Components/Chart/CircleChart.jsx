import React, { memo } from "react";
import { Pie } from "react-chartjs-2";
function CircleChart() {
  return (
    <div>
      <Pie
        data={{
          labels: ["Jan", "Feb", "Mar"],
          datasets: [
            {
              data: [100, 50, 50],
              backgroundColor: ["#4B49AC", "#FFC100", "#248AFD"],
              borderColor: "rgba(0,0,0,0)",
            },
          ],
        }}
        width={564}
        height={282}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          segmentShowStroke: false,
          cutoutPercentage: 78,

          elements: {
            arc: {
              borderWidth: 4,
            },
          },
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
          },
        }}
      />
    </div>
  );
}
export default memo(CircleChart);
