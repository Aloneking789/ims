import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import InvalidURL from "./components/InvalidURL";
import { useState } from "react";
import Sim from "./components/sim/Sim";
import Devices from "./components/devices/Devices";
import User from "./components/user/User";
import AddProductForm from "./components/AddProductForm";
import EditProductForm from "./components/EditProductForm";
import { BulkImport } from "./components/BulkImport";
import Login from "./pages/Login";
import ProductReport from "./pages/ProductReport";
import Requests from "./pages/Requests";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import SuperAdminDashboard from "./pages/dashboard/SuperAdminDashboard";
import RetailerDashboard from "./pages/dashboard/RetailerDashboard";
import DashboardLayout from "./pages/Dashboard";
import UserRegisterForm from "./components/user/UserRegisterForm";
import ImportUserBulk from "./components/user/ImportBulkUser";

const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("token") === true;

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/*"
        element={
          // <ProtectedRoute>
          <div className="flex">
            <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
            <div
              className={`md:flex-1 flex-none ${
                isExpanded ? "ml-64" : "ml-24"
              } transition-all duration-500 bg-[#f9f8f8]`}
            >
              <Navbar toggleSidebar={toggleSidebar} />
              <Routes>
                {/* Dashboard routes - properly nested */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route path="super_admin" element={<SuperAdminDashboard />} />
                  <Route path="admin" element={<AdminDashboard />} />
                  <Route path="retailer" element={<RetailerDashboard />} />
                </Route>

                {/* Product routes */}
                <Route path="/products" element={<Products />} />
                <Route
                  path="/product/add-product"
                  element={<AddProductForm />}
                />
                <Route
                  path="/product/edit-product"
                  element={<EditProductForm />}
                />
                <Route path="/product/bulk-import" element={<BulkImport />} />
                <Route path="/product/report" element={<ProductReport />} />

                {/* Other routes */}
                <Route path="/sim" element={<Sim />} />
                <Route path="/devices" element={<Devices />} />
                <Route path="/user" element={<User />} />
                <Route path="/user/add" element={<UserRegisterForm />} />
                <Route path="/user/bulk-import" element={<ImportUserBulk />} />
                <Route path="/requests" element={<Requests />} />

                {/* Catch-all route for invalid URLs */}
                <Route path="*" element={<InvalidURL />} />
              </Routes>
            </div>
          </div>
          // </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
