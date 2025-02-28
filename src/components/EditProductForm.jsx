import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

function EditProductForm() {
  const [imei, setImei] = useState("");
  const [formData, setFormData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Dummy data for SIM information
  const dummyDataArray = [
    {
      id: 1,
      organization: "Organization A",
      primaryImsi: "123456789012345",
      secondaryIccid: "1234567890123456789",
      secondaryMsisdn: "9876543210",
      secondaryImsi: "123456789012345",
      secondaryMno: "MNO A",
      fallbackIccid: "9876543210987654321",
      fallbackMsisdn: "0123456789",
      fallbackImsi: "987654321098765",
      fallbackMno: "MNO B",
    },
    {
      id: 2,
      organization: "Organization B",
      primaryImsi: "223456789012345",
      secondaryIccid: "2234567890123456789",
      secondaryMsisdn: "8876543210",
      secondaryImsi: "223456789012345",
      secondaryMno: "MNO C",
      fallbackIccid: "8876543210987654321",
      fallbackMsisdn: "1123456789",
      fallbackImsi: "887654321098765",
      fallbackMno: "MNO D",
    },
    {
      id: 3,
      organization: "Organization C",
      primaryImsi: "323456789012345",
      secondaryIccid: "3234567890123456789",
      secondaryMsisdn: "7876543210",
      secondaryImsi: "323456789012345",
      secondaryMno: "MNO E",
      fallbackIccid: "7876543210987654321",
      fallbackMsisdn: "2123456789",
      fallbackImsi: "787654321098765",
      fallbackMno: "MNO F",
    },
    {
      id: 4,
      organization: "Organization D",
      primaryImsi: "423456789012345",
      secondaryIccid: "4234567890123456789",
      secondaryMsisdn: "6876543210",
      secondaryImsi: "423456789012345",
      secondaryMno: "MNO A",
      fallbackIccid: "6876543210987654321",
      fallbackMsisdn: "3123456789",
      fallbackImsi: "687654321098765",
      fallbackMno: "MNO B",
    },
    {
      id: 5,
      organization: "Organization E",
      primaryImsi: "523456789012345",
      secondaryIccid: "5234567890123456789",
      secondaryMsisdn: "5876543210",
      secondaryImsi: "523456789012345",
      secondaryMno: "MNO C",
      fallbackIccid: "5876543210987654321",
      fallbackMsisdn: "4123456789",
      fallbackImsi: "587654321098765",
      fallbackMno: "MNO D",
    },
    {
      id: 6,
      organization: "Organization F",
      primaryImsi: "623456789012345",
      secondaryIccid: "6234567890123456789",
      secondaryMsisdn: "4876543210",
      secondaryImsi: "623456789012345",
      secondaryMno: "MNO E",
      fallbackIccid: "4876543210987654321",
      fallbackMsisdn: "5123456789",
      fallbackImsi: "487654321098765",
      fallbackMno: "MNO F",
    },
    {
      id: 7,
      organization: "Organization G",
      primaryImsi: "723456789012345",
      secondaryIccid: "7234567890123456789",
      secondaryMsisdn: "3876543210",
      secondaryImsi: "723456789012345",
      secondaryMno: "MNO A",
      fallbackIccid: "3876543210987654321",
      fallbackMsisdn: "6123456789",
      fallbackImsi: "387654321098765",
      fallbackMno: "MNO B",
    },
    {
      id: 8,
      organization: "Organization H",
      primaryImsi: "823456789012345",
      secondaryIccid: "8234567890123456789",
      secondaryMsisdn: "2876543210",
      secondaryImsi: "823456789012345",
      secondaryMno: "MNO C",
      fallbackIccid: "2876543210987654321",
      fallbackMsisdn: "7123456789",
      fallbackImsi: "287654321098765",
      fallbackMno: "MNO D",
    },
    {
      id: 9,
      organization: "Organization I",
      primaryImsi: "923456789012345",
      secondaryIccid: "9234567890123456789",
      secondaryMsisdn: "1876543210",
      secondaryImsi: "923456789012345",
      secondaryMno: "MNO E",
      fallbackIccid: "1876543210987654321",
      fallbackMsisdn: "8123456789",
      fallbackImsi: "187654321098765",
      fallbackMno: "MNO F",
    },
    {
      id: 10,
      organization: "Organization J",
      primaryImsi: "023456789012345",
      secondaryIccid: "0234567890123456789",
      secondaryMsisdn: "0876543210",
      secondaryImsi: "023456789012345",
      secondaryMno: "MNO A",
      fallbackIccid: "0876543210987654321",
      fallbackMsisdn: "9123456789",
      fallbackImsi: "087654321098765",
      fallbackMno: "MNO B",
    },
    {
      id: 11,
      organization: "Organization K",
      primaryImsi: "123456789012346",
      secondaryIccid: "1234567890123456790",
      secondaryMsisdn: "9876543211",
      secondaryImsi: "123456789012346",
      secondaryMno: "MNO C",
      fallbackIccid: "9876543210987654322",
      fallbackMsisdn: "0123456780",
      fallbackImsi: "987654321098766",
      fallbackMno: "MNO D",
    },
    {
      id: 12,
      organization: "Organization L",
      primaryImsi: "223456789012346",
      secondaryIccid: "2234567890123456790",
      secondaryMsisdn: "8876543211",
      secondaryImsi: "223456789012346",
      secondaryMno: "MNO E",
      fallbackIccid: "8876543210987654322",
      fallbackMsisdn: "1123456780",
      fallbackImsi: "887654321098766",
      fallbackMno: "MNO F",
    },
    {
      id: 13,
      organization: "Organization M",
      primaryImsi: "323456789012346",
      secondaryIccid: "3234567890123456790",
      secondaryMsisdn: "7876543211",
      secondaryImsi: "323456789012346",
      secondaryMno: "MNO A",
      fallbackIccid: "7876543210987654322",
      fallbackMsisdn: "2123456780",
      fallbackImsi: "787654321098766",
      fallbackMno: "MNO B",
    },
    {
      id: 14,
      organization: "Organization N",
      primaryImsi: "423456789012346",
      secondaryIccid: "4234567890123456790",
      secondaryMsisdn: "6876543211",
      secondaryImsi: "423456789012346",
      secondaryMno: "MNO C",
      fallbackIccid: "6876543210987654322",
      fallbackMsisdn: "3123456780",
      fallbackImsi: "687654321098766",
      fallbackMno: "MNO D",
    },
    {
      id: 15,
      organization: "Organization O",
      primaryImsi: "523456789012346",
      secondaryIccid: "5234567890123456790",
      secondaryMsisdn: "5876543211",
      secondaryImsi: "523456789012346",
      secondaryMno: "MNO E",
      fallbackIccid: "5876543210987654322",
      fallbackMsisdn: "4123456780",
      fallbackImsi: "587654321098766",
      fallbackMno: "MNO F",
    },
    {
      id: 16,
      organization: "Organization P",
      primaryImsi: "623456789012346",
      secondaryIccid: "6234567890123456790",
      secondaryMsisdn: "4876543211",
      secondaryImsi: "623456789012346",
      secondaryMno: "MNO A",
      fallbackIccid: "4876543210987654322",
      fallbackMsisdn: "5123456780",
      fallbackImsi: "487654321098766",
      fallbackMno: "MNO B",
    },
    {
      id: 17,
      organization: "Organization Q",
      primaryImsi: "723456789012346",
      secondaryIccid: "7234567890123456790",
      secondaryMsisdn: "3876543211",
      secondaryImsi: "723456789012346",
      secondaryMno: "MNO C",
      fallbackIccid: "3876543210987654322",
      fallbackMsisdn: "6123456780",
      fallbackImsi: "387654321098766",
      fallbackMno: "MNO D",
    },
    {
      id: 18,
      organization: "Organization R",
      primaryImsi: "823456789012346",
      secondaryIccid: "8234567890123456790",
      secondaryMsisdn: "2876543211",
      secondaryImsi: "823456789012346",
      secondaryMno: "MNO E",
      fallbackIccid: "2876543210987654322",
      fallbackMsisdn: "7123456780",
      fallbackImsi: "287654321098766",
      fallbackMno: "MNO F",
    },
    {
      id: 19,
      organization: "Organization S",
      primaryImsi: "923456789012346",
      secondaryIccid: "9234567890123456790",
      secondaryMsisdn: "1876543211",
      secondaryImsi: "923456789012346",
      secondaryMno: "MNO A",
      fallbackIccid: "1876543210987654322",
      fallbackMsisdn: "8123456780",
      fallbackImsi: "187654321098766",
      fallbackMno: "MNO B",
    },
    {
      id: 20,
      organization: "Organization T",
      primaryImsi: "023456789012346",
      secondaryIccid: "0234567890123456790",
      secondaryMsisdn: "0876543211",
      secondaryImsi: "023456789012346",
      secondaryMno: "MNO C",
      fallbackIccid: "0876543210987654322",
      fallbackMsisdn: "9123456780",
      fallbackImsi: "087654321098766",
      fallbackMno: "MNO D",
    },
    {
      id: 21,
      organization: "Organization U",
      primaryImsi: "123456789012347",
      secondaryIccid: "1234567890123456791",
      secondaryMsisdn: "9876543212",
      secondaryImsi: "123456789012347",
      secondaryMno: "MNO E",
      fallbackIccid: "9876543210987654323",
      fallbackMsisdn: "0123456781",
      fallbackImsi: "987654321098767",
      fallbackMno: "MNO F",
    },
  ];

  const handleFetchData = () => {
    // Simulate fetching data based on IMEI
    // if (imei === "123456789012345") {
    //   setFormData(dummyData);
    //   setIsEditing(false); // Reset editing mode
    // } else {
    //   alert("No data found for the provided IMEI.");
    // }
  };

  const handleEdit = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    alert("Data updated successfully!");
    setIsEditing(false); // Disable editing mode after submission
  };
  const [filterImsi, setFilterImsi] = useState("");
  const [filteredData, setFilteredData] = useState(dummyDataArray);

  // Real-time filtering
  useEffect(() => {
    if (filterImsi === "") {
      setFilteredData(dummyDataArray);
    } else {
      const filtered = dummyDataArray.filter((item) =>
        item.primaryImsi.toLowerCase().includes(filterImsi.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [filterImsi]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          {/* IMEI Input Section */}
          <div>
            <label htmlFor="imei" className="block text-sm font-medium">
              Enter IMEI Number
            </label>
          </div>
          {/* Filter input */}
          <div className="mb-6">
            <label htmlFor="imsi-filter" className="block mb-2 font-medium">
              Filter by Primary IMSI:
            </label>
            <input
              id="imsi-filter"
              type="text"
              value={filterImsi}
              onChange={(e) => setFilterImsi(e.target.value)}
              placeholder="Enter IMSI number..."
              className="w-full p-2 border  border-secondary outline-none rounded-md"
            />
            <div className="mt-2 text-sm text-gray-500">
              Showing {filteredData.length} of {dummyDataArray.length} records
            </div>
          </div>

          {/* Data table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded">
              <thead className="bg-[#dbdbdb]">
                <tr>
                  <th className="py-2 px-4 rounded-sm text-left">
                    Organization
                  </th>
                  <th className="py-2 px-4 rounded-sm text-left">
                    Primary IMSI
                  </th>
                  <th className="py-2 px-4 rounded-sm text-left">
                    Secondary ICCID
                  </th>
                  <th className="py-2 px-4 rounded-sm text-left">
                    Secondary MSISDN
                  </th>
                  <th className="py-2 px-4 rounded-sm text-left">
                    Secondary MNO
                  </th>
                  <th className="py-2 px-4 rounded-sm text-left">
                    Fallback IMSI
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 rounded-sm">
                      {item.organization}
                    </td>
                    <td className="py-2 px-4 rounded-sm font-medium">
                      {item.primaryImsi}
                    </td>
                    <td className="py-2 px-4 rounded-sm">
                      {item.secondaryIccid}
                    </td>
                    <td className="py-2 px-4 rounded-sm">
                      {item.secondaryMsisdn}
                    </td>
                    <td className="py-2 px-4 rounded-sm">
                      {item.secondaryMno}
                    </td>
                    <td className="py-2 px-4 rounded-sm">
                      {item.fallbackImsi}
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="py-4 px-4 text-center text-gray-500"
                    >
                      No results found for "{filterImsi}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Display Fetched Data */}
          {formData && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  SIM Information
                </h2>
                <button
                  type="button"
                  onClick={handleEdit}
                  className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                >
                  Edit Details
                </button>
              </div>

              {/* Edit Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Organization
                  </label>
                  <div className="mt-1 relative">
                    <select
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary rounded-md"
                      disabled={!isEditing}
                    >
                      <option value="Organization A">Organization A</option>
                      <option value="Organization B">Organization B</option>
                      <option value="Organization C">Organization C</option>
                      <option value="Organization D">Organization D</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* secondary Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      secondary Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="secondaryIccid"
                          className="block text-sm font-medium text-gray-700"
                        >
                          secondary ICCID
                        </label>
                        <input
                          type="text"
                          name="secondaryIccid"
                          id="secondaryIccid"
                          value={formData.secondaryIccid}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-secondary focus:border-secondary"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="secondaryMsisdn"
                          className="block text-sm font-medium text-gray-700"
                        >
                          secondary MSISDN
                        </label>
                        <input
                          type="text"
                          name="secondaryMsisdn"
                          id="secondaryMsisdn"
                          value={formData.secondaryMsisdn}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-secondary focus:border-secondary"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="secondaryImsi"
                          className="block text-sm font-medium text-gray-700"
                        >
                          secondary IMSI
                        </label>
                        <input
                          type="text"
                          name="secondaryImsi"
                          id="secondaryImsi"
                          value={formData.secondaryImsi}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-secondary focus:border-secondary"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="secondaryMno"
                          className="block text-sm font-medium text-gray-700"
                        >
                          secondary MNO
                        </label>
                        <input
                          type="text"
                          name="secondaryMno"
                          id="secondaryMno"
                          value={formData.secondaryMno}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-secondary focus:border-secondary"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fallback Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Fallback Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="fallbackIccid"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Fallback ICCID
                        </label>
                        <input
                          type="text"
                          name="fallbackIccid"
                          id="fallbackIccid"
                          value={formData.fallbackIccid}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-secondary focus:border-secondary"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="fallbackMsisdn"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Fallback MSISDN
                        </label>
                        <input
                          type="text"
                          name="fallbackMsisdn"
                          id="fallbackMsisdn"
                          value={formData.fallbackMsisdn}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-secondary focus:border-secondary"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="fallbackImsi"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Fallback IMSI
                        </label>
                        <input
                          type="text"
                          name="fallbackImsi"
                          id="fallbackImsi"
                          value={formData.fallbackImsi}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-secondary focus:border-secondary"
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="fallbackMno"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Fallback MNO
                        </label>
                        <input
                          type="text"
                          name="fallbackMno"
                          id="fallbackMno"
                          value={formData.fallbackMno}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-secondary focus:border-secondary"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                {isEditing && (
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditProductForm;
