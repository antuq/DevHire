import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900">

            {/* Background glows */}
            <div className="fixed w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl -top-40 -left-40 pointer-events-none"></div>
            <div className="fixed w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl top-1/3 -right-40 pointer-events-none"></div>
            <div className="fixed w-[450px] h-[450px] bg-pink-200/20 rounded-full blur-3xl bottom-0 left-1/3 pointer-events-none"></div>


            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-8 pb-20">

                <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

                    {/* Hero Text */}
                    <div className="text-center lg:text-left">

                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">
                            Your job search, organised.
                        </p>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900">
                            Take control of your
                            <span className="text-blue-600"> job search.</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Keep track of your applications, monitor your progress,
                            and stay organised throughout your job hunt with DevHire.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                            <Link
                                to="/register"
                                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                            >
                                Get Started
                            </Link>

                            <Link
                                to="/help"
                                className="px-6 py-3 rounded-xl bg-white/80 border border-gray-200 text-gray-700 font-medium shadow-sm hover:bg-white hover:shadow-md transition"
                            >
                                Learn More
                            </Link>

                        </div>

                    </div>


                    {/* Hero Application Cards */}
                    <div className="relative h-[420px] w-full max-w-lg mx-auto">

                        {/* Google */}
                        <div className="absolute left-0 top-8 w-72 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 text-left rotate-[-4deg] border border-gray-100">

                            <div className="flex justify-between items-start">

                                <div>

                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Frontend Developer
                                    </h2>

                                    <p className="text-gray-500 text-sm">
                                        Google
                                    </p>

                                </div>

                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                                    Applied
                                </span>

                            </div>

                            <div className="border-t my-4"></div>

                            <div className="space-y-1 text-sm text-gray-700">

                                <p>
                                    <span className="font-medium">📍 Location:</span>{" "}
                                    Bangalore
                                </p>

                                <p>
                                    <span className="font-medium">💰 Salary:</span>{" "}
                                    ₹12 LPA
                                </p>

                            </div>

                            <div className="flex justify-between items-center mt-4">

                                <span className="text-sm px-3 py-1 border border-blue-200 rounded-md text-blue-600">
                                    🔗 View Job
                                </span>

                                <span className="text-sm border px-3 py-1 rounded-md text-gray-600">
                                    ✏️ Edit
                                </span>

                            </div>

                        </div>


                        {/* Microsoft */}
                        <div className="absolute right-0 top-32 w-72 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 text-left rotate-[3deg] border border-gray-100">

                            <div className="flex justify-between items-start">

                                <div>

                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Backend Developer
                                    </h2>

                                    <p className="text-gray-500 text-sm">
                                        Microsoft
                                    </p>

                                </div>

                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-600">
                                    Interviewing
                                </span>

                            </div>

                            <div className="border-t my-4"></div>

                            <div className="space-y-1 text-sm text-gray-700">

                                <p>
                                    <span className="font-medium">📍 Location:</span>{" "}
                                    Hyderabad
                                </p>

                                <p>
                                    <span className="font-medium">💰 Salary:</span>{" "}
                                    ₹15 LPA
                                </p>

                            </div>

                            <div className="flex justify-between items-center mt-4">

                                <span className="text-sm px-3 py-1 border border-blue-200 rounded-md text-blue-600">
                                    🔗 View Job
                                </span>

                                <span className="text-sm border px-3 py-1 rounded-md text-gray-600">
                                    ✏️ Edit
                                </span>

                            </div>

                        </div>


                        {/* TechNova */}
                        <div className="absolute left-12 bottom-4 w-72 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 text-left rotate-[-2deg] border border-gray-100">

                            <div className="flex justify-between items-start">

                                <div>

                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Full Stack Developer
                                    </h2>

                                    <p className="text-gray-500 text-sm">
                                        TechNova
                                    </p>

                                </div>

                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                                    Offer
                                </span>

                            </div>

                            <div className="border-t my-4"></div>

                            <div className="space-y-1 text-sm text-gray-700">

                                <p>
                                    <span className="font-medium">📍 Location:</span>{" "}
                                    Mumbai
                                </p>

                                <p>
                                    <span className="font-medium">💰 Salary:</span>{" "}
                                    ₹10 LPA
                                </p>

                            </div>

                            <div className="flex justify-between items-center mt-4">

                                <span className="text-sm px-3 py-1 border border-blue-200 rounded-md text-blue-600">
                                    🔗 View Job
                                </span>

                                <span className="text-sm border px-3 py-1 rounded-md text-gray-600">
                                    ✏️ Edit
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Features Section */}
            <section className="relative z-10 px-6 py-24 bg-white/40">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-14">

                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                            Simple & organised
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Everything you need to manage your applications
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            DevHire keeps the important details of your job search
                            together so you can focus on finding the right opportunity.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Feature 1 */}
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition">

                            <div className="text-3xl mb-5">
                                📋
                            </div>

                            <h3 className="text-xl font-semibold">
                                Track Applications
                            </h3>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                Keep every job application in one place instead of
                                relying on scattered notes, bookmarks, or spreadsheets.
                            </p>

                        </div>


                        {/* Feature 2 */}
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition">

                            <div className="text-3xl mb-5">
                                🗂️
                            </div>

                            <h3 className="text-xl font-semibold">
                                Organise Details
                            </h3>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                Store company names, roles, locations, salary details,
                                links, and notes alongside each application.
                            </p>

                        </div>


                        {/* Feature 3 */}
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition">

                            <div className="text-3xl mb-5">
                                📈
                            </div>

                            <h3 className="text-xl font-semibold">
                                Monitor Progress
                            </h3>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                Quickly see whether an application is still pending,
                                moving towards an interview, rejected, or has resulted
                                in an offer.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* How DevHire Works */}
            <section className="relative z-10 px-6 py-24">

                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-14">

                        <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
                            How it works
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Keep your job search moving
                        </h2>

                    </div>


                    <div className="grid md:grid-cols-3 gap-10">

                        {/* Step 1 */}
                        <div className="text-center">

                            <div className="mx-auto w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                                1
                            </div>

                            <h3 className="text-xl font-semibold mt-5">
                                Add a job
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Save a new opportunity with the important details
                                you want to remember.
                            </p>

                        </div>


                        {/* Step 2 */}
                        <div className="text-center">

                            <div className="mx-auto w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl font-bold">
                                2
                            </div>

                            <h3 className="text-xl font-semibold mt-5">
                                Update your status
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Move applications through different stages as
                                your job search progresses.
                            </p>

                        </div>


                        {/* Step 3 */}
                        <div className="text-center">

                            <div className="mx-auto w-14 h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xl font-bold">
                                3
                            </div>

                            <h3 className="text-xl font-semibold mt-5">
                                Stay on track
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Use your dashboard to keep an overview of where
                                your applications currently stand.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Application Status Section */}
            <section className="relative z-10 px-6 py-24 bg-white/40">

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text */}
                    <div>

                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                            Know where you stand
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Every application has a stage.
                        </h2>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            DevHire makes it easy to see what is happening with
                            your applications at a glance. Update a job whenever
                            something changes and keep your search organised.
                        </p>

                    </div>


                    {/* Status Cards */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="bg-blue-100 text-blue-700 rounded-2xl p-6">

                            <p className="font-semibold">
                                Applied
                            </p>

                            <p className="text-sm mt-1 opacity-80">
                                Application submitted
                            </p>

                        </div>

                        <div className="bg-yellow-100 text-yellow-700 rounded-2xl p-6">

                            <p className="font-semibold">
                                Interviewing
                            </p>

                            <p className="text-sm mt-1 opacity-80">
                                Moving forward
                            </p>

                        </div>

                        <div className="bg-green-100 text-green-700 rounded-2xl p-6">

                            <p className="font-semibold">
                                Offer
                            </p>

                            <p className="text-sm mt-1 opacity-80">
                                Good news!
                            </p>

                        </div>

                        <div className="bg-red-100 text-red-700 rounded-2xl p-6">

                            <p className="font-semibold">
                                Rejected
                            </p>

                            <p className="text-sm mt-1 opacity-80">
                                Time to move on
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA Section */}
            <section className="relative z-10 px-6 py-24">

                <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 px-8 py-16">

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to organise your job search?
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        Start keeping track of your applications and take a
                        clearer view of your progress.
                    </p>

                    <Link
                        to="/register"
                        className="inline-block mt-8 px-7 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                    >
                        Get Started
                    </Link>

                </div>

            </section>


            {/* Footer */}
            <footer className="relative z-10 border-t border-gray-200/70 bg-white/50 px-6 py-8">

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm">
                        © 2026 DevHire. Built to keep your job search organised.
                    </p>

                    <div className="flex gap-6 text-sm text-gray-500">

                        <Link
                            to="/help"
                            className="hover:text-blue-600 transition"
                        >
                            Help
                        </Link>

                        <Link
                            to="/login"
                            className="hover:text-blue-600 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="hover:text-blue-600 transition"
                        >
                            Register
                        </Link>

                    </div>

                </div>

            </footer>

        </div>
    );
}