"use client";
// import { subscribersAnalytics } from "@/actions/subscribers.analytics";
// import useSubscribersAnalytics from "@/shared/hooks/useSubscribersAnalytics";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface subscribersAnalyticsData {
  month: string;
  count: number;
}

const SubscribersChart = () => {
  // const { subscribersData, loading } = useSubscribersAnalytics();
  const [chartType, setChartType] = useState("line");

  const data: subscribersAnalyticsData[] = [
    { month: "Jan 2024", count: 2400 },
    { month: "Feb 2024", count: 1398 },
    { month: "Mar 2024", count: 9800 },
    { month: "Apr 2024", count: 3908 },
    { month: "May 2024", count: 4800 },
    { month: "Jun 2024", count: 3800 },
    { month: "Jul 2024", count: 4300 },
  ];

  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Subscribers",
        data: data.map((item) => item.count),
        backgroundColor: "rgba(171, 83, 137, 0.5)",
        borderColor: "#ad5389",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const stackedChartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        type: "bar" as const,
        label: "Subscribers",
        data: data.map((item) => item.count),
        backgroundColor: "rgba(171, 83, 137, 0.5)",
        borderColor: "#ad5389",
        borderWidth: 2,
      },
      {
        type: "line" as const,
        label: "Trend",
        data: data.map((item) => item.count),
        borderColor: "#3c1053",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        stacked: chartType === "stacked",
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        stacked: chartType === "stacked",
        beginAtZero: true,
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return <Line data={chartData} options={options} />;
      case "bar":
        return <Bar data={chartData} options={options} />;
      case "stacked":
        // return <Bar data={stackedChartData} options={options} />;
      default:
        return <Line data={chartData} options={options} />;
    }
  };

  return (
    <div
      className="my-5 p-5 border rounded w-full md:h-[55vh] xl:h-[60vh]"
      style={{ background: "linear-gradient(to right, #ad5389, #3c1053)" }}
    >
      <div className="w-full flex justify-between items-center mb-4">
        <h3 className="font-medium text-white">Active Subscribers</h3>
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
          <option value="stacked">Stacked Bar/Line Chart</option>
        </select>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="opacity-[.5] text-white">Shows all active subscribers</p>
        <div className="flex items-center">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: "linear-gradient(to right, #3c1053, #ad5389)",
            }}
          />
          <span className="pl-2 text-sm opacity-[.7] text-white">
            Subscribers
          </span>
        </div>
      </div>
      {/* {loading ? (
        <div className="h-[85%] flex items-center justify-center w-full">
          <h5 className="text-white">Loading...</h5>
        </div>
      ) : ( */}
      <div className="w-full h-[85%] mt-5">{renderChart()}</div>
      {/* )} */}
    </div>
  );
};

export default SubscribersChart;
