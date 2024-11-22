import BusinessSidebar from "./sidebar";

const Team = () => {
    return (
        <div>
            <div className="flex mb-[150px]">
                <div className="w-auto border border-r">
                    <BusinessSidebar />
                </div>
                <div className="w-full overflow-x-auto">
                    <div className="px-3 mt-5">
                        <div className="text-center">
                            <p className="text-3xl font-[700]">Active Team Members</p>
                        </div>
                        <div className="text-end mt-10">
                            <button className="font-[600] text-xl px-5 py-2 bg-primary text-white rounded">Add Member</button>
                        </div>
                        <div className="flex justify-between bg-gray-100 items-center pb-3  mt-4 px-3 border-t-2 pt-3  overflow-x-auto">
                            <div className="md:ml-12 pb-1">
                                <div className="flex items-center">
                                    <p className="border rounded-full border border-primary py-2 px-2 mr-3">HM</p>
                                    <div>
                                        <p className="font-[600]">Haseeb Maqsood <span className="bg-[#17a2b8] text-xs rounded-lg ml-2 text-white px-2 py-[1px] font-[600]">Admin</span></p>
                                        <p className="text-sm font-[400]">haseeb.maqsood@collaborak.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:mr-12  text-lg "> <p>Admin</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;