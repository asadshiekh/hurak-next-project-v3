'use client'
import { FaCheck } from 'react-icons/fa';
import { MdOutlineLocalOffer } from 'react-icons/md'; // For "Most Popular" badge
import { BsGlobe, BsFillPeopleFill } from 'react-icons/bs'; // Icons for E-learning and In-house
import Link from 'next/link';
import ButtonFill from '@/components/global/butttons/ButtonFill';
import { LuGraduationCap, LuLaptop } from "react-icons/lu";
import { LiaGlobeSolid, LiaCheckCircle } from "react-icons/lia";
import { SlHome } from "react-icons/sl";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useState } from 'react';
import TextInput from '@/components/global/forms/TextInput';
import ButtonInverseFill from '@/components/global/butttons/ButtonInverseFill';
import BasicModal from '@/components/global/modal-windows/BasicModal';


const LearningOptions = () => {
  const [isEnquireOpenModal, setEnquireOpenModel] = useState(false);
  const [TestingID, setTestingID] = useState(null);

  const enquireOpen = () => setEnquireOpenModel(true);
  const enquireClose = () => setEnquireOpenModel(false);

  const options = [
    {
      title: 'E-learning',
      icon: <LiaGlobeSolid className="text-2xl mr-2 text-primary" />, // Icon for E-learning
      points: [
        <div className='flex'>
          <LiaCheckCircle className="text-lg text-primary mt-1 mr-2" />
          Designed to work around your schedule
        </div>,
        <div className='flex'>
          <LiaCheckCircle className="text-lg text-primary mt-1 mr-2" />
          Complete the course in your own time.
        </div>,
        <div className='flex'>
          <LiaCheckCircle className="text-lg text-primary mt-1 mr-2" />
          Access learning materials from any device.
        </div>,
        <div className='flex'>
          <LiaCheckCircle className="text-sm text-primary mt-1 mr-2" />
          Book exams when you’re ready.
        </div>,
        // 'Designed to work around your schedule.',
        // 'Complete the course in your own time.',
        // 'Access learning materials from any device.',
        // 'Book exams when you’re ready.',
      ],
      price: '£99.99',
      oldPrice: '£169.99',
      discount: '41% Off',
      popular: true,
      purchaseInfo: 'Looking to purchase multiple?',
      buttonText: 'Book Now',
    },
    {
      title: 'Classroom',
      icon: <LuGraduationCap className="text-2xl mr-2 text-primary" />, // Icon for E-learning
      points: [
        // 'Focused study away from the workplace.',
        // 'Face-to-face support with experienced tutors.',
        // 'Interact with fellow professionals.',
        <div className='flex'>
          <LiaCheckCircle className="text-lg text-primary mt-1 mr-2" />
          Focused study away from the workplace..
        </div>,
        <div className='flex'>
          <LiaCheckCircle className="text-lg text-primary mt-1 mr-2" />
          Face-to-face support with experienced tutors.
        </div>,
        <div className='flex'>
          <LiaCheckCircle className="text-sm text-primary mt-1 mr-2" />
          Interact with fellow professionals
        </div>,
      ],
      price: '£89.99',
      oldPrice: '£109.99',
      discount: '18% Off',
      buttonText: 'See Dates',
    },
    {
      title: 'Online (Live)',
      icon: <LuLaptop className="text-2xl mr-2 text-primary" />, // Icon for E-learning
      points: [
        <div className='flex'>
          <LiaCheckCircle className="text-xl text-primary mt-1 mr-2" />
          A complete classroom experience you can do from home.
        </div>,
        <div className='flex'>
          <LiaCheckCircle className="text-2xl text-primary mt-1 mr-2" />
          Structured learning with access to e-learning materials.
        </div>,
        <div className='flex'>
          <LiaCheckCircle className="text-xl text-primary mt-1 mr-2" />
          Interact live with your tutor and other students.
        </div>,
        // 'A complete classroom experience you can do from home.',
        // 'Structured learning with access to e-learning materials.',
        // 'Interact live with your tutor and other students.',
      ],
      price: '£144',
      buttonText: 'See Dates',
    },
    {
      title: 'In-house',
      icon: <SlHome className="text-xl mr-2 text-primary" />, // Icon for In-house
      points: [
        // 'Study alongside colleagues and learn together.',
        // 'Choose from classroom, live tutor-led online or self-paced online learning options.',
        <div className='flex'>
          <LiaCheckCircle className="text-xl text-primary mt-1 mr-2" />
          Study alongside colleagues and learn together.
        </div>,
        <div className='flex'>
          <LiaCheckCircle className="text-4xl text-primary mt-1 mr-3" />
          Choose from classroom, live tutor-led online or self-paced online learning options.
        </div>,
        <div className='flex'>
          <LiaCheckCircle className="text-lg text-primary mt-1 mr-2" />
          Tailored course content to your workplace.
        </div>,
        // <LiaCheckCircle className="text-lg text-primary mt-1 mr-2" /> 'Tailored course content to your workplace.',
      ],
      contactInfo: 'CONTACT US FOR A QUOTE',
      buttonText: 'Enquire Now',
    },
  ];

  return (
    <section className="learning-options py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-8 font-bold">Learning Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 min-h-full flex flex-col justify-between border-[3px] border-gray border border-[#0f7c902e] hover:border-primary hover:shadow-lg hover:bg-[#D4E7EB] transition-all duration-300">
              <div>
                {/* Title and Icon in one line */}
                <div className="flex items-center mb-4">
                  {option.icon && <div>{option.icon}</div>}
                  <h3 className="text-xl font-semibold">{option.title}</h3>
                </div>

                {option.popular && (
                  <div className='flex justify-center'>
                    <div className=" border border-2 border-[#e5b224] text-sm font-bold py-1 px-5 rounded-lg inline-flex items-center mb-4 bg-[#fff8ee]">
                      {/* <MdOutlineLocalOffer className="mr-1" />  */}
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <ul className="space-y-2 mb-6">
                  {option.points.map((point, idx) => (
                    <li key={idx} className="text-sm flex items-start">
                      {/* <LiaCheckCircle className="text-lg text-primary mt-1 mr-2" /> */}
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {option.purchaseInfo && (
                  <p className="text-blue-500 text-sm font-semibold mb-2">
                    {option.purchaseInfo}
                  </p>
                )}
              </div>

              <div>
                {/* Price section placed above the button */}
                {option.price && (
                  <div className="mb-4 text-left">
                    <p className="text-lg font-bold">
                      From {option.price} <span className="text-sm">All inc</span>
                    </p>
                    <div className='flex'>
                      {option.oldPrice && (
                        <p className="text-sm text-gray-800 line-through">
                          {option.oldPrice}
                        </p>
                      )}
                      {option.discount && (
                        <p className="text-sm ml-1">{option.discount}</p>
                      )}
                    </div>
                  </div>
                )}
                {option.contactInfo && (
                  <p className="font-semibold text-lg mb-4">{option.contactInfo}</p>
                )}
                <div >
                  {/* <p onClick={enquireOpenModel} className={`${option.title === 'In-house' ? 'bg-red-500' : 'bg-red-500' */}
                  {/* } text-white text-lg px-4 font-[700] py-3 rounded hover:bg-opacity-90 w-full`}> */}
                  {/* <Link href="#"  */}
                  {/* className={`${option.title === 'In-house' ? 'bg-red-500' : 'bg-red-500'
                    } text-white text-lg px-4 font-[700] py-3 rounded hover:bg-opacity-90 w-full`}> */}
                  {/* {option.buttonText} */}
                  {/* </Link> */}
                  {/* </p> */}

                  <ButtonFill
                    handelClick={enquireOpen}
                    widthAuto={"auto"}
                    color={"danger"}
                    text={`${option.buttonText}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Start */}

      {isEnquireOpenModal && (
        <BasicModal size={'md'} scrollable={false} staticBackdrop={true} >
          <div className="bg-white px-3 py-3 rounded shadow-lg ">
            <div className='flex justify-end'>
              <button className='text-2xl' onClick={enquireClose}>&times;</button>
            </div>

            <p className='text-primary font-[500] text-lg pb-4'>Request more details</p>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <div className='mb-2'><label className=''>First Name <span className='text-danger'>*</span></label></div>
                <TextInput label={`First Name `} InputValue={TestingID} setInputValue={setTestingID} required={true} />
              </div>
              <div>
                <div className='mb-2'><label className=''>Last Name <span className='text-danger'>*</span></label></div>
                <TextInput label={`Last Name `} InputValue={TestingID} setInputValue={setTestingID} required={true} />
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6 mt-2 border-b border-gray-300 pb-4'>
              <div>
                <div className='mb-2'><label className=''>Email <span className='text-danger'>*</span></label></div>
                <TextInput label={`Enter your email`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
              </div>
              <div>
                <div className='mb-2'><label className=''>Phone number <span className='text-danger'>*</span></label></div>
                <TextInput label={`Enter your number `} InputValue={TestingID} setInputValue={setTestingID} required={true} />
              </div>
            </div>

            <p className='text-primary font-[500] text-lg py-4'>About your company</p>
            <div className='grid md:grid-cols-2 gap-6 mt-2 '>
              <div>
                <div className='mb-2'><label className=''>Your role <span className='text-danger'>*</span></label></div>
                <TextInput label={`Your role`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
              </div>
              <div>
                <div className='mb-2'><label className=''>Company name <span className='text-danger'>*</span></label></div>
                <TextInput label={`Company name`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-6 mt-2 border-b border-gray-300 pb-4'>
              <div>
                <div className='mb-2'><label className=''>Compant size (Optional) <span className='text-danger'>*</span></label></div>
                <TextInput label={`Compant size`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
              </div>
              <div>
                <div className='mb-2'><label className=''>Number of participants <span className='text-danger'>*</span></label></div>
                <TextInput label={`Number of participants`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
              </div>
            </div>

            <div className='flex justify-center pt-4 '>
              <p className='text-[12px]'>
                This site is protected by reCAPTCHA and the Google <br />
              </p>
            </div>

            <div className='flex justify-center pb-5'>
              <p className='text-[12px]'>
                <span className='text-primary-light'> Privacy Policy</span> and <span className='text-primary-light'>Terms of Service</span> apply.
              </p>
            </div>
            <div className='flex justify-center'>
              <ButtonInverseFill widthAuto={"auto"} Padding={"2xl"} color={"primary"} text={'Submit'}
              />
            </div>
            <p className='text-[11px] px-3 pt-5 pb-3 leading-6'>
              By clicking Send, you agree to the <span className='font-[700]'>terms and conditions</span> applicable to our services and acknowledge that your personal data will be used in accordance with our privacy policy. You further acknowledge that you are responding to a request for further information from a third party course provider. As such, Reed will pass your contact details on to the course provider who may contact you directly (in accordance with it's own privacy notice).
            </p>
          </div>
        </BasicModal>
      )}

      {/* Modal End */}

    </section>
  );
};

export default LearningOptions;
