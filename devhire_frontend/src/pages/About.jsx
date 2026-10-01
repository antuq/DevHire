export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900">

            {/* Background glows */}
            <div className="fixed w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl -top-40 -left-40 pointer-events-none"></div>

            <div className="fixed w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl top-1/3 -right-40 pointer-events-none"></div>

            <div className="fixed w-[450px] h-[450px] bg-pink-200/20 rounded-full blur-3xl bottom-0 left-1/3 pointer-events-none"></div>


            {/* Hero */}
            <section className="relative z-10 px-6 pt-16 pb-20">

                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                        About DevHire
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mt-3">
                        A simpler way to manage your job search.
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        DevHire is a simple job application tracker designed to
                        help you organise your applications, keep important
                        details together, and stay aware of your progress.
                    </p>

                </div>

            </section>


            {/* Why DevHire */}
            <section className="relative z-10 px-6 py-20 bg-white/40">

                <div className="max-w-6xl mx-auto">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Text */}
                        <div>

                            <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
                                The idea behind DevHire
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mt-3">
                                Keep your job search in one place.
                            </h2>

                            <p className="mt-5 text-gray-600 leading-relaxed">
                                Searching for a job often means keeping track of
                                applications across different websites, notes,
                                bookmarks, spreadsheets, and messages.
                            </p>

                            <p className="mt-4 text-gray-600 leading-relaxed">
                                DevHire brings the important information together
                                in one organised space, making it easier to see
                                what you've applied for and what needs your
                                attention next.
                            </p>

                        </div>


                        {/* Visual Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8">

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                                    📋
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold">
                                        One organised workspace
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        Your applications, details and progress.
                                    </p>
                                </div>

                            </div>

                            <div className="border-t border-gray-100 my-7"></div>

                            <div className="space-y-5">

                                <div className="flex items-center gap-4">

                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                        🔎
                                    </div>

                                    <div>
                                        <p className="font-medium">
                                            Find applications quickly
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            Search and filter your applications.
                                        </p>
                                    </div>

                                </div>


                                <div className="flex items-center gap-4">

                                    <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                                        🗂️
                                    </div>

                                    <div>
                                        <p className="font-medium">
                                            Keep details together
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            Store useful information for every job.
                                        </p>
                                    </div>

                                </div>


                                <div className="flex items-center gap-4">

                                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                        📈
                                    </div>

                                    <div>
                                        <p className="font-medium">
                                            Monitor progress
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            Know where each application stands.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Features */}
            <section className="relative z-10 px-6 py-24">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-14">

                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                            What DevHire offers
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Everything you need to stay organised
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            DevHire focuses on the essential parts of managing
                            a job search without making the process complicated.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Feature 1 */}
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                                📋
                            </div>

                            <h3 className="text-xl font-semibold mt-5">
                                Track Applications
                            </h3>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                Keep your job applications together and
                                quickly see what opportunities are currently
                                in your pipeline.
                            </p>

                        </div>


                        {/* Feature 2 */}
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl">
                                🗂️
                            </div>

                            <h3 className="text-xl font-semibold mt-5">
                                Organise Details
                            </h3>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                Store company names, roles, locations, salary,
                                job links, and notes alongside each application.
                            </p>

                        </div>


                        {/* Feature 3 */}
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
                                📊
                            </div>

                            <h3 className="text-xl font-semibold mt-5">
                                Monitor Progress
                            </h3>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                Update application statuses as your job search
                                progresses from application to interview,
                                offer, or rejection.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Simple by Design */}
            <section className="relative z-10 px-6 py-24 bg-white/40">

                <div className="max-w-5xl mx-auto">

                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 px-8 py-12 md:px-14 text-center">

                        <p className="text-pink-600 font-semibold text-sm uppercase tracking-widest">
                            Simple by design
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Focus on the job search, not the paperwork.
                        </h2>

                        <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            DevHire is designed around a straightforward idea:
                            managing applications should be simple. Instead of
                            adding unnecessary complexity, DevHire focuses on
                            giving you a clear overview of your applications
                            and the information that matters.
                        </p>

                    </div>

                </div>

            </section>


            {/* Project Features */}
            <section className="relative z-10 px-6 py-24">

                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-14">

                        <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
                            Built for organisation
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            A clear view of your applications
                        </h2>

                    </div>


                    <div className="grid sm:grid-cols-2 gap-6">

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-7">

                            <h3 className="text-lg font-semibold">
                                🔎 Search & Filter
                            </h3>

                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                Quickly find applications by searching through
                                relevant job details or filtering by status.
                            </p>

                        </div>


                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-7">

                            <h3 className="text-lg font-semibold">
                                ✏️ Update Anytime
                            </h3>

                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                Edit application details or change their status
                                whenever something changes.
                            </p>

                        </div>


                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-7">

                            <h3 className="text-lg font-semibold">
                                🔗 Save Job Links
                            </h3>

                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                Keep the original job posting link alongside
                                the application for easy reference.
                            </p>

                        </div>


                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-7">

                            <h3 className="text-lg font-semibold">
                                🔐 Secure Accounts
                            </h3>

                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                User accounts are protected with authentication
                                so your applications remain associated with
                                your own account.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="relative z-10 px-6 py-24">

                <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 px-8 py-16">

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to organise your job search?
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        Start tracking your applications and keep your job
                        search organised with DevHire.
                    </p>

                    <a
                        href="/register"
                        className="inline-block mt-8 px-7 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                    >
                        Get Started
                    </a>

                </div>

            </section>


            {/* Footer */}
            <footer className="relative z-10 border-t border-gray-200/70 bg-white/50 px-6 py-8">

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm">
                        © 2026 DevHire. Built to keep your job search organised.
                    </p>

                    <div className="flex gap-6 text-sm text-gray-500">

                        <a
                            href="/"
                            className="hover:text-blue-600 transition"
                        >
                            Home
                        </a>

                        <a
                            href="/help"
                            className="hover:text-blue-600 transition"
                        >
                            Help
                        </a>

                        <a
                            href="/login"
                            className="hover:text-blue-600 transition"
                        >
                            Login
                        </a>

                    </div>

                </div>

            </footer>

        </div>
    );
}