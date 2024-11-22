'use client';
const LmsRightbar = ({ RightBar }) => {

  return (
    <div className={`fixed ${RightBar.desktop == true ? 'right-0' : 'md:-right-[20%]'} ${RightBar.mobile == true ? 'right-0' : '-right-[80%]'} top-0 w-4/5 md:w-1/5 h-screen shadow-lg bg-white text-gray-700 ease-in-out duration-200 overflow-hidden`}>

    </div>
  );
};

export default LmsRightbar;
