import { CreditCard, Link, Smartphone, User } from "lucide-react";
import React from "react";

const Requests = () => {
  const simRequests = [
    {
      id: "SIM001",
      userName: "John Doe",
      imeiNumber: "354856784512365",
      deviceName: "iPhone 12 Pro",
      paymentStatus: "Paid",
      requestDate: "2024-02-24",
      status: "pending",
      amount: "₹25.00",
    },
    {
      id: "SIM002",
      userName: "Alice Smith",
      imeiNumber: "354856784598741",
      deviceName: "Samsung S21",
      paymentStatus: "Pending",
      requestDate: "2024-02-24",
      status: "pending",
      amount: "₹25.00",
    },
    {
      id: "SIM003",
      userName: "Bob Wilson",
      imeiNumber: "354856784587412",
      deviceName: "Google Pixel 6",
      paymentStatus: "Paid",
      requestDate: "2024-02-24",
      status: "pending",
      amount: "₹25.00",
    },
    {
      id: "SIM001",
      userName: "John Doe",
      imeiNumber: "354856784512365",
      deviceName: "iPhone 12 Pro",
      paymentStatus: "Paid",
      requestDate: "2024-02-24",
      status: "pending",
      amount: "₹25.00",
    },
    {
      id: "SIM002",
      userName: "Alice Smith",
      imeiNumber: "354856784598741",
      deviceName: "Samsung S21",
      paymentStatus: "Pending",
      requestDate: "2024-02-24",
      status: "pending",
      amount: "₹25.00",
    },
    {
      id: "SIM003",
      userName: "Bob Wilson",
      imeiNumber: "354856784587412",
      deviceName: "Google Pixel 6",
      paymentStatus: "Paid",
      requestDate: "2024-02-24",
      status: "pending",
      amount: "₹25.00",
    },
    {
      id: "SIM001",
      userName: "John Doe",
      imeiNumber: "354856784512365",
      deviceName: "iPhone 12 Pro",
      paymentStatus: "Paid",
      requestDate: "2024-02-24",
      status: "pending",
      amount: "₹25.00",
    },
    {
      id: "SIM002",
      userName: "Alice Smith",
      imeiNumber: "354856784598741",
      deviceName: "Samsung S21",
      paymentStatus: "Pending",
      requestDate: "2024-02-24",
      status: "pending",
      amount: "₹25.00",
    },
    {
      id: "SIM003",
      userName: "Bob Wilson",
      imeiNumber: "354856784587412",
      deviceName: "Google Pixel 6",
      paymentStatus: "Paid",
      requestDate: "2024-02-24",
      status: "pending",
      amount: "₹25.00",
    },
  ];
  return (
    <div className="p-6 px-10">
      <h1 className="text-3xl font-bold mb-6 text-primary">Recent Requests</h1>
      <div className="space-y-4 ">
        {simRequests.map((request) => (
          <div
            key={request.id}
            className="py-4 bg-gray-50 rounded-md space-y-3"
          >
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <p className="text-sm font-medium">{request.userName}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-gray-500" />
                  <p className="text-xs text-gray-600">
                    IMEI: {request.imeiNumber}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-gray-500" />
                  <p className="text-xs text-gray-600">
                    Payment: {request.paymentStatus}
                  </p>
                </div>
              </div>
              <div>
                <button className="border bg-secondary   py-1 px-2 rounded-md text-white mr-2 w-20">
                  Approve
                </button>
                <button className="bg-[red] w-20 text-white  py-1 px-2  rounded-md ">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
