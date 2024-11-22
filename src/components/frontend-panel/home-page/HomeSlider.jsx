// 'use client';
// import React, { useState, useEffect } from 'react';
// import CourseFinderSlider from '../course-finder/courseFinderCrousel';
// import axios from "axios";

// function TabSection() {
//   const [activeTab, setActiveTab] = useState(0);

//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {

//     try {
//       const response = await axios.get("https://staging.hurak.com/api/homepage_featured_categories", {
//         headers: {
//           "X-API-KEY": "L2n7Vxq3B6K7mJ8T5z!P%2Wc0aQLlT2M", // Add your API key here
//         },
//       });
//       setData(response.data);
//       const fetchedData = response.data;

//       // Transforming the fetched data to match the structure of `tabs`
//       const transformedTabs = fetchedData.map(item => ({
//         label: item.categoryName,
//         image: item.categoryImage,
//         products: item.products.map(product => ({
//           title: product.title,
//           provider: product.provider,
//           price: product.price,
//           image: product.image || '/images/dummy.jpg',
//         })),
//       }));

//       setData(transformedTabs);
//       console.log("Data:", response.data);
//       // return response.data;
//     } catch (error) {
//       setError('Failed to load data');
//       console.error("Error fetching data:", error);
//       throw error;
//     }

//     }
//     fetchData();
//   }, []);

//   if (error) return <div>{error}</div>;
//   if (!data) return <div>Loading...</div>;

//   // const tabs = [
//   //   {
//   //     label: 'Health and Safety',
//   //     image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/617fed01d093c_ezgif.com-gif-maker%20%282%29.webp',
//   //     products: [
//   //       {
//   //         title: 'Basic Health & Safety Course',
//   //         provider: 'Hurak Learning',
//   //         price: '$199',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //       {
//   //         title: 'Advanced Safety Techniques',
//   //         provider: 'Global Training',
//   //         price: '$299',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //       {
//   //         title: 'Fire Safety Awareness',
//   //         provider: 'Safety First Academy',
//   //         price: '$159',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     label: 'First Aid',
//   //     image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/61cad91080e43_ezgif.com-gif-maker%20%283%29.webp',
//   //     products: [
//   //       {
//   //         title: 'Basic First Aid',
//   //         provider: 'Life Savers Training',
//   //         price: '$150',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //       {
//   //         title: 'CPR and AED Certification',
//   //         provider: 'Health Academy',
//   //         price: '$180',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //       {
//   //         title: 'First Aid for Workplace',
//   //         provider: 'Corporate Health Solutions',
//   //         price: '$200',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //       {
//   //         title: 'First Aid for Workplace',
//   //         provider: 'Corporate Health Solutions',
//   //         price: '$200',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     label: 'Security',
//   //     image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/6407736100369_ezgif.com-gif-maker%20%281%29.webp',
//   //     products: [
//   //       {
//   //         title: 'Basic Security Training',
//   //         provider: 'Secure Pro',
//   //         price: '$250',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     label: 'Hospitality',
//   //     image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/6407743a828ad_ezgif.com-gif-maker%20%282%29.webp',
//   //     products: [
//   //       {
//   //         title: 'Customer Service Excellence',
//   //         provider: 'Hospitality Academy',
//   //         price: '$120',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //       {
//   //         title: 'Bartender Training',
//   //         provider: 'Bar School',
//   //         price: '$180',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     label: 'Teaching & Academics',
//   //     image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/6421c2b43c25a_Teacher-01.webp',
//   //     products: [
//   //       {
//   //         title: 'Teaching for Beginners',
//   //         provider: 'Teaching Academy',
//   //         price: '$300',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     label: 'Construction',
//   //     image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/64ca1dd9dc4dc_aszaxza.webp',
//   //     products: [
//   //       {
//   //         title: 'Basic Construction Safety',
//   //         provider: 'BuildSafe',
//   //         price: '$220',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //       {
//   //         title: 'Heavy Equipment Operator Training',
//   //         provider: 'Construction Masters',
//   //         price: '$400',
//   //         image: '/images/dummy.jpg',
//   //       },
//   //     ],
//   //   },
//   // ];

//   return (
//     <div>
//       <section className="container mx-auto px-4 mt-[50px] mb-[20px]">
//         <div className="grid grid-cols-12 gap-4">
//           <div className="col-span-12">
//             <h1 className="text-3xl lg:text-4xl font-bold">
//               Hurak - Training Courses & Qualifications
//             </h1>
//           </div>
//           <div className="col-span-12">
//             <p className="text-lg lg:text-xl">
//               With over 100,000 customers, from individuals to some of the most respected global brands.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="container mx-auto mb-[60px]">
//         <div className="flex overflow-x-auto border-b border-gray-300">
//           {tabs.map((tab, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 whitespace-nowrap ${activeTab === index
//                   ? 'border-b-2 border-blue-500 text-blue-500'
//                   : 'text-gray-600'
//                 }`}
//               onClick={() => setActiveTab(index)}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Tab content */}
//         <div className="mt-6">
//           <div className='relative'>
//             <img src={tabs[activeTab].image} alt={tabs[activeTab].label} className="w-full bg-contain h-44 lg:h-auto rounded-lg" />
//             <div className="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col text-white">
//               <h2 className="text-3xl text-black font-bold">{tabs[activeTab].label}</h2>
//               <p className='text-black'>#1 Most popular topic on Hurak</p>
//               <button className="mt-4 px-4 py-2 border border-black text-white bg-black hover:bg-transparent hover:border-1 hover:text-black transition">
//                 Explore {tabs[activeTab].label} Courses
//               </button>
//             </div>
//           </div>


//           <div className='mt-10'>
//           <CourseFinderSlider/>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

//             {/* {tabs[activeTab].products.map((product, idx) => (
//               <VerticleCourseCards key={idx} idx={idx} image={product.image} title={product.title} provider={product.provider} price={product.price} />

//             ))} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TabSection;


'use client';
import React, { useState, useEffect } from 'react';
import CourseFinderSlider from '../course-finder/courseFinderCrousel';
import axios from "axios";
import Skeleton from '@/components/global/Skeletons/Skeleton';
import ButtonInverseFill from '@/components/global/butttons/ButtonInverseFill';
import Link from 'next/link';

function TabSection() {

  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_STATIC_API_KEY
        const host = process.env.NEXT_PUBLIC_HOST
        const response = await axios.get(host + "api/homepage_featured_categories", {
          headers: {
            "X-API-KEY": apiKey, // Your API key here
          },
        });
        const fetchedData = response.data;

        // Transforming the fetched data to match the structure of `tabs`
        // const transformedTabs = fetchedData.map(item => ({
        //   category_name: item.category_name,
        //   // image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/admin-cms/homepage-uploads/64ca1dd9dc4dc_aszaxza.webp',
        //   featured_course_img: item.featured_course_img,
        //   feature_courses: item.feature_courses.map(product => ({
        //     title: product.course_title,
        //     description: product.course_short_des,
        //     provider_id: product.course_provider_id,
        //     provider: product.tp_name,
        //     tp_comp_logo: product.tp_comp_logo,
        //     tp_total_students: product.tp_total_students,
        //     base_course_type: product.base_course_type,
        //     session_price: product.session_price,
        //     enquiry_price: product.enquiry_price,
        //     course_url: product.course_url,
        //     // price: '99.99',
        //     image: product.course_image || '/images/dummy.jpg',
        //     // image:'/images/dummy.jpg',
        //   })),
        // }));

        setData(fetchedData); // Set transformed data to `data`
        console.log("Data:", fetchedData);
      } catch (error) {
        setError('Failed to load data');
        console.error("Error fetching data:", error);
      }
    }


    setTimeout(() => {
      setLoading(false);
      fetchData();
    }, 2000);
  }, []);

  if (error) return <div>{error}</div>;
  // if (!data) return <div>loading ...</div>
  if (!data) return <div className='container py-10 w-full'>
    <Skeleton style={'h-8 w-[50%] bg-neutral-200 mt-2'} />
    <Skeleton style={'h-4 w-[70%] bg-neutral-200 mt-2'} />
    <div className='flex pt-2 '>
      <Skeleton style={'h-4 w-[10%] bg-neutral-200 '} />
      <Skeleton style={'h-4 w-[10%] bg-neutral-200 ml-2'} />
      <Skeleton style={'h-4 w-[10%] bg-neutral-200 ml-2'} />
      <Skeleton style={'h-4 w-[10%] bg-neutral-200 ml-2'} />
      <Skeleton style={'h-4 w-[10%] bg-neutral-200 ml-2'} />
      <Skeleton style={'h-4 w-[10%] bg-neutral-200 ml-2'} />
    </div>

    <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />

    <div className='lg:flex justify-between w-full hidden gap-5'>
      <div className='w-full'>
        <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[80%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[35%] bg-neutral-200 mt-2'} />
      </div>
      <div className='w-full'>
        <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[80%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[35%] bg-neutral-200 mt-2'} />
      </div>
      <div className='w-full'>
        <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[80%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[35%] bg-neutral-200 mt-2'} />
      </div>
      <div className='w-full'>
        <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[80%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[35%] bg-neutral-200 mt-2'} />
      </div>
    </div>
    <div className='md:flex lg:hidden justify-between w-full hidden gap-5'>
      <div className='w-full'>
        <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[80%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[35%] bg-neutral-200 mt-2'} />
      </div>
      <div className='w-full'>
        <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[80%] bg-neutral-200 mt-2'} />
        <Skeleton style={'h-4 w-[35%] bg-neutral-200 mt-2'} />
      </div>
    </div>
    <div className='w-full md:hidden'>
      <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />
      <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
      <Skeleton style={'h-4 w-[35%] bg-neutral-200 mt-2'} />
    </div>
  </div>

  return (
    <div>
      <section className="container mx-auto px-4 pt-14 mb-3">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <h1 className="text-3xl lg:text-3xl font-bold mb-1">
              Hurak - Training Courses & Qualifications
            </h1>
            <p className="text-lg">
              With over 100,000 customers, from individuals to some of the most respected global brands.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto pb-14">
        <div className="flex overflow-x-auto border-b border-gray-300 space-x-5">
          {data.map((tab, index) => (
            <button
              key={index}
              className={`py-2 whitespace-nowrap font-semibold text-lg ${activeTab === index
                ? 'border-b-2 border-black text-black'
                : 'text-gray-600 '
                }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.category_name}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-6">
          <div className='relative'>
            <img src={`${process.env.NEXT_PUBLIC_S3_BASE_STORAGE}admin-cms/homepage-uploads/${data[activeTab].featured_course_img}`} alt={data[activeTab].label} className="w-full bg-contain h-44 lg:h-auto rounded-lg" />
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 flex flex-col text-white">
              <h2 className="text-3xl text-black font-bold">{data[activeTab].category_name}</h2>
              <p className='text-black'>{data[activeTab].featured_course_banner_text}</p>
              <Link href={"#"} className='mt-2'>
                <ButtonInverseFill color={"dark"} text={`Explore ${data[activeTab].category_name} Courses`} />
              </Link>
            </div>
          </div>

          <div className='mt-10'>
            <CourseFinderSlider courses={data[activeTab].feature_courses} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabSection;
