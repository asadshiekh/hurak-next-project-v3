// // components/Pagination.js
// import React from 'react'
// import '../pagination/pagination.css'




// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

//   return (
//     <div className="pagination my-3">
//       <button 
//         onClick={() => onPageChange(currentPage - 1)} 
//         disabled={currentPage === 1}>
//         <GrFormPrevious />
//       </button>

//       {pageNumbers.map(page => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={page === currentPage ? 'active' : ''}>
//           {page}
//         </button>
//       ))}

//       <button 
//         onClick={() => onPageChange(currentPage + 1)} 
//         disabled={currentPage === totalPages}>
//         <MdOutlineNavigateNext />
//       </button>
//     </div>
//   );
// };

// export default Pagination;


// components/Pagination.js
import React, { useState, useEffect } from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import './pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [displayPages, setDisplayPages] = useState(10); // Default is 10 for large screens

  // Adjust displayed pages based on screen size
  useEffect(() => {
    const updateDisplayPages = () => {
      if (window.innerWidth < 768) {
        setDisplayPages(2); // Show 2 on medium and small screens
      } else {
        setDisplayPages(10); // Show 10 on large screens
      }
    };

    // Initial setting
    updateDisplayPages();
    window.addEventListener('resize', updateDisplayPages);

    // Clean up the event listener
    return () => window.removeEventListener('resize', updateDisplayPages);
  }, []);

  // Calculate start and end for pagination numbers based on current page
  const startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));
  const endPage = Math.min(totalPages, startPage + displayPages - 1);

  // Generate visible page numbers
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="pagination my-3">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        <GrFormPrevious />
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </button>
      ))}

      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        <MdOutlineNavigateNext />
      </button>
    </div>
  );
};

export default Pagination;
