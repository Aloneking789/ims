import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

function AddProductForm() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const organizations = [
    "Organization A",
    "Organization B",
    "Organization C",
    "Organization D",
  ];
  const mnoOptions = ["Jio", "Airtel", "Vi", "BSNL"];

  const primaryMNO = watch("Primary MNO");
  const filteredMnoOptions = mnoOptions.filter((mno) => mno !== primaryMNO);

  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h1 className="text-2xl font-bold text-secondary mb-6">Add Product</h1>
      <Link to="/product/bulk-import">
        <button className="bg-secondary text-white px-4 py-2 my-4 rounded-md hover:bg-secondary/90">
          Import In Bulk
        </button>
      </Link>
      <div className="mx-auto text-black rounded-md shadow-md p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-secondary">
              Organization
            </label>
            <Controller
              name="Organization"
              control={control}
              defaultValue=""
              rules={{ required: "Organization is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="block w-full mt-1 p-2 border border-[#adadad] focus:outline-none focus:border-secondary text-black rounded-md "
                >
                  <option value="">Select Organization</option>
                  {organizations.map((org) => (
                    <option key={org} value={org}>
                      {org}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.Organization && (
              <span className="text-secondary text-sm">
                {errors.Organization.message}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Information */}
            <div>
              <h3 className="text-lg font-medium text-secondary mb-4">
                Primary Information
              </h3>
              <div className="space-y-4">
                <Controller
                  name="Primary ICCID"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Primary ICCID"
                      className="w-full p-2 border text-black border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                    />
                  )}
                />
                <Controller
                  name="Primary MSISDN"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Primary MSISDN"
                      className="w-full p-2 border text-black border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                    />
                  )}
                />
                <Controller
                  name="Primary IMSI"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Primary IMSI"
                      className="w-full p-2 border text-black border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                    />
                  )}
                />
                <Controller
                  name="Primary MNO"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full p-2 border text-black border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                    >
                      <option value="">Select Primary MNO</option>
                      {mnoOptions.map((mno) => (
                        <option key={mno} value={mno}>
                          {mno}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>

            {/* Fallback Information */}
            <div>
              <h3 className="text-lg font-medium text-secondary mb-4">
                Fallback Information
              </h3>
              <div className="space-y-4">
                <Controller
                  name="Fallback ICCID"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Fallback ICCID"
                      className="w-full p-2 border text-black border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                    />
                  )}
                />
                <Controller
                  name="Fallback MSISDN"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Fallback MSISDN"
                      className="w-full p-2 border text-black border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                    />
                  )}
                />
                <Controller
                  name="Fallback IMSI"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Fallback IMSI"
                      className="w-full p-2 border text-black border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                    />
                  )}
                />
                <Controller
                  name="Fallback MNO"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full p-2 border text-black border-[#adadad] focus:outline-none focus:border-secondary rounded-md"
                    >
                      <option value="">Select Fallback MNO</option>
                      {filteredMnoOptions.map((mno) => (
                        <option key={mno} value={mno}>
                          {mno}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;
