'use client';
import Link from 'next/link';
import { HiOutlineHome } from "react-icons/hi";
import { FiActivity } from "react-icons/fi";
import { usePathname } from 'next/navigation';
import { GoXCircle } from 'react-icons/go';

const LmsSidebar = ({ LeftBar, setLeftBar }) => {

  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={`fixed z-50 top-0 ${LeftBar == true ? 'left-0' : '-left-[215px]'} md:left-0 h-screen shadow-lg bg-white text-gray-700 duration-300 w-[215px] md:w-[70px] md:hover:w-[215px] group overflow-hidden`}>
      {/* Logo */}
      <div className="mt-3 relative">
        <GoXCircle onClick={() => setLeftBar(false)} size={18} className="text-primary block md:hidden absolute right-2 -top-1" />
        <div className="w-10 h-auto absolute top-0 left-[14px] md:block group-hover:hidden">
          <img className="w-full h-auto" src="/images/LmsLogo-h.png" alt="LMS Logo" />
        </div>
        <div className="w-[173px] h-auto absolute -top-[0.35px] left-[14px] md:hidden group-hover:block">
          <img className="w-full h-auto " src="/images/LmsLogo.png" alt="LMS Logo" />
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col justify-center mt-24 space-y-5">
        <SidebarItem
          active={pathname === '/lms/dashboard'}
          href="/lms/dashboard"
          icon={<HiOutlineHome size={20} />}
          label="Dashboard"
        />
        <SidebarItem
          active={pathname === '/lms/progress'}
          href="/lms/progress"
          icon={<FiActivity size={20} />}
          label="Progress"
        />
      </nav>
    </div>
  );
};

const SidebarItem = ({ active, href, icon, label }) => (
  <Link href={href} className={`flex ${active && 'text-primary'} items-center px-6 text-gray-500 hover:text-primary`}>
    <div>{icon}</div>
    <span className={`ml-2 text-sm md:hidden group-hover:block`}>{label}</span>
  </Link>
);

export default LmsSidebar;
