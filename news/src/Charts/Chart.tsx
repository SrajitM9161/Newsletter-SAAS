"use client";

import { useEffect, useState } from "react";
import { SubscribersAnalytics } from "@/actions/subscriber.analytics";
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
  ScatterController,
} from "chart.js";
import { Line, Bar, Scatter } from "react-chartjs-2";
import { Loader } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  ScatterController,
  Title,
  Tooltip,
  Legend
);

interface SubscribersAnalyticsData {
  month: string;
  count: number;
}

const SubscribersChart = () => {
  const [data, setData] = useState<SubscribersAnalyticsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState("line");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SubscribersAnalytics();
        if (response) {
          setData(response.last7Months);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subscribers analytics data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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


  const scatterChartData = {
    datasets: [
      {
        label: "Subscribers",
        data: data.map((item, index) => ({ x: index, y: item.count })),
        backgroundColor: "rgba(171, 83, 137, 0.5)",
        borderColor: "#ad5389",
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
      case "scatter":
        return <Scatter data={scatterChartData} options={options} />;
      default:
        return <Line data={chartData} options={options} />;
    }
  };

  return (
    <div
      className="my-5 p-10 border rounded w-full md:h-[55vh] xl:h-[60vh]"
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
          <option value="scatter">Scatter Chart</option>
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
      {loading ? (
        <div className="h-[85%] flex items-center justify-center w-full">
          <Loader className="animate-spin text-white" size={48} />
        </div>
      ) : (
        <div className="w-full h-[85%] mt-5">{renderChart()}</div>
      )}
    </div>
  );
};

export default SubscribersChart;
