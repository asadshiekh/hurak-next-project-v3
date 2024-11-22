"use client"
import { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai'; // Import the icon you want to use

const Tooltip = ({ icon, tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="cursor-pointer">{icon}</span> {/* Use the icon prop */}
      
      {showTooltip && (
        <div className="absolute top-8 left-0 w-48 p-2 text-sm text-white bg-black rounded-md shadow-lg">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
