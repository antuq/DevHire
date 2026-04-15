import { useEffect, useState } from 'react'
import './App.css'
import API from './services/api'
import toast, { Toaster } from "react-hot-toast"

function App() {

  // =======================
  // STATE
  // =======================

  const [jobs, setJobs] = useState([]);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "",
    location: "",
    salary: ""
  });

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sort, setSort] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // =======================
  // HELPER FUNCTIONS
  // =======================

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

  // =======================
  // API FUNCTIONS
  // =======================

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs", {
        params: {
          search: debouncedSearch,
          status: statusFilter,
          sort: sort
        }
      });

      setJobs(res.data.jobs);

    } catch (err) {
      console.log("ERROR OCCURED: ", err.message);
    }
  }

  // =======================
  // EVENT HANDLERS
  // =======================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/jobs", formData);

      toast.success("Job Added Successfully!");

      fetchJobs();

      setFormData({
        company: "",
        role: "",
        status: "",
        location: "",
        salary: ""
      });

    } catch (err) {
      console.log("error occured: ", err.message);
    }
  }

  // =======================
  // EFFECTS
  // =======================

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    fetchJobs();
  }, [debouncedSearch, statusFilter, sort]);

  // =======================
  // UI
  // =======================

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-indigo-200">

      <Toaster position='top-right' />

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 tracking-tight">
        DevHire Dashboard
      </h1>

      {/* Form */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-5 rounded-xl shadow-md">

          <h2 className="text-lg font-semibold mb-3">Add Job</h2>

          <input name="company" placeholder="Company*" value={formData.company} onChange={handleChange} className="border w-full p-2 mb-2" />
          <input name="role" placeholder="Role*" value={formData.role} onChange={handleChange} className="border w-full p-2 mb-2" />

          <select name="status" value={formData.status} onChange={handleChange} className="border w-full p-2 mb-2 rounded">
            <option value="">Select Status</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>

          <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="border w-full p-2 mb-2" />
          <input name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} className="border w-full p-2 mb-2" />

          <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Job
          </button>
        </form>
      </div>

      {/* Search + Filter + Sort */}
      <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 mb-6'>
        <div className='bg-white rounded-xl p-4 shadow-md flex flex-col md:flex-row gap-4 items-center'>

          <input
            type="text"
            placeholder='Search by company, role and location'
            className='border p-2 rounded w-full md:w-2/3'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className='border p-2 rounded w-full md:w-1/3'
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Filter By Status</option>
            <option value="Applied">Applied</option>
            <option value="Rejected">Rejected</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className='border rounded p-2 w-full md:w-1/4'
          >
            <option value="">Default</option>
            <option value="-createdAt">⬇️ Newest</option>
            <option value="createdAt">⬆️ Oldest</option>
          </select>

        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {jobs.map((job, index) => (
            <div
              key={job._id}
              style={{ animationDelay: `${index * 50}ms` }}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 animate-fadeIn"
            >

              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{job.role}</h2>
                  <p className="text-gray-500 text-sm">{job.company}</p>
                </div>

                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(job.status)}`}>
                  {job.status}
                </span>
              </div>

              <div className="border-t my-4"></div>

              <div className="space-y-1 text-sm text-gray-700">
                <p><span className="font-medium">📍 Location:</span> {job.location}</p>
                <p><span className="font-medium">💰 Salary:</span> {job.salary}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;