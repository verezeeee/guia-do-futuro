import React, { useEffect, useRef, useMemo } from "react";
import ApexCharts from "apexcharts";

interface DonutChartProps {
  series: number[];
  labels: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({ series, labels }) => {
  const chartRef = useRef(null);

  const options = useMemo(
    () => ({
      chart: {
        type: "donut",
      },
      series: series,
      labels: labels,
      colors: ["#18113C", "#9288C8"],
      responsive: [
        {
          options: {
            chart: {
              width: 400,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    }),
    [series, labels]
  );

  useEffect(() => {
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
    }
  }, [options]);

  return <div id="chart" ref={chartRef} />;
};

export default React.memo(DonutChart);
