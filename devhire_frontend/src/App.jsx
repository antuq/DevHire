import { useEffect, useState } from 'react'
import './App.css'
import API from './services/api'

function App() {

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      console.log("Data: ", res.data);
      setJobs(res.data.jobs);
    } catch (err) {
      console.log("ERROR OCCURED: ", err.message);
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-600";
      case "Interviewing":
        return "bg-yellow-100 text-yellow-600";
      case "Rejected":
        return "bg-red-100 text-red-600";
      case "Offer":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-indigo-200">

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 tracking-tight">
        DevHire Dashboard
      </h1>

      {/* Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100"
            >
              {/* Top Section */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {job.role}
                  </h2>
                  <p className="text-gray-500 text-sm">{job.company}</p>
                </div>

                {/* Status Badge */}
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                    job.status
                  )}`}
                >
                  {job.status}
                </span>
              </div>

              {/* Divider */}
              <div className="border-t my-4"></div>

              {/* Details */}
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <span className="font-medium">📍 Location:</span>{" "}
                  {job.location}
                </p>
                <p>
                  <span className="font-medium">💰 Salary:</span>{" "}
                  {job.salary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App
