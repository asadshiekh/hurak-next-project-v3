'use client'
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './Dropdown';
import { BsCartDash } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import PricingHeaderSmallScreen from './PricingHeaderSmallScreen';
import AccountSwitch from './AccountSwitcher';
import { usePathname } from 'next/navigation';
import ButtonInverseFill from './butttons/ButtonInverseFill';
import '@/../public/css/global/SearchScrollbar.css';
import { useState } from 'react';
export default function Navbar() {
  const pathname = usePathname();
  const [SearchQuery, setSearchQuery] = useState(null);
  const cartItems = [
    { image: '/images/sia-card.webp', name: 'Emergency First Aid at Work (EFAW)', price: 89, quantity: 2, package: 'Saver' },
    { image: '/images/aa.webp', name: 'SIA Top-Up Training For Door Supervisors', price: 89, quantity: 2, package: 'Saver' },
  ]
  const SearchItems = [
    { type: 'course', image: '/images/sia-card.webp', name: 'Emergency First Aid at Work (EFAW)', category: 'First Aid', provider: 'Hurak Training' },
    { type: 'course', image: '/images/aa.webp', name: 'SIA Top-Up Training For Door Supervisors', category: 'Security', provider: 'Hurak Training' },
    { type: 'course', image: '/images/course-image2.webp', name: 'Traffic Banksman (Traffic Marshal) Training Course', category: 'Health and Safety', provider: '16 course providers' },
    { type: 'course', image: '/images/featured_image.webp', name: 'Level 2 NVQ Diploma in Associated Industrial Services Occupations – Passive Fire Protection (Construction)', category: 'Construction', provider: 'Hurak Training' },
    { type: 'course', image: '/images/aa.webp', name: 'SIA Top-Up Training For Door Supervisors', category: 'Security', provider: 'Hurak Training' },
    { type: 'course', image: '/images/course-image2.webp', name: 'Traffic Banksman (Traffic Marshal) Training Course', category: 'Health and Safety', provider: '16 course providers' },
    { type: 'provider', image: '/images/hurak-learning-logo.png', name: 'Hurak Learning', category: '', provider: '' },
    { type: 'provider', image: '/images/tutorak-logo.png', name: 'Tutorak', category: '', provider: '' },
  ];

  return (
    <nav className="w-full bg-white border-b">
      <div className="lg:flex justify-between items-center px-4 py-4 hidden">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/hurak-logo.webp"
              alt="Logo"
              width={100}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-10 ml-8 mr-3 text-medium">
          <Dropdown
            label="Courses"
            links={[
              {
                label: 'Business Management',
                href: '/course',
                cat_id: '1',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'IT & Software',
                href: '/course',
                cat_id: '2',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Health & Safety',
                href: '/course',
                cat_id: '3',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Design & Creativity',
                href: '/course',
                cat_id: '4',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Finance & Accounting',
                href: '/course',
                cat_id: '5',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Marketing',
                href: '/course',
                cat_id: '6',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Language Learning',
                href: '/course',
                cat_id: '7',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Personal Development',
                href: '/course',
                cat_id: '8',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Data Analysis',
                href: '/course',
                cat_id: '9',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Environmental Science',
                href: '/course',
                cat_id: '10',
                subLinks: [
                  {}
                ],
              },
            ]}
            SecondLevelLinks={[

              { cat_id: '1', label: 'Leadership', href: '/course', sub_cat_id: '1' },
              { cat_id: '1', label: 'Marketing', href: '/course', sub_cat_id: '2' },
              { cat_id: '2', label: 'Project Management', href: '/course', sub_cat_id: '3' },
              { cat_id: '4', label: 'Human Resources', href: '/course', sub_cat_id: '4' },
            ]}
            ThirdLevelLinks={[

              { sub_cat_id: '1', label: 'Leadership', href: '/course', course_id: '1' },
              { sub_cat_id: '1', label: 'Marketing', href: '/course', course_id: '2' },
              { sub_cat_id: '2', label: 'Project Management', href: '/course', course_id: '3' },
              { sub_cat_id: '4', label: 'Human Resources', href: '/course', course_id: '4' },
            ]}

          />
          <Dropdown
            label="Licences"
            links={[
              {
                label: 'CSCS Card',
                href: '',
                cat_id: '1',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Personal Licence',
                href: '',
                cat_id: '2',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Security Licence',
                href: '',
                cat_id: '3',
                subLinks: [
                  {}
                ],
              },
              {
                label: 'Construction',
                href: '',
                cat_id: '4',
                subLinks: [
                  {}
                ],
              }
            ]}
            SecondLevelLinks={[

              { cat_id: '1', label: 'CSCS Card Application - Applying for your CSCS Card', href: '/course', sub_cat_id: '1' },
              { cat_id: '2', label: 'APLH Personal Licence Application', href: '/course', sub_cat_id: '2' },
              { cat_id: '2', label: 'Premises Licencet', href: '/course', sub_cat_id: '3' },
              { cat_id: '2', label: 'Occasional Licence', href: '/course', sub_cat_id: '4' },
              { cat_id: '3', label: 'SIA Security Guard Licence', href: '/course', sub_cat_id: '5' },
              { cat_id: '3', label: 'SIA Door Supervisor Licence', href: '/course', sub_cat_id: '6' },
              { cat_id: '3', label: 'SIA Close Protection Licence', href: '/course', sub_cat_id: '7' },
              { cat_id: '3', label: 'CCTV Licence', href: '/course', sub_cat_id: '8' },
              { cat_id: '4', label: 'Forklift Licence', href: '/course', sub_cat_id: '9' },
            ]}
            ThirdLevelLinks={[]}
          />
          <Dropdown
            label="Locations"
            links={[
              {
                label: 'Test Locations',
                href: '/course',
                cat_id: '1',
                subLinks: [
                  {},
                ],
              },
              {
                label: 'Classroom Locations',
                href: '/course',
                cat_id: '2',
                subLinks: [
                  {},
                ],
              }
            ]}
            SecondLevelLinks={[

              { cat_id: '1', label: 'CITB Health, Safety & Environment (HS&E) Test', href: '/course', sub_cat_id: '1' },
              { cat_id: '2', label: 'Door Supervisor', href: '/course', sub_cat_id: '2' },
              { cat_id: '2', label: 'Top up for Door Supervisors', href: '/course', sub_cat_id: '3' },
              { cat_id: '2', label: 'Security Guard', href: '/course', sub_cat_id: '4' },
              { cat_id: '2', label: 'Top up for Security Guards', href: '/course', sub_cat_id: '5' },
              { cat_id: '2', label: 'CCTV Operator', href: '/course', sub_cat_id: '6' },
              { cat_id: '2', label: 'Emergency First Aid at Work', href: '/course', sub_cat_id: '7' },
              { cat_id: '2', label: 'First Aid at Work', href: '/course', sub_cat_id: '8' },
              { cat_id: '2', label: 'Personal Licence', href: '/course', sub_cat_id: '9' },
              { cat_id: '2', label: 'Physical Intervention', href: '/course', sub_cat_id: '10' },
            ]}
            ThirdLevelLinks={[

              { sub_cat_id: '1', label: ' Aberdeen', href: '/course', course_id: '1' },
              { sub_cat_id: '1', label: 'Aberystwyth ', href: '/course', course_id: '2' },
              { sub_cat_id: '1', label: 'Aldershot ', href: '/course', course_id: '3' },
              { sub_cat_id: '1', label: ' Andover', href: '/course', course_id: '4' },
              { sub_cat_id: '1', label: ' Aylesbury', href: '/course', course_id: '5' },
              { sub_cat_id: '1', label: ' Ayr', href: '/course', course_id: '6' },
              { sub_cat_id: '1', label: ' Ballymena', href: '/course', course_id: '7' },
              { sub_cat_id: '1', label: ' Bangor', href: '/course', course_id: '8' },
              { sub_cat_id: '1', label: ' Barnstaple', href: '/course', course_id: '9' },
              { sub_cat_id: '1', label: ' Barrow-in-Furness', href: '/course', course_id: '10' },
              { sub_cat_id: '1', label: ' Basildon', href: '/course', course_id: '11' },
              { sub_cat_id: '1', label: ' Belfast', href: '/course', course_id: '12' },
              { sub_cat_id: '1', label: 'Berwick upon Tweed ', href: '/course', course_id: '13' },
              { sub_cat_id: '1', label: ' Birmingham', href: '/course', course_id: '14' },
              { sub_cat_id: '1', label: ' Blackpool', href: '/course', course_id: '15' },
              { sub_cat_id: '1', label: ' Bolton', href: '/course', course_id: '16' },
              { sub_cat_id: '1', label: ' Boston', href: '/course', course_id: '17' },


              { sub_cat_id: '2', label: 'SIA Door Supervisor Courses in London', href: '/course', course_id: '18' },
              { sub_cat_id: '2', label: 'SIA Door Supervisor Courses in Leicester', href: '/course', course_id: '19' },
              { sub_cat_id: '2', label: 'SIA Door Supervisor Courses in Manchester', href: '/course', course_id: '20' },
              { sub_cat_id: '3', label: 'SIA Top Up for Door Supervisors Training in London', href: '/course', course_id: '21' },
              { sub_cat_id: '3', label: 'SIA Top Up for Door Supervisors Training in Wembley', href: '/course', course_id: '22' },
              { sub_cat_id: '3', label: 'SIA Top Up for Door Supervisors Training in Leicester', href: '/course', course_id: '23' },
              { sub_cat_id: '3', label: 'SIA Top Up for Door Supervisors Training in Manchester', href: '/course', course_id: '24' },
              { sub_cat_id: '4', label: 'SIA Security Guard Courses in London', href: '/course', course_id: '25' },
              { sub_cat_id: '5', label: 'SIA Top up for Security Guards Training in London', href: '/course', course_id: '26' },
              { sub_cat_id: '5', label: 'SIA Top up for Security Guards Training in Leicester', href: '/course', course_id: '27' },
              { sub_cat_id: '5', label: 'SIA Top up for Security Guards Training in Milton Keynes', href: '/course', course_id: '28' },
              { sub_cat_id: '6', label: 'SIA CCTV Operator Courses in London', href: '/course', course_id: '29' },
              { sub_cat_id: '6', label: 'SIA CCTV Operator Training in Leicester', href: '/course', course_id: '30' },
              { sub_cat_id: '7', label: 'Emergency First Aid Courses in Birmingham', href: '/course', course_id: '31' },
              { sub_cat_id: '7', label: 'Emergency First Aid Courses in Hayes', href: '/course', course_id: '32' },
              { sub_cat_id: '7', label: 'Emergency First Aid Courses in Leeds', href: '/course', course_id: '33' },
              { sub_cat_id: '7', label: 'Emergency First Aid Courses in Liverpool', href: '/course', course_id: '34' },
              { sub_cat_id: '7', label: 'Emergency first aid Courses in London', href: '/course', course_id: '35' },
              { sub_cat_id: '7', label: 'Emergency First Aid Courses in Manchester', href: '/course', course_id: '36' },
              { sub_cat_id: '7', label: 'Emergency First Aid Courses in Newcastle', href: '/course', course_id: '37' },
              { sub_cat_id: '7', label: 'Emergency First Aid Courses in Nottingham', href: '/course', course_id: '38' },
              { sub_cat_id: '7', label: 'Emergency First Aid Courses in Sheffield', href: '/course', course_id: '39' },
              { sub_cat_id: '8', label: 'First Aid at Work Courses in London', href: '/course', course_id: '40' },
              { sub_cat_id: '8', label: 'First Aid at Work Courses in Birmingham', href: '/course', course_id: '41' },
              { sub_cat_id: '8', label: 'First Aid at Work Courses in Manchester', href: '/course', course_id: '42' },
              { sub_cat_id: '8', label: 'First aid at work courses in Nottingham', href: '/course', course_id: '43' },
              { sub_cat_id: '9', label: 'Personal Licence Courses in London', href: '/course', course_id: '44' },
              { sub_cat_id: '10', label: 'SIA Physical Intervention Courses in London', href: '/course', course_id: '45' },

            ]}
          />
        </div>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 mx-6 relative">
          <Link href="#" className='absolute left-3 top-[14px] text-gray-500'>
            <IoSearchOutline fontSize={18} />
          </Link>
          <input
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search for categories, courses or training providers"
            className="w-full p-3 pl-12 h-[3rem] focus:ring-gray-200 text-medium rounded-full border border-[#929292] bg-[#fbfbf8] text-[#3c3b37] focus:outline-none focus:ring-2"
          />
          <div className={`searchScrollbar ${SearchQuery && SearchQuery.length >= 2 ? 'min-h-20 max-h-96' : 'opacity-0 max-h-0'} transition-all duration-300 absolute bg-white mt-1 rounded overflow-y-auto overflow-x-hidden z-50 w-full border border-gray-300 shadow-2xl shadow-black/50`}>
            {SearchItems.map((item, index) => (
              <div key={index} className='p-2 cursor-pointer transition-colors duration-150 hover:bg-neutral-100'>
                <div className='flex space-x-2'>
                  <div className='w-1/6 rounded overflow-hidden'>
                    <Image src={item.image} className={`h-14 w-full rounded ${item.type == 'course' ? 'object-cover' : 'object-contain p-1 border border-gray-300'} `} height={55} width={200} alt='course image' />
                  </div>
                  <div className='w-5/6 flex flex-col space-y-1'>
                    <p className='font-semibold text-sm'>{item.name}</p>
                    {item.type == 'course' ?
                      <div className='flex items-center space-x-2'>
                        <p className='font-semibold text-xs'>{item.category}</p>
                        <p className='font-normal text-xs'>{item.provider}</p>
                      </div>
                      :
                      <div>
                        <p className='font-normal text-xs'>Training provider</p>
                      </div>
                    }
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 mr-6">
          <Link href="https://hurak.com/blog/" className="text-gray-800 hover:text-primary">
            Blog
          </Link>
          <Link href="/test-prep" className="text-gray-800 hover:text-primary">
            Test Prep
          </Link>
        </div>

        {/* Cart Icon with Dropdown */}

        <div className="relative mr-8 group">
          <Link href="/shop-cart">
            <BsCartDash className="h-5 w-5 text-gray-800 hover:text-primary" />
          </Link>

          {/* Cart Dropdown */}
          <div className='absolute right-[-20px] w-[300px]  opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 pointer-events-none group-hover:pointer-events-auto'>
            <div className="relative bg-white border rounded-lg shadow-lg p-4 py-8 mt-3">
              {/* Triangle Arrow */}
              <div className="absolute top-[-8px] right-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white"></div>

              {cartItems.length > 0 ? (
                <div>
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex items-start mb-2 text-sm border-b py-2">
                      <Image src={item.image} alt='image' width={50} height={25} className='mt-[6px] mr-2' />
                      <div>
                        <h6 className='font-semibold'>{item.name}</h6>
                        <div className='flex items-center justify-between'>
                          <span>£{item.price} - {item.package}</span>
                          <p>x {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 mt-2">
                    <strong>Total:</strong> £{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                  </div>
                  <Link href="/shop-cart">
                    <button className="mt-4 w-full bg-primary text-white py-2 rounded-md font-medium">
                      Go to Cart
                    </button>
                  </Link>
                </div>
              ) : (
                <div className='text-center'>
                  <p className="text-lg text-center text-gray-400 mb-2">~ Your cart is empty ~</p>
                  <Link href="/courses" className='text-xs text-primary font-semibold'>Continue Shopping</Link>
                </div>
              )}
            </div>
          </div>
        </div>


        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          {!(pathname === '/business/dashboard' || pathname === '/account/setting' || pathname === '/my-learning') && (
            <div className='flex space-x-2'>
              <Link href="/sign-up">
                <ButtonInverseFill color={'danger'} text={'Sign Up'} />
              </Link>
              <Link href="/log-in">
                <ButtonInverseFill color={'primary'} align={'right'} text={'Log In'} />
              </Link>
            </div>
          )}
          {(pathname === '/business/dashboard' || pathname === '/account/setting' || pathname === '/my-learning') &&
            <AccountSwitch />
          }
        </div>

      </div>
      <div className="block lg:hidden">
        <PricingHeaderSmallScreen SearchItems={SearchItems} SearchQuery={SearchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </nav>
  );
}
