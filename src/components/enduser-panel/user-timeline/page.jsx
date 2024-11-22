const { default: Header } = require("../header")
import { FaArrowLeft } from "react-icons/fa6";
import Link from 'next/link';


const EndUserTimeLine = () => {

    return (
        <div>
            <Header headerText="Course Timeline" />
            <div className='ml-16 lg:ml-auto md:ml-auto m-auto lg:w-3/6 md:w-3/4 w-3/4 my-5 px-4 rounded-tl-lg  mb-10'>
                <Link href="/my-learning"><button className="border flex px-3 py-1 mb-10 text-gray-500 rounded"><FaArrowLeft className="mt-1 mr-1 text-gray-500" /> Back</button></Link>
                <div className="flex mb-3">
                    <div className="w-6 h-6 rounded-full border-gray-400 text-3xl bg-gray-200 text-center relative mr-2">
                        <p className="absolute bottom-1 left-2 text-gray-500">.</p>
                    </div>
                    <button className="text-white px-3 text-sm rounded" style={{ backgroundColor: "#02b6d7" }}>Enrolled</button>
                </div>

                <div className="w-full flex flex-wrap ml-5 pl-3">
                    <div className=" cursor-pointer hover:text-white hover:bg-gray-500 hover:border-gray-500 border border-black mr-2 text-sm px-2 rounded text-gray-500">
                        <p>Traffic Banksman (Traffic Marshal) Training Course - Online</p>
                    </div>
                    <div className="lg:mt-0 md:mt-0 mt-3 cursor-pointer hover:text-white hover:bg-gray-500 hover:border-gray-500 border-black border mr-2 px-3 text-sm rounded text-gray-500">
                        <p>29.99</p>
                    </div>
                    <div className="lg:mt-0 mt-3 cursor-pointer border border-red-600 px-3 text-sm hover:text-white hover:bg-red-500 hover:border-red-500 rounded text-red-500">
                        <p>Saver</p>
                    </div>
                </div>

                <div className="ml-5 pl-3">
                    <p className="text-sm mt-3">Fri Sep 20 2024</p>
                </div>

            </div>
        </div>
    )
}

export default EndUserTimeLine;