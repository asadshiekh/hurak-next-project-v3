// import React from 'react'

import { PiHandWavingFill } from "react-icons/pi";

const Dashboard = () => {
  return (
    <div className="bg-black rounded-xl shadow-xl shadow-black/20 py-4 px-6">
      <div className="flex items-center space-x-2 mb-0.5">
        <PiHandWavingFill size={20} className="text-[#FFD700]" />
        <p className='text-xs font-light text-white'>Welcome back to your course</p>
      </div>
      <h1 className='text-3xl font-light text-white'>Fire Marshal (Fire Warden) Course</h1>
    </div>
  )
}

export default Dashboard;