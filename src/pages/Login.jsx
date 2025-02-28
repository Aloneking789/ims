import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import axios from "axios";

const inputClass =
  "w-full pl-10 py-3 border rounded-lg focus:outline-none focus:border-secondary";
const buttonClass =
  "w-full bg-secondary text-white py-3 rounded-lg hover:bg-opacity-90 focus:outline-none text-lg transition-all";
const iconClass =
  "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500";
const errorClass = "text-sm text-red-500 mt-1";

const roleMap = {
  Retailer: "retailer",
  Admin: "admin",
  Super_Admin: "super_admin",
};

const Login = ({ setIsLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUser, setSelectedUser] = useState("Retailer");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Check if user is already logged in and redirect accordingly
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     if (user.role === "super_admin") {
  //       navigate("/dashboard/super_admin");
  //     } else if (user.role === "admin") {
  //       navigate("/dashboard/admin");
  //     } else {
  //       navigate("/dashboard/retailer");
  //     }
  //   }
  // }, [navigate]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email: data.email,
          password: data.password,
          role: roleMap[selectedUser],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const userData = response.data;
      localStorage.setItem("user", JSON.stringify(userData));

      // Redirect based on role
      if (userData.role === "super_admin") {
        navigate("/dashboard/super_admin");
      } else if (userData.role === "admin") {
        navigate("dashboard/admin");
      } else {
        navigate("dashboard/super_admin");
      }

      toast.success("Login successful!");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="flex justify-center items-center bg-white py-10">
      <div className="bg-white rounded-md w-full max-w-lg p-12">
        <h1 className="text-center text-3xl font-bold text-secondary mb-2">
          Login as {selectedUser}
        </h1>
        <p className="text-center text-gray-500 text-sm mb-6">
          Select your role and enter credentials
        </p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {Object.keys(roleMap).map((role) => (
            <button
              key={role}
              onClick={() => setSelectedUser(role)}
              className={`flex flex-col items-center text-center rounded-md p-4 transition-all border border-secondary ${
                selectedUser === role
                  ? "bg-secondary text-white"
                  : "bg-white hover:bg-white/80"
              }`}
            >
              <User
                className={`h-6 w-6 ${
                  selectedUser === role ? " text-white" : "text-secondary"
                }`}
              />
              <p className="text-sm font-bold my-2">{role}</p>
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <div className="relative">
              <span className={iconClass}>
                <User className="w-5 h-5" />
              </span>
              <input
                type="email"
                className={inputClass}
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email format",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <div className="relative">
              <span className={iconClass}>
                <Lock className="w-5 h-5" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className={inputClass}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </span>
            </div>
            {errors.password && (
              <p className={errorClass}>{errors.password.message}</p>
            )}
          </div>
          <button type="submit" className={buttonClass}>
            <Lock className="inline-block mr-2 w-5 h-5" /> Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
