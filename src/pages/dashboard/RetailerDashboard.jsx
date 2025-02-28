import React from "react";
import {
  Smartphone,
  Wifi as WifiHigh,
  XCircle,
  CreditCard,
} from "lucide-react";

const RetailerDashboard = () => {
  const stats = [
    {
      title: "My SIMs",
      value: "280",
      icon: Smartphone,
      color: "bg-purple-500",
    },
    {
      title: "Active SIMs",
      value: "254",
      icon: WifiHigh,
      color: "bg-green-500",
    },
    { title: "Inactive SIMs", value: "26", icon: XCircle, color: "bg-red-500" },
    {
      title: "Balance",
      value: "₹5,000",
      icon: CreditCard,
      color: "bg-blue-500",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "SIM Activation",
      amount: "₹100",
      date: "2024-02-24",
      status: "completed",
    },
    {
      id: 2,
      type: "Balance Added",
      amount: "₹1000",
      date: "2024-02-23",
      status: "completed",
    },
    {
      id: 3,
      type: "SIM Purchase",
      amount: "₹500",
      date: "2024-02-22",
      status: "pending",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Retailer Dashboard</h1>

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
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`p-2 w-24 text-xs flex justify-center font-semibold rounded-full ${
                        transaction.status === "completed"
                          ? "bg-[green] text-white"
                          : "bg-[#a06b02]  text-white"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RetailerDashboard;
