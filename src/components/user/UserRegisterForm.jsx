import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

function UserRegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const roles = ["Admin", "Retailer"];

  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h1 className="text-2xl font-bold text-secondary mb-6">User Register</h1>
      <Link to="/user/bulk-import">
        <button className="bg-secondary text-white px-4 py-2 my-4 rounded-md hover:bg-secondary/90">
          Import In Bulk
        </button>
      </Link>
      <div className="mx-auto text-black rounded-md shadow-md p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-secondary">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Email"
                  className="block w-full p-2 border border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                />
              )}
            />
            {errors.email && (
              <span className="text-secondary text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-secondary">
              Mobile Number
            </label>
            <Controller
              name="mobileNumber"
              control={control}
              rules={{ required: "Mobile Number is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  placeholder="Mobile Number"
                  className="block w-full p-2 border border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                />
              )}
            />
            {errors.mobileNumber && (
              <span className="text-secondary text-sm">
                {errors.mobileNumber.message}
              </span>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-secondary">
              Password
            </label>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="block w-full p-2 border border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                />
              )}
            />
            {errors.password && (
              <span className="text-secondary text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-secondary">
              Role
            </label>
            <Controller
              name="role"
              control={control}
              rules={{ required: "Role is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="block w-full p-2 border border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                >
                  <option value="">Select Role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.role && (
              <span className="text-secondary text-sm">
                {errors.role.message}
              </span>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegisterForm;
