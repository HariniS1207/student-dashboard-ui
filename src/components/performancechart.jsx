import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function PerformanceChart() {
  const data = {
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"],
    datasets: [
      {
        label: "Performance %",
        data: [80, 82, 85, 87, 88, 89, 90, 90],
        borderColor: "#1f4fd8",
        backgroundColor: "rgba(31,79,216,0.1)",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        min: 70,
        max: 100,
      },
    },
  };

  return (
    <div className="chart">
      <h3>Performance Trend</h3>
      <Line data={data} options={options} />
    </div>
  );
}