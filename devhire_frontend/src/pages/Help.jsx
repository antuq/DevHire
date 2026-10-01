export default function Help() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900">

            {/* Background glows */}
            <div className="fixed w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl -top-40 -left-40 pointer-events-none"></div>

            <div className="fixed w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl top-1/3 -right-40 pointer-events-none"></div>

            <div className="fixed w-[450px] h-[450px] bg-pink-200/20 rounded-full blur-3xl bottom-0 left-1/3 pointer-events-none"></div>


            {/* Header */}
            <section className="relative z-10 px-6 pt-10 pb-10">

                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mt-4">
                        DevHire Help
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                        How can we help?
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to know about using DevHire to keep
                        your job applications organised and your job search on track.
                    </p>

                </div>

            </section>


            {/* Getting Started */}
            <section className="relative z-10 px-6 py-16">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
                            Getting Started
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Start using DevHire in a few simple steps
                        </h2>

                    </div>


                    <div className="grid md:grid-cols-4 gap-6">

                        {/* Step 1 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-7 hover:-translate-y-1 hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                                1
                            </div>

                            <h3 className="text-lg font-semibold mt-5">
                                Create an account
                            </h3>

                            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                Register your DevHire account to get started
                                with managing your applications.
                            </p>

                        </div>


                        {/* Step 2 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-7 hover:-translate-y-1 hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl font-bold">
                                2
                            </div>

                            <h3 className="text-lg font-semibold mt-5">
                                Add a job
                            </h3>

                            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                Add the company, role, status, location,
                                salary, and other useful information.
                            </p>

                        </div>


                        {/* Step 3 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-7 hover:-translate-y-1 hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-xl font-bold">
                                3
                            </div>

                            <h3 className="text-lg font-semibold mt-5">
                                Update applications
                            </h3>

                            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                Change an application's status as you move
                                through the hiring process.
                            </p>

                        </div>


                        {/* Step 4 */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100 p-7 hover:-translate-y-1 hover:shadow-xl transition">

                            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl font-bold">
                                4
                            </div>

                            <h3 className="text-lg font-semibold mt-5">
                                Stay organised
                            </h3>

                            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                Use your dashboard to keep track of all your
                                applications in one place.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Application Status */}
            <section className="relative z-10 px-6 py-20 bg-white/40">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                            Application Status
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Understand your application stages
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Keep your application status updated so you can
                            quickly understand where each opportunity stands.
                        </p>

                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Applied */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-xl transition">

                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                                Applied
                            </span>

                            <h3 className="text-lg font-semibold mt-5">
                                Application submitted
                            </h3>

                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                You've submitted your application and are
                                waiting for the next step.
                            </p>

                        </div>


                        {/* Interviewing */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-xl transition">

                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-600">
                                Interviewing
                            </span>

                            <h3 className="text-lg font-semibold mt-5">
                                Moving forward
                            </h3>

                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                The company has progressed you to the
                                interview stage.
                            </p>

                        </div>


                        {/* Offer */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-xl transition">

                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                                Offer
                            </span>

                            <h3 className="text-lg font-semibold mt-5">
                                Good news!
                            </h3>

                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                You've received an offer for the position.
                            </p>

                        </div>


                        {/* Rejected */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-xl transition">

                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-600">
                                Rejected
                            </span>

                            <h3 className="text-lg font-semibold mt-5">
                                Time to move on
                            </h3>

                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                The application didn't work out, but you
                                can continue tracking other opportunities.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Managing Applications */}
            <section className="relative z-10 px-6 py-20">

                <div className="max-w-6xl mx-auto">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Text */}
                        <div>

                            <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
                                Managing Applications
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mt-3">
                                Keep every important detail together
                            </h2>

                            <p className="mt-5 text-gray-600 leading-relaxed">
                                Each application can store the information you
                                need to remember throughout your job search.
                                You can return to it and update the details
                                whenever something changes.
                            </p>

                        </div>


                        {/* Details */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8">

                            <div className="space-y-6">

                                <div className="flex gap-4">

                                    <div className="text-xl w-7 shrink-0 text-center">
                                        🏢
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Company & Role
                                        </h3>

                                        <p className="text-sm text-gray-600 mt-1">
                                            Keep track of which company and
                                            position you applied for.
                                        </p>
                                    </div>

                                </div>


                                <div className="flex gap-4">

                                    <div className="text-xl w-7 shrink-0 text-center">
                                        📍
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Location & Salary
                                        </h3>

                                        <p className="text-sm text-gray-600 mt-1">
                                            Save useful information about the
                                            opportunity for easy reference.
                                        </p>
                                    </div>

                                </div>


                                <div className="flex gap-4">

                                    <div className="text-xl w-7 shrink-0 text-center">
                                        🔗
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Job Link
                                        </h3>

                                        <p className="text-sm text-gray-600 mt-1">
                                            Save the original job posting so
                                            you can return to it later.
                                        </p>
                                    </div>

                                </div>


                                <div className="flex gap-4">

                                    <div className="text-xl w-7 shrink-0 text-center">
                                        ✏️
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            Edit Anytime
                                        </h3>

                                        <p className="text-sm text-gray-600 mt-1">
                                            Update your application whenever
                                            its details or status changes.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


            {/* FAQ */}
            <section className="relative z-10 px-6 py-20 bg-white/40">

                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="text-pink-600 font-semibold text-sm uppercase tracking-widest">
                            Frequently Asked Questions
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Common questions
                        </h2>

                    </div>


                    <div className="space-y-4">

                        {/* FAQ 1 */}
                        <div className="bg-white/90 rounded-2xl shadow-sm border border-gray-100 p-6">

                            <h3 className="font-semibold text-lg">
                                How do I add a new job application?
                            </h3>

                            <p className="text-gray-600 mt-2 leading-relaxed">
                                Open your Dashboard and use the Add Job option
                                to enter the details of the opportunity.
                            </p>

                        </div>


                        {/* FAQ 2 */}
                        <div className="bg-white/90 rounded-2xl shadow-sm border border-gray-100 p-6">

                            <h3 className="font-semibold text-lg">
                                Can I edit an application after adding it?
                            </h3>

                            <p className="text-gray-600 mt-2 leading-relaxed">
                                Yes. Use the Edit option on an application card
                                to update its details or change its status.
                            </p>

                        </div>


                        {/* FAQ 3 */}
                        <div className="bg-white/90 rounded-2xl shadow-sm border border-gray-100 p-6">

                            <h3 className="font-semibold text-lg">
                                Can I save the job posting link?
                            </h3>

                            <p className="text-gray-600 mt-2 leading-relaxed">
                                Yes. You can add a job link and an optional
                                title when creating or editing an application.
                            </p>

                        </div>


                        {/* FAQ 4 */}
                        <div className="bg-white/90 rounded-2xl shadow-sm border border-gray-100 p-6">

                            <h3 className="font-semibold text-lg">
                                What happens when I delete an application?
                            </h3>

                            <p className="text-gray-600 mt-2 leading-relaxed">
                                The application is removed from your dashboard.
                                DevHire asks you to confirm before deleting it.
                            </p>

                        </div>


                        {/* FAQ 5 */}
                        <div className="bg-white/90 rounded-2xl shadow-sm border border-gray-100 p-6">

                            <h3 className="font-semibold text-lg">
                                What do the different statuses mean?
                            </h3>

                            <p className="text-gray-600 mt-2 leading-relaxed">
                                Applied means you've submitted an application,
                                Interviewing means you've progressed to interviews,
                                Offer means you've received an offer, and Rejected
                                means the application is no longer active.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="relative z-10 px-6 py-24">

                <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 px-8 py-16">

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to get organised?
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                        Head over to your dashboard and start keeping track
                        of your job applications.
                    </p>

                    <a
                        href="/dashboard"
                        className="inline-block mt-8 px-7 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition"
                    >
                        Go to Dashboard
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
                            href="/login"
                            className="hover:text-blue-600 transition"
                        >
                            Login
                        </a>

                        <a
                            href="/register"
                            className="hover:text-blue-600 transition"
                        >
                            Register
                        </a>

                    </div>

                </div>

            </footer>

        </div>
    );
}