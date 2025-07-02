"use client";

import { useRef, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  Plugin,
  ScriptableContext,
  ChartDataset,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler
);

type Volunteer = {
  name: string;
  email: string;
  status: string;
};

export default function VolunteerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [emails, setEmails] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [volunteers, setVolunteers] = useState<Volunteer[]>([
    { name: "UMER", email: "umer@gmail.com", status: "Active" },
    { name: "UMER", email: "abcd@gmail.com", status: "Active" },
    { name: "Muhammad Jibran", email: "mjr@gmail.com", status: "Active" },
    { name: "HAMZA", email: "hamza@gmail.com", status: "Active" },
    { name: "Miss Maliha", email: "ali@gmail.com", status: "Active" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [volunteerToRemove, setVolunteerToRemove] = useState<Volunteer | null>(
    null
  );
  const chartRef = useRef<ChartJS<"line">>(null);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [showModal]);

  const filteredVolunteers = volunteers
    .filter((v) => v.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "newest"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  const getGradient = (ctx: CanvasRenderingContext2D, color: string) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, `${color}66`);
    gradient.addColorStop(1, `${color}11`);
    return gradient;
  };

  const chartData = {
    labels: ["00-02", "00-03", "00-04", "00-05", "00-06", "00-07"],
    datasets: [
      {
        type: "line" as const,
        label: "Male",
        data: [80, 40, 60, 20, 60, 40],
        borderColor: "#3B82F6",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return chartArea ? getGradient(ctx, "#3B82F6") : "#3B82F644";
        },
        borderWidth: 3,
        tension: 0.4,
        pointBackgroundColor: "#3B82F6",
        pointBorderColor: "#fff",
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: true,
      } as ChartDataset<"line">,
      {
        type: "line" as const,
        label: "Female",
        data: [30, 70, 50, 90, 20, 60],
        borderColor: "#F472B6",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return chartArea ? getGradient(ctx, "#F472B6") : "#F472B644";
        },
        borderWidth: 3,
        tension: 0.4,
        pointBackgroundColor: "#F472B6",
        pointBorderColor: "#fff",
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: true,
      } as ChartDataset<"line">,
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#1F2937",
          font: { size: 14, weight: "bold" },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(31, 41, 55, 0.9)",
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 12 },
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6B7280", font: { size: 12 } },
      },
      y: {
        grid: { display: false },
        ticks: {
          color: "#6B7280",
          font: { size: 12 },
        },
        min: 0,
        max: 100,
      },
    },
  };

  const valueLabelPlugin: Plugin<"line"> = {
    id: "valueLabel",
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      ctx.font = "bold 12px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillStyle = "#1F2937";

      chart.data.datasets.forEach((dataset, datasetIndex) => {
        chart.getDatasetMeta(datasetIndex).data.forEach((point, index) => {
          const value = dataset.data[index] as number;
          if (value > 0) {
            ctx.fillText(value.toString(), point.x, point.y - 10);
          }
        });
      });
    },
  };

  const handleRemove = (v: Volunteer) => {
    setVolunteerToRemove(v);
    setShowModal(true);
  };

  const confirmRemove = () => {
    if (volunteerToRemove) {
      setVolunteers((prev) =>
        prev.filter((v) => v.email !== volunteerToRemove.email)
      );
      setVolunteerToRemove(null);
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              VOLUNTEERS COUNT
            </h1>
            <div className="flex items-center mt-2">
              <span className="text-3xl font-bold text-gray-800">23,456</span>
              <span className="ml-2 text-orange-500 font-medium">+12%</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">USAGES:</h2>
          <div className="h-64 relative w-full overflow-hidden">
            <Chart
              ref={chartRef}
              type="line"
              data={chartData}
              options={chartOptions}
              plugins={[valueLabelPlugin]}
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              placeholder="Emails, comma separated"
              className="border rounded px-3 py-2 w-full text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors ring-2 ring-orange-400 w-full sm:w-auto">
              Invite
            </button>
          </div>
        </div>

        <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="text-sm font-medium text-gray-800">
            SORT BY:
            <select
              title="Sort By"
              className="ml-2 border rounded px-2 py-1 text-gray-800 bg-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
              value={sortOrder}
              onChange={(e) =>
                setSortOrder(e.target.value as "newest" | "oldest")
              }
            >
              <option value="newest">NEWEST</option>
              <option value="oldest">OLDEST</option>
            </select>
          </div>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="SEARCH HERE"
              className="border rounded px-3 py-2 pl-8 w-full text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  EMAIL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredVolunteers.map((v, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {v.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {v.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    {v.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handleRemove(v)}
                      className="text-red-500 hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && volunteerToRemove && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Remove Volunteer?
            </h2>
            <p className="text-gray-600 mb-4">
              Are you sure you want to remove{" "}
              <strong>{volunteerToRemove.name}</strong>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemove}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 cursor-pointer"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
