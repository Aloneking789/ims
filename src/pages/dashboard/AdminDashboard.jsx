import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Smartphone, Wifi as WifiHigh, XCircle, Timer } from "lucide-react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total SIMs",
      value: "1,280",
      icon: Smartphone,
      color: "bg-purple-500",
    },
    {
      title: "Active SIMs",
      value: "1,054",
      icon: WifiHigh,
      color: "bg-green-500",
    },
    {
      title: "Inactive SIMs",
      value: "126",
      icon: XCircle,
      color: "bg-red-500",
    },
    {
      title: "Pending Requests",
      value: "50",
      icon: Timer,
      color: "bg-yellow-500",
    },
  ];

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "SIM Activations",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(139, 92, 246, 0.5)",
        borderColor: "rgb(139, 92, 246)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">SIM Activation Trends</h2>
        <div className="h-80">
          <Bar
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
