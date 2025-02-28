import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  ShoppingCart,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Warehouse,
  Calendar,
  Wallet,
  Clock,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertCircle,
  Smartphone,
  User,
  CreditCard,
  Eye,
  CrossIcon,
  TimerIcon,
  SmartphoneIcon,
  NetworkIcon,
  PhoneCallIcon,
  LucideCross,
  XCircleIcon,
  WifiHighIcon,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

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

// Define a consistent color palette
const CHART_COLORS = {
  primary: "#8B5CF6", // Original purple
  purple2: "#7C3AED", // Deeper purple
  purple3: "#9333EA", // Rich purple
  purple4: "#A78BFA", // Lighter purple
  purple5: "#6D28D9", // Dark purple
};

// const Dashboard = () => {
//   const simRequests = [
//     {
//       id: "SIM001",
//       userName: "John Doe",
//       imeiNumber: "354856784512365",
//       deviceName: "iPhone 12 Pro",
//       paymentStatus: "Paid",
//       requestDate: "2024-02-24",
//       status: "pending",
//       amount: "₹25.00",
//     },
//     {
//       id: "SIM002",
//       userName: "Alice Smith",
//       imeiNumber: "354856784598741",
//       deviceName: "Samsung S21",
//       paymentStatus: "Pending",
//       requestDate: "2024-02-24",
//       status: "pending",
//       amount: "₹25.00",
//     },
//     {
//       id: "SIM003",
//       userName: "Bob Wilson",
//       imeiNumber: "354856784587412",
//       deviceName: "Google Pixel 6",
//       paymentStatus: "Paid",
//       requestDate: "2024-02-24",
//       status: "pending",
//       amount: "₹25.00",
//     },
//   ];

//   const handleApprove = (id) => {
//     console.log(`Approved request ₹{id}`);
//   };

//   const handleViewDetails = (id) => {
//     console.log(`Viewing details for ₹{id}`);
//   };

//   const [dateRange, setDateRange] = useState([null, null]);
//   const [startDate, endDate] = dateRange;

//   const salesData = 3280;
//   const purchasesData = 1255;
//   const salesReturnData = 1;
//   const purchasesReturnData = 28;

//   const simStatusData = {
//     labels: ["Active", "Inactive", "Pending"],
//     datasets: [
//       {
//         data: [1250, 100, 150], // Active, Inactive, Pending
//         backgroundColor: [
//           CHART_COLORS.primary, // Active - Main purple
//           CHART_COLORS.purple3, // Inactive - Rich purple
//           CHART_COLORS.purple4, // Pending - Lighter purple
//         ],
//         borderColor: "#ffffff",
//         borderWidth: 2,
//         cutout: "70%", // This makes it a donut chart
//       },
//     ],
//   };

//   const donutChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "bottom",
//         labels: {
//           padding: 20,
//           font: {
//             size: 12,
//           },
//         },
//       },
//       title: {
//         display: true,
//         text: "SIM Card Status Distribution",
//         font: {
//           size: 16,
//           weight: "bold",
//         },
//         padding: {
//           bottom: 20,
//         },
//       },
//     },
//   };

//   const topProducts = [
//     { name: "Product A", value: 400 },
//     { name: "Product B", value: 300 },
//     { name: "Product C", value: 200 },
//     { name: "Product D", value: 150 },
//     { name: "Product E", value: 100 },
//   ];

//   const pieChartData = {
//     labels: topProducts.map((product) => product.name),
//     datasets: [
//       {
//         data: topProducts.map((product) => product.value),
//         backgroundColor: Object.values(CHART_COLORS),
//         borderColor: "#ffffff",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const pieChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "bottom",
//         labels: {
//           padding: 20,
//           font: {
//             size: 12,
//           },
//         },
//       },
//       title: {
//         display: true,
//         text: "Top Selling Products",
//         font: {
//           size: 16,
//           weight: "bold",
//         },
//         padding: {
//           bottom: 20,
//         },
//       },
//     },
//   };

//   const salesPurchasesChartData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Sales",
//         data: [500, 600, 700, 800, 900, 1000, 1100],
//         backgroundColor: CHART_COLORS.primary,
//       },
//       {
//         label: "Purchases",
//         data: [300, 400, 500, 600, 700, 800, 900],
//         backgroundColor: CHART_COLORS.purple3,
//       },
//     ],
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-primary">Dashboard</h1>

//       <div className="mb-6 flex items-center gap-4">
//         <div className="flex-1">
//           <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
//             <Warehouse size={16} /> Filter by Warehouse
//           </label>
//           <select className="mt-2 block w-full p-3 border border-gray-300 rounded-md ring-none outline-none">
//             <option>Sim</option>
//             <option>Devices</option>
//           </select>
//         </div>
//         <div className="flex-1">
//           <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
//             <Calendar size={16} /> Select Date Range
//           </label>
//           <DatePicker
//             selectsRange={true}
//             startDate={startDate}
//             endDate={endDate}
//             onChange={(update) => setDateRange(update)}
//             isClearable={true}
//             className="mt-2 block w-full py-3 pl-4 pr-8 border border-gray-300 rounded-md ring-none outline-none"
//             placeholderText="Select Date Range"
//           />
//         </div>
//         <h1 className=" text-xl px-10">
//           Remaining balance:
//           <span className="text-secondary font-bold ">₹12,345.67</span>
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//         <div className="bg-white p-4 rounded-md shadow-lg">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-semibold text-secondary">Total Sim</h2>
//             <SmartphoneIcon className="w-6 h-6 text-secondary" />
//           </div>
//           <p className="text-2xl font-semibold">{salesData.toLocaleString()}</p>
//         </div>
//         <div className="bg-white p-4 rounded-md shadow-lg text-secondary">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-semibold text-secondary">Active</h2>
//             <WifiHighIcon className="w-6 h-6" />
//           </div>
//           <p className="text-2xl font-semibold text-black">
//             {purchasesData.toLocaleString()}
//           </p>
//         </div>
//         <div className="bg-white p-4 rounded-md shadow-lg">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-semibold text-secondary">InActive</h2>
//             <XCircleIcon className="w-6 h-6 text-secondary" />
//           </div>
//           <p className="text-2xl font-semibold text-black">
//             {purchasesReturnData.toLocaleString()}
//           </p>
//         </div>
//         <div className="bg-white p-4 rounded-md shadow-lg">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-semibold text-secondary">Pending</h2>
//             <TimerIcon className="w-6 h-6 text-secondary" />
//           </div>
//           <p className="text-2xl font-semibold text-black">
//             {salesReturnData.toLocaleString()}
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-md shadow-md">
//           <div className="h-64">
//             <Pie data={simStatusData} options={donutChartOptions} />
//           </div>
//           <div className="mt-4">
//             <div className="grid grid-cols-3 gap-4 text-center">
//               <div className="p-3 rounded-md bg-gray-50">
//                 <p className="text-sm text-gray-600">Total SIMs</p>
//                 <p className="text-xl font-bold">1,500</p>
//               </div>
//               <div className="p-3 rounded-md bg-gray-50">
//                 <p className="text-sm text-gray-600">Active</p>
//                 <p className="text-xl font-bold">1,250</p>
//               </div>
//               <div className="p-3 rounded-md bg-gray-50">
//                 <p className="text-sm text-gray-600">Utilization</p>
//                 <p className="text-xl font-bold">83%</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Placeholder for potential additional widgets */}
//         <div className="bg-white p-6 rounded-md shadow-md">
//           <div className="flex justify-between items-center mb-6">
//             <div className="flex items-center gap-2">
//               <Smartphone className="w-5 h-5" />
//               <h2 className="text-lg font-semibold">SIM Activation Requests</h2>
//             </div>
//             <Link
//               to="/requests"
//               className="flex items-center text-sm gap-1 px-3 py-1 rounded-md bg-secondary text-white"
//             >
//               View All
//               <ChevronRight className="w-4 h-4" />
//             </Link>
//           </div>

//           <div className="space-y-4">
//             {simRequests.map((request) => (
//               <div
//                 key={request.id}
//                 className="p-2 bg-gray-50 rounded-md space-y-3"
//               >
//                 <div className="flex justify-between items-center">
//                   <div className="space-y-1">
//                     <div className="flex items-center gap-2">
//                       <User className="w-4 h-4 text-gray-500" />
//                       <p className="text-sm font-medium">{request.userName}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Smartphone className="w-4 h-4 text-gray-500" />
//                       <p className="text-xs text-gray-600">
//                         IMEI: {request.imeiNumber}
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <CreditCard className="w-4 h-4 text-gray-500" />
//                       <p className="text-xs text-gray-600">
//                         Payment: {request.paymentStatus}
//                       </p>
//                     </div>
//                   </div>
//                   <Link className="border bg-secondary  border-secondary py-1 px-2 rounded-md text-white text-sm">
//                     Approve
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Wallet Balance Column */}
//         <div className="bg-white p-6 rounded-md shadow-md">
//           <div className="flex items-center gap-2 mb-6">
//             <Wallet className="w-5 h-5" />
//             <h2 className="text-lg font-semibold">Wallet Balance</h2>
//           </div>

//           <div className="space-y-6">
//             <div className="bg-gray-50 p-4 rounded-md">
//               <p className="text-sm text-gray-600 mb-1">Available Balance</p>
//               <p className="text-2xl font-semibold">₹12,345.67</p>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-gray-50 p-4 rounded-md">
//                 <p className="text-sm text-gray-600 mb-1">Monthly Spend</p>
//                 <p
//                   className="text-lg font-semibold"
//                   style={{ color: CHART_COLORS.purple3 }}
//                 >
//                   ₹2,380.00
//                 </p>
//               </div>
//               <div className="bg-gray-50 p-4 rounded-md">
//                 <p className="text-sm text-gray-600 mb-1">Pending</p>
//                 <p
//                   className="text-lg font-semibold"
//                   style={{ color: CHART_COLORS.purple4 }}
//                 >
//                   ₹456.20
//                 </p>
//               </div>
//             </div>

//             <Link
//               className="w-full py-2 px-4 rounded-md text-white font-medium"
//               style={{ backgroundColor: CHART_COLORS.primary }}
//             >
//               Add Funds
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";

const DashboardLayout = () => {
  return (
    <div>
      <main className="flex-1 overflow-auto p-6 bg-gray-100">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
