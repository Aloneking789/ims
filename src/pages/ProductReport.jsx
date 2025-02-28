import React, { useState } from "react";
import { Search, Download, Filter } from "lucide-react";

const ProductReport = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const productData = [
    {
      id: 1,
      name: "Smartwatch",
      category: "Wearable",
      status: "Available",
      price: "$199",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      category: "Audio",
      status: "Out of Stock",
      price: "$99",
    },
    {
      id: 3,
      name: "Fitness Tracker",
      category: "Wearable",
      status: "Available",
      price: "$129",
    },
    {
      id: 4,
      name: "VR Headset",
      category: "Gaming",
      status: "Available",
      price: "$299",
    },
    {
      id: 1,
      name: "Smartwatch",
      category: "Wearable",
      status: "Available",
      price: "$199",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      category: "Audio",
      status: "Out of Stock",
      price: "$99",
    },
    {
      id: 3,
      name: "Fitness Tracker",
      category: "Wearable",
      status: "Available",
      price: "$129",
    },
    {
      id: 4,
      name: "VR Headset",
      category: "Gaming",
      status: "Available",
      price: "$299",
    },
    {
      id: 1,
      name: "Smartwatch",
      category: "Wearable",
      status: "Available",
      price: "$199",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      category: "Audio",
      status: "Out of Stock",
      price: "$99",
    },
    {
      id: 3,
      name: "Fitness Tracker",
      category: "Wearable",
      status: "Available",
      price: "$129",
    },
    {
      id: 4,
      name: "VR Headset",
      category: "Gaming",
      status: "Available",
      price: "$299",
    },
    {
      id: 1,
      name: "Smartwatch",
      category: "Wearable",
      status: "Available",
      price: "$199",
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      category: "Audio",
      status: "Out of Stock",
      price: "$99",
    },
    {
      id: 3,
      name: "Fitness Tracker",
      category: "Wearable",
      status: "Available",
      price: "$129",
    },
    {
      id: 4,
      name: "VR Headset",
      category: "Gaming",
      status: "Available",
      price: "$299",
    },
  ];

  const filteredProducts = productData.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter ? product.category === categoryFilter : true) &&
      (statusFilter ? product.status === statusFilter : true)
    );
  });

  const exportToCSV = () => {
    const csvContent =
      "Product Name,Category,Status,Price\n" +
      filteredProducts
        .map((p) => `${p.name},${p.category},${p.status},${p.price}`)
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Product_Report.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Report</h1>

      {/* Filters & Search */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full px-4 py-2 border rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-2 w-5 h-5 text-gray-500" />
        </div>

        <select
          className="border px-3 py-2 rounded-md"
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Wearable">Wearable</option>
          <option value="Audio">Audio</option>
          <option value="Gaming">Gaming</option>
        </select>

        <select
          className="border px-3 py-2 rounded-md"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Available">Available</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <button
          className="flex items-center bg-secondary text-white px-4 py-2 rounded-md"
          onClick={exportToCSV}
        >
          <Download className="w-5 h-5 mr-2" /> Export CSV
        </button>
      </div>

      {/* Product Report Table */}
      <div className=" bg-white shadow-md rounded-lg">
        <table className="min-w-full bg-white  border-gray-200">
          <thead className="bg-[#b6b6b6]">
            <tr>
              <th className="p-3 text-left">Product Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left ">Status</th>
              <th className="p-3 text-left ">Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-[#F1F2F5]">
                  <td className="p-3 ">{product.name}</td>
                  <td className="p-3 ">{product.category}</td>
                  <td className="p-3 ">{product.status}</td>
                  <td className="p-3 ">{product.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center border">
                  No matching products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReport;
