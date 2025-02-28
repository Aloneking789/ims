import React, { useState, useEffect } from "react";
import { Trash2, Edit } from "lucide-react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    username: "",
    email: "",
    role: "Any",
    status: "Any",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    const mockData = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      username: `User${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 2 === 0 ? "Admin" : "User",
      status: i % 2 === 0 ? "Active" : "Inactive",
    }));
    setUsers(mockData);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Apply Filters
  const filteredUsers = users.filter((user) => {
    return (
      (filters.username === "" ||
        user.username.toLowerCase().includes(filters.username.toLowerCase())) &&
      (filters.email === "" ||
        user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.role === "Any" || user.role === filters.role) &&
      (filters.status === "Any" || user.status === filters.status)
    );
  });

  // Handle Delete Action
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    alert(`User with ID ${id} deleted successfully!`);
  };

  // Handle Edit Action
  const handleEdit = (id) => {
    alert(`Edit user with ID ${id}`);
  };

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold text-primary mb-4">Inventory Users</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Table Section */}
        <div className="flex-1 bg-white shadow-md rounded-md h-screen overflow-y-scroll">
          <table className="w-full ">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="p-3 text-left">Select</th>
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="">
                    <td className="p-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4"
                      />
                    </td>
                    <td className="p-3">{user.username}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3">{user.status}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        {/* Edit Button */}
                        <button
                          onClick={() => handleEdit(user.id)}
                          className="bg-secondary text-white p-2 rounded-md hover:bg-blue-600 transition-all"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="bg-[red] text-white p-2 rounded-md hover:bg-red-600 transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-3 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Filter Section */}
        <div className="w-full lg:w-1/4 bg-secondary/10 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-primary mb-4">Filters</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={filters.username}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-primary"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={filters.email}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-primary"
            />
            <select
              name="role"
              value={filters.role}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-primary"
            >
              <option value="Any">Any Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-primary"
            >
              <option value="Any">Any Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
