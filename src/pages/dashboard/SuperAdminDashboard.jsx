import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import {
  Smartphone,
  Wifi as WifiHigh,
  XCircle,
  Timer,
  Wallet,
  User,
} from "lucide-react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const SuperAdminDashboard = () => {
  const stats = [
    {
      title: "Total SIMs",
      value: "3,280",
      icon: Smartphone,
      color: "bg-purple-500",
    },
    {
      title: "Active SIMs",
      value: "2,854",
      icon: WifiHigh,
      color: "bg-green-500",
    },
    {
      title: "Inactive SIMs",
      value: "326",
      icon: XCircle,
      color: "bg-red-500",
    },
    {
      title: "Pending Requests",
      value: "100",
      icon: Timer,
      color: "bg-yellow-500",
    },
    {
      title: "Total Revenue",
      value: "₹125,000",
      icon: Wallet,
      color: "bg-blue-500",
    },
    {
      title: "Total Users",
      value: "1,200",
      icon: User,
      color: "bg-indigo-500",
    },
  ];

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: "rgba(139, 92, 246, 0.5)",
        borderColor: "rgb(139, 92, 246)",
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Active", "Inactive", "Pending"],
    datasets: [
      {
        data: [2854, 326, 100],
        backgroundColor: [
          "rgba(34, 197, 94, 0.5)",
          "rgba(239, 68, 68, 0.5)",
          "rgba(234, 179, 8, 0.5)",
        ],
        borderColor: [
          "rgb(34, 197, 94)",
          "rgb(239, 68, 68)",
          "rgb(234, 179, 8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Super Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
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

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            SIM Status Distribution
          </h2>
          <div className="h-80">
            <Pie
              data={pieData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
