function AuthGraphic() {
    return (
        <div className="relative flex flex-col justify-center items-center text-center w-full h-full overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

            {/* Background radiant glow */}
            <div className="absolute w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl -top-40 -left-40"></div>

            <div className="absolute w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl -bottom-40 -right-40"></div>

            <div className="absolute w-[350px] h-[350px] bg-pink-200/30 rounded-full blur-3xl top-1/3 left-1/3"></div>


            {/* Branding */}
            <div className="relative z-10">

                <h1 className="text-6xl font-bold text-blue-600">
                    DevHire
                </h1>

                <p className="mt-4 text-xl text-gray-600">
                    Take control of your job search.
                </p>

            </div>


            {/* Application cards */}
            <div className="relative z-10 mt-14 w-full max-w-lg h-52">


                {/* Google */}
                <div className="absolute left-8 top-2 w-64 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 text-left rotate-[-4deg]">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="font-semibold">
                                Frontend Developer
                            </p>

                            <p className="text-sm text-gray-500">
                                Google
                            </p>
                        </div>

                        <span className="text-sm font-medium text-teal-600">
                            Applied
                        </span>

                    </div>

                </div>


                {/* Microsoft */}
                <div className="absolute right-8 top-24 w-64 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 text-left rotate-[3deg]">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="font-semibold">
                                Backend Developer
                            </p>

                            <p className="text-sm text-gray-500">
                                Microsoft
                            </p>
                        </div>

                        <span className="text-sm font-medium text-blue-600">
                            Interview
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AuthGraphic;