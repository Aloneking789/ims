import React, { useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import { Upload, AlertCircle, CheckCircle2, DownloadIcon } from "lucide-react";

const REQUIRED_HEADERS = [
  "Organization",
  "Primary ICCID",
  "Primary MSISDN",
  "Primary IMSI",
  "Primary MNO",
  "Fallback ICCID",
  "Fallback MSISDN",
  "Fallback IMSI",
  "Fallback MNO",
  "Status",
  "Activation Status",
  "Activation Date",
  "Activated For (days)",
  "Expiration On",
  "Total Validity",
  "Region",
];

export function BulkImport() {
  const [csvData, setCsvData] = useState([]);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const validateHeaders = (headers) => {
    return (
      headers.length === REQUIRED_HEADERS.length &&
      REQUIRED_HEADERS.every((header) => headers.includes(header))
    );
  };

  const handleFile = (file) => {
    if (file.type !== "text/csv") {
      setError("Please upload a CSV file");
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const headers = Object.keys(results.data[0] || {});

        if (!validateHeaders(headers)) {
          setError("CSV file must contain all required headers");
          setCsvData([]);
          return;
        }

        setCsvData(results.data);
        setError("");
        setUploadSuccess(false);
      },
      error: (error) => {
        setError(`Error parsing CSV: ${error.message}`);
      },
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDragLeave = () => setIsDragging(false);
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  };

  const handleUpload = async () => {
    if (csvData.length === 0) {
      setError("No data available for upload.");
      return;
    }
const userData = JSON.parse(localStorage.getItem('user')); // Get and parse the stored object
const token = userData ? userData.token : null; // Get the token from the object
console.log(token);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/sims/bulk-upload",
        {
          sims: csvData,
        },
        {
          headers: { 
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          }
        }
      );

      setUploadSuccess(true);
      setCsvData([]);
      setError("");
    } catch (error) {
      setError(
        `Upload error: ${error.response?.data?.message || error.message}`
      );
    }
  };

  return (
    <div>
      <div className="flex justify-center my-10 align-center">
        <button className="bg-[green] text-white py-2 px-6 rounded-md transition-all">
          Download Sample CSV <DownloadIcon className="inline-block ml-2" />
        </button>
      </div>
      <div className="p-6">
        <div className="w-full max-w-6xl mx-auto">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
              isDragging
                ? "border-secondary bg-[#f3e8ff]"
                : error
                ? "border-red-500 bg-red-50"
                : csvData.length
                ? "border-[#28a745] bg-[#e6f4ea]"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              {error ? (
                <AlertCircle className="w-12 h-12 text-yellow-600" />
              ) : csvData.length ? (
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              ) : (
                <Upload className="w-12 h-12 text-[#28a745]" />
              )}

              <div className="text-lg font-medium">
                {error ? (
                  <span className="text-red-600">{error}</span>
                ) : (
                  <span>
                    Drag & drop your CSV file here, or{" "}
                    <label className="text-secondary hover:text-[#5a1bbf] cursor-pointer">
                      browse
                      <input
                        type="file"
                        className="hidden"
                        accept=".csv"
                        onChange={handleFileInput}
                      />
                    </label>
                  </span>
                )}
              </div>
            </div>

            {csvData.length > 0 && (
              <div className="mt-8 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      {REQUIRED_HEADERS.map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {csvData.slice(0, 10).map((row, index) => (
                      <tr key={index}>
                        {REQUIRED_HEADERS.map((header) => (
                          <td
                            key={header}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-600"
                          >
                            {row[header]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4 text-sm text-gray-500 text-center">
                  Showing first 10 rows of {csvData.length} total rows
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        {csvData.length > 0 && (
          <button
            onClick={handleUpload}
            className="bg-secondary text-white py-2 px-6 rounded-md hover:bg-[#5a1bbf] transition-all"
          >
            Upload File
          </button>
        )}
      </div>
    </div>
  );
}
