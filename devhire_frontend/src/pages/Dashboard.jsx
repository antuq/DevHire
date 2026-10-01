import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";
import {
    FilePlusCorner,
    MapPin,
    Banknote,
    ExternalLink,
    Pencil,
    Trash2,
    ClipboardList,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

export default function Dashboard() {

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

    const [editId, setEditId] = useState(null);
    const [showModal, setShowModal] = useState(false);


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


    const fetchJobs = async () => {
        try {
            const res = await API.get("/jobs", {
                params: {
                    search: debouncedSearch,
                    status: statusFilter,
                    sort,
                    page,
                    limit
                }
            });

            setJobs(res.data.jobs);
            setTotalPages(res.data.totalPages);

        } catch (err) {
            toast.error("Unable to load applications.");
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editId) {
                await API.put(`/jobs/${editId}`, formData);

                toast.success("Job Updated Successfully");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            } else {
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
            setShowModal(false);

        } catch (err) {
            toast.error("Unable to save job.");
        }
    };


    const handleEdit = (job) => {
        setFormData({
            company: job.company,
            role: job.role,
            status: job.status,
            location: job.location,
            salary: job.salary,
            link: job.link || "",
            linkTitle: job.linkTitle || ""
        });

        setEditId(job._id);
        setShowModal(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    const handleCancel = () => {
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

        setShowModal(false);
    };


    const handleDelete = async (id) => {
        const confirmDelete = confirm("Are you sure you want to delete this job?");

        if (!confirmDelete) return;

        try {
            await API.delete(`/jobs/${id}`);

            toast.success("Job Deleted Successfully.");

            fetchJobs();

        } catch (err) {
            toast.error("Unable to delete job.");
        }
    };


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


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-slate-100 to-blue-100 text-gray-900">

            {/* Header */}
            <header className="max-w-6xl mx-auto px-4 pt-12 pb-8">

                <div className="text-center">

                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                        Your applications
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
                        DevHire Dashboard
                    </h1>

                    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                        Keep track of your job applications and stay on top
                        of your search.
                    </p>

                </div>

            </header>


            {/* Search & Filter Bar */}
            <div className="max-w-6xl mx-auto px-4 pb-8">

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-4">

                    <div className="grid md:grid-cols-3 gap-3">

                        <input
                            type="text"
                            placeholder="Search applications..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                        />

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                        >
                            <option value="">All Statuses</option>
                            <option value="Applied">Applied</option>
                            <option value="Interviewing">Interviewing</option>
                            <option value="Offer">Offer</option>
                            <option value="Rejected">Rejected</option>
                        </select>

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                        >
                            <option value="">Sort By</option>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>

                    </div>

                </div>

            </div>


            {/* Form Modal */}
            <div className={`fixed z-50 inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center px-4 transition-all duration-300 ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

                <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 md:p-8 transition-all duration-300 max-h-[90vh] overflow-y-auto ${showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-6">

                            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest">
                                Application
                            </p>

                            <h2 className="text-2xl font-bold mt-1">
                                {editId ? "Edit Job" : "Add Job"}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                {editId
                                    ? "Update the details of this application."
                                    : "Add the details of a new job application."
                                }
                            </p>

                        </div>


                        <div className="space-y-4">

                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Company
                                </label>

                                <input
                                    name="company"
                                    placeholder="Company name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="border border-gray-200 rounded-xl w-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                    required
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Role
                                </label>

                                <input
                                    name="role"
                                    placeholder="Job role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="border border-gray-200 rounded-xl w-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                    required
                                />

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Status
                                </label>

                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="border border-gray-200 rounded-xl w-full px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                >
                                    <option value="">Select Status</option>
                                    <option value="Applied">Applied</option>
                                    <option value="Interviewing">Interviewing</option>
                                    <option value="Offer">Offer</option>
                                    <option value="Rejected">Rejected</option>
                                </select>

                            </div>


                            <div className="grid sm:grid-cols-2 gap-4">

                                <div>

                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Location
                                    </label>

                                    <input
                                        name="location"
                                        placeholder="Location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="border border-gray-200 rounded-xl w-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                    />

                                </div>


                                <div>

                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Salary
                                    </label>

                                    <input
                                        name="salary"
                                        placeholder="Salary"
                                        value={formData.salary}
                                        onChange={handleChange}
                                        className="border border-gray-200 rounded-xl w-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                    />

                                </div>

                            </div>


                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Job Application Link
                                </label>

                                <input
                                    name="link"
                                    placeholder="https://..."
                                    value={formData.link}
                                    onChange={handleChange}
                                    className="border border-gray-200 rounded-xl w-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                />

                            </div>


                            {formData.link && (
                                <div>

                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Link Title
                                    </label>

                                    <input
                                        name="linkTitle"
                                        placeholder="e.g. LinkedIn Job Posting"
                                        value={formData.linkTitle}
                                        onChange={handleChange}
                                        className="border border-gray-200 rounded-xl w-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                                    />

                                </div>
                            )}

                        </div>


                        <div className="flex gap-3 mt-7">

                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-blue-700 hover:shadow-md transition"
                            >
                                {editId ? "Update Job" : "Add Job"}
                            </button>

                            <button
                                type="button"
                                onClick={handleCancel}
                                className="px-5 py-2.5 border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                </div>

            </div>


            {/* Job Grid */}
            <main className="max-w-6xl mx-auto px-4 pb-8">

                {jobs.length > 0 ? (

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {jobs.map((job, index) => (

                            <div
                                key={job._id}
                                style={{
                                    animationDelay: `${index * 50}ms`
                                }}
                                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 flex flex-col justify-between"
                            >

                                <div>

                                    <div className="flex justify-between items-start gap-3">

                                        <div className="min-w-0">

                                            <h2 className="text-lg font-semibold text-gray-900 truncate">
                                                {job.role}
                                            </h2>

                                            <p className="text-gray-500 text-sm truncate">
                                                {job.company}
                                            </p>

                                        </div>


                                        <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${getStatusColor(job.status)}`}>
                                            {job.status}
                                        </span>

                                    </div>


                                    <div className="border-t border-gray-100 my-4"></div>


                                    <div className="space-y-2 text-sm text-gray-700">

                                        <p className="flex items-center gap-1.5">
                                            <MapPin size={15} className="shrink-0 text-gray-500" />
                                            <span className="font-medium">
                                                Location:
                                            </span>{" "}
                                            {job.location || "Not specified"}
                                        </p>

                                        <p className="flex items-center gap-1.5">
                                            <Banknote size={15} className="shrink-0 text-gray-500" />
                                            <span className="font-medium">
                                                Salary:
                                            </span>{" "}
                                            {job.salary || "Not specified"}
                                        </p>

                                    </div>

                                </div>


                                <div className="flex justify-between items-center gap-2 mt-5">

                                    {job.link ? (

                                        <a
                                            href={job.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-sm px-3 py-1.5 border border-blue-200 rounded-lg text-blue-600 hover:bg-blue-50 transition truncate max-w-[120px]"
                                        >
                                            <ExternalLink size={15} className="shrink-0" />
                                            <span className="truncate">
                                                {job.linkTitle || "View Job"}
                                            </span>
                                        </a>

                                    ) : (

                                        <span></span>

                                    )}


                                    <div className="flex gap-2 ml-auto">

                                        <button
                                            onClick={() => handleEdit(job)}
                                            className="flex items-center gap-1.5 text-sm border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
                                        >
                                            <Pencil size={15} />
                                            Edit
                                        </button>

                                        <button
                                            className="flex items-center gap-1.5 text-sm border border-red-200 px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50 transition"
                                            onClick={() => handleDelete(job._id)}
                                        >
                                            <Trash2 size={15} />
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-md text-center py-16 px-6">

                        <div className="flex justify-center mb-4">
                            <ClipboardList size={40} className="text-gray-400" />
                        </div>

                        <h2 className="text-xl font-semibold">
                            No applications found
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Try changing your search or filters, or add a new application.
                        </p>

                    </div>

                )}

            </main>


            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 pb-28">

                <button
                    onClick={() => setPage((prev) => prev - 1)}
                    disabled={page === 1}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm disabled:opacity-40 hover:bg-gray-50 transition"
                >
                    <ChevronLeft size={18} />
                    Prev
                </button>


                <span className="font-medium text-gray-700 px-2">
                    Page {page} of {totalPages}
                </span>


                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={page === totalPages}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm disabled:opacity-40 hover:bg-gray-50 transition"
                >
                    Next
                    <ChevronRight size={18} />
                </button>

            </div>


            {/* Floating Action Button */}
            <abbr title="Click to Add Job">

                <button
                    onClick={() => setShowModal((prev) => !prev)}
                    className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition duration-300 hover:scale-105 z-40"
                >
                    <FilePlusCorner size={30} />
                </button>

            </abbr>

        </div>
    );
}