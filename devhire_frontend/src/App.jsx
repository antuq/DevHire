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
    salary: "",
    link: "",
    linkTitle: ""
  });

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sort, setSort] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  const [editId, setEditId] = useState(null); // we want to reuse the add job form to updation instead of creating a new one altogether.

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
          sort: sort,
          page: page,
          limit: limit
        }
      });

      setJobs(res.data.jobs);
      setTotalPages(res.data.totalPages)

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
      if (editId) {
        // Update Job
        await API.put(`/jobs/${editId}`, formData);
        toast.success("Job Updated Successfully");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Create Job
        await API.post("/jobs", formData);
        toast.success("Job Added Successfully!");
      }

      fetchJobs();

      setFormData({
        company: "",
        role: "",
        status: "",
        location: "",
        salary: "",
        link: "",
        linkTitle: ""
      });

      setEditId(null);

    } catch (err) {
      console.log("error occured: ", err.message);
    }
  }

  const handleEdit = async (job) => {

    setFormData({
      company: job.company,
      role: job.role,
      status: job.status,
      location: job.location,
      salary: job.salary,
      link: job.link || "",
      linkTitle: job.linkTitle || ""
    });

    setEditId(job._id); // change the id from null to actual job id to allow updation through form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleCancelEdit = async () => {
    setEditId(null);
    setFormData({
      company: "",
      role: "",
      status: "",
      location: "",
      salary: "",
      link: "",
      linkTitle: ""
    });
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
  }, [debouncedSearch, statusFilter, sort, page]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, statusFilter, sort]);

  // =======================
  // UI
  // =======================

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-slate-100 to-blue-100">

      <Toaster position='top-right' />

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 tracking-tight">
        DevHire Dashboard
      </h1>

      {/* Form */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-5 rounded-xl shadow-md">

          <h2 className="text-lg font-semibold mb-3">
            {editId ? "Edit Job" : "Add Job"}
          </h2>

          <input name="company" placeholder="Company*" value={formData.company} onChange={handleChange} className="border w-full p-2 mb-2" required />
          <input name="role" placeholder="Role*" value={formData.role} onChange={handleChange} className="border w-full p-2 mb-2" required />

          <select name="status" value={formData.status} onChange={handleChange} className="border w-full p-2 mb-2 rounded">
            <option value="">Select Status</option>
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>

          <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="border w-full p-2 mb-2" />
          <input name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} className="border w-full p-2 mb-2" />

          <input name="link" placeholder="Job Application Link" value={formData.link} onChange={handleChange} className="border w-full p-2 mb-2" />

          {formData.link && (
            <input name="linkTitle" placeholder="Link Title (optional)" value={formData.linkTitle} onChange={handleChange} className="border w-full p-2 mb-2" />
          )}

          <div className="flex gap-2 mt-2">
            <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded">
              {editId ? "Update Job" : "Add Job"}
            </button>

            {editId && (
              <button
                type='button'
                onClick={handleCancelEdit}
                className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {jobs.map((job, index) => (
            <div
              key={job._id}
              style={{ animationDelay: `${index * 50}ms` }}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 flex flex-col justify-between"
            >

              {/* Top */}
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{job.role}</h2>
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

              {/* Actions */}
              <div className="flex justify-between items-center mt-4">

                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 border border-blue-200 rounded-md text-blue-600 hover:bg-blue-50 transition"
                  >
                    🔗 {job.linkTitle || "View Job"}
                  </a>
                )}

                <button
                  onClick={() => handleEdit(job)}
                  className="text-sm border px-3 py-1 rounded-md hover:bg-gray-100 transition"
                >
                  ✏️ Edit
                </button>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Pagination */}
      <div className='flex justify-center items-center gap-4 mt-8'>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
        >
          ⬅️ Prev
        </button>

        <span className='font-medium'>Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
        >
          Next ➡️
        </button>
      </div>

    </div>
  );
}

export default App;