import BusinessSidebar from "./sidebar";


const BusinessLearnerReports = () => {
    return (
        <div>
            <div className="flex mb-[150px]">
                <div className="w-auto border border-r ">
                    <BusinessSidebar />
                </div>
                <div className="w-full overflow-x-auto lg:overflow-hidden">
                    <div className="px-3 mt-5">
                        <div className="text-center">
                            <p className="text-3xl font-[700]"> Learner Progress Report</p>
                        </div>
                        <div className="md:px-8 mt-4">
                            <p className="text-lg font-[500]">Learner Details</p>
                            <div className="md:px-2">
                                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-6 ">
                                    <div>
                                        <div className="flex items-center md:flex-nowrap flex-wrap">
                                            <div className="lg:w-[200px] md:w-[30%] w-full">
                                                <p className="font-[500] text-lg">First Name</p>
                                            </div>
                                            <div className="text-lg">
                                                <p>haseeb</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center md:flex-nowrap flex-wrap">
                                            <div className="lg:w-[20%] md:w-[40%] w-full">
                                                <p className="font-[500] text-lg">Course</p>
                                            </div>
                                            <div className=" text-lg">
                                                <p>Traffic Banksman (Traffic Marshal) Training Course</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-5">
                                    <div>
                                        <div className="flex items-center md:flex-nowrap flex-wrap">
                                            <div className="lg:w-[200px] md:w-[30%] w-full">
                                                <p className="font-[500] text-lg">Last Name</p>
                                            </div>
                                            <div className=" text-lg">
                                                <p>ali</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center md:flex-nowrap flex-wrap">
                                            <div className="lg:w-[20%] md:w-[30%] w-full">
                                                <p className="font-[500] text-lg">Category</p>
                                            </div>
                                            <div className=" text-lg">
                                                <p>First Aid</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-5 ">
                                    <div>
                                        <div className="flex md:flex-nowrap flex-wrap items-center">
                                            <div className="lg:w-[200px] md:w-[30%] w-full">
                                                <p className="font-[500] text-lg">Email</p>
                                            </div>
                                            <div className=" text-lg ">
                                                <p>haseeb.maqsood@collaborak.com </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-5">
                                    <div>
                                        <div className="flex items-center md:flex-nowrap flex-wrap">
                                            <div className="lg:w-[200px] md:w-[30%] w-full">
                                                <p className="font-[500] text-lg">Number</p>
                                            </div>
                                            <div className=" text-lg">
                                                <p>7654365433</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <p className="font-[500] text-lg mt-10 mb-4 ">General Progress</p>
                            <div className="text-center rounded-full leading-5 h-[20px] w-full border bg-[#d1ecf1] text-[#185478] font-[500]" >
                                <span className="pb-2">100%</span>
                            </div>

                            <div>
                                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 mt-5">
                                    <div className="text-[#155724] bg-[#d4edda] border-[#c3e6cb] text-center font-[700] text-2xl py-5 rounded">
                                        <p>Units</p>
                                        <p className="pt-5">4</p>
                                    </div>
                                    <div className="text-[#856404] bg-[#fff3cd] border-[#ffeeba] text-center font-[700] text-2xl py-5 rounded">
                                        <p>Assignments</p>
                                        <p className="pt-5">1</p>
                                    </div>
                                    <div className="text-[#004085] bg-[#cce5ff] border-[#b8daff] text-center font-[700] text-2xl py-5 rounded">
                                        <p>Quiz</p>
                                        <p className="pt-5">1</p>
                                    </div>
                                </div>
                                <div className="border mt-5">
                                    <p className="text-xl px-5 pb-2 border-b-2">Course Enrolment</p>
                                    <p className="pl-3  font-[500] text-lg border-b pb-3">Text activity report</p>
                                    <div className="flex justify-between items-baseline border-b mb-2 pb-2">
                                        <div>
                                            <p className="text-xl px-5 pb-2 mt-2">Scorm activity report </p>
                                            <p className="pl-3 pt-10 font-[500] text-lg">Introduction</p>
                                        </div>
                                        <button className="px-1 mt-5 mr-5 bg-[#28a745] text-white py-0 rounded text-md font-[600]">Completed</button>
                                    </div>

                                    <p className="text-xl px-5 pb-2 border-b-2 ">Course Modules</p>
                                    <p className="pl-3  font-[500] text-lg border-b pb-3">Scorm activity report</p>
                                    <div className="flex justify-between items-baseline border-b pb-2">
                                        <div className="">
                                            <p className="text-xl px-5 pb-2 mt-2">Introduction </p>
                                            <p className="pl-3 pt-10 font-[500] text-lg ">Scorm activity report</p>
                                        </div>
                                        <button className="px-1 mt-5 mr-5 bg-[#28a745] text-white py-0 rounded text-md font-[600]">Completed</button>
                                    </div>
                                    <div className="overflow-x-auto mb-10 mt-10">
                                        <table className="min-w-full bg-white ">
                                            <thead>
                                                <tr className=" text-left text-gray-600 text-lg border-b-2 border-[#dee2e6]">
                                                    <th className="py-2 px-5 border-b">Assignment title</th>
                                                    <th className="py-2 px-4 border-b">Attempts</th>
                                                    <th className="py-2 px-4 border-b">Status</th>
                                                    <th className="py-2 px-4 border-b">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {orders.map((order, index) => ( */}

                                                <tr className="text-sm text-gray-700 even:#ECECEC border-b border-[#dee2e6] odd:bg-[white] hover:bg-[#ECECEC]">
                                                    <td className="py-2 px-5"><p className="text-lg font-[500]">New Assignment</p></td>
                                                    <td className="py-2 px-4 ">
                                                        <button className="text-lg px-1 bg-white font-[600] rounded"></button>
                                                    </td>

                                                    <td className="py-2 px-4 ">
                                                        <button className="shadow-2xl px-1 bg-gray-500 px-2 font-[600] rounded text-white text-sm">Unchecked</button>
                                                    </td>
                                                </tr>

                                                {/* ))} */}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <p className="mt-10 px-5 text-lg pb-2 border-b font-[500]">Course Exam</p>
                                        <p className="text-md pl-3 pb-2 pt-2 border-b">Quiz report</p>
                                        <div className="overflow-x-auto mb-10">
                                            <table className="min-w-full bg-white ">
                                                <thead>
                                                    <tr className=" text-left text-gray-600 uppercase text-sm border-b-2 border-[#dee2e6]">
                                                        <th className="py-2 px-5 border-b">Quiz title</th>
                                                        <th className="py-2 px-4 border-b">Attempts</th>
                                                        <th className="py-2 px-4 border-b">Required %</th>
                                                        <th className="py-2 px-4 border-b">Get %</th>
                                                        <th className="py-2 px-4 border-b">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* {orders.map((order, index) => ( */}
                                                    <tr className="text-sm text-gray-700 even:#ECECEC border-b border-[#dee2e6] odd:bg-[white] hover:bg-[#ECECEC]">
                                                        <td className="py-2 px-4 ">
                                                            <button className="text-lg px-1 bg-white font-[600] rounded">Traffic (Banksman) Marshal Assessment</button>
                                                        </td>
                                                        <td className="py-2 px-4 ">
                                                            <p className="text-lg">Total attempts: Unlimited</p>
                                                        </td>
                                                        <td className="py-2 px-4 ">

                                                        </td>
                                                        <td className="py-2 px-4 "></td>
                                                        <td className="py-2 px-4 ">
                                                        </td>
                                                    </tr>
                                                    <tr className="text-sm text-gray-700 even:#ECECEC border-b border-[#dee2e6] odd:bg-[white] hover:bg-[#ECECEC]">
                                                        <td className="py-2 px-4 ">
                                                            <button className="text-lg px-1 bg-white font-[600] rounded"></button>
                                                        </td>
                                                        <td className="py-2 px-4 ">
                                                            <p className="text-lg">1</p>
                                                        </td>
                                                        <td className="py-2 px-4 ">
                                                            <p className="text-lg">2</p>
                                                        </td>
                                                        <td className="py-2 px-4"><p className="text-lg">0</p></td>
                                                        <td className="py-2 px-4 ">
                                                            <button className="shadow-2xl px-1 bg-[#28a745] px-2 font-[600] rounded text-white text-sm">Pass</button>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-sm text-gray-700 even:#ECECEC border-b border-[#dee2e6] odd:bg-[white] hover:bg-[#ECECEC]">
                                                        <td className="py-2 px-4 ">
                                                            <button className="text-lg px-1 bg-white font-[600] rounded"></button>
                                                        </td>
                                                        <td className="py-2 px-4 ">
                                                            <p className="text-lg">1</p>
                                                        </td>
                                                        <td className="py-2 px-4 ">
                                                            <p className="text-lg">2</p>
                                                        </td>
                                                        <td className="py-2 px-4"><p className="text-lg">0</p></td>
                                                        <td className="py-2 px-4 ">
                                                            <button className="shadow-2xl px-1 bg-red-500 font-[600] px-2 rounded text-white text-sm">Fail</button>
                                                        </td>
                                                    </tr>
                                                    {/* ))} */}
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mt-10 px-3 text-lg pb-2 border-b font-[500]">Video activity report</p>
                                        <p className="text-md pl-5 pb-2 pt-2 border-b mb-5">videos</p>

                                        <p className="mt-10 px-5 text-lg pb-2 border-b font-[500]">Course Certificate</p>
                                        <p className="text-md pl-3 pb-2 pt-2 border-b">Certificate activity report<span><button className="px-1 mt-5 mr-5 bg-gray-500 text-white py-0 rounded text-sm font-[600] ml-3">Custom</button></span></p>
                                        <p className="mt-3 px-5 text-lg pb-16 border-b">Traffic (Banksman) Marshal Certificate</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessLearnerReports;