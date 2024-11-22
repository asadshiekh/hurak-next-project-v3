"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from '@/components/global/Skeletons/Skeleton';


const FeaturedTopicsSection = () => {

  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      const host = process.env.NEXT_PUBLIC_HOST
      const apiUrl = host+"api/fetch-featured-topics";
      const apiKey = process.env.NEXT_PUBLIC_STATIC_API_KEY;

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "X-API-KEY": apiKey,
          },
        });
        setTopics(response.data); // Set the fetched topics
      } catch (error) {
        console.error("Error fetching featured topics:", error);
      } finally {
        setLoading(false); // Stop the loading indicator
      }
    };

    fetchTopics();
  }, []); // Empty dependency array means it runs once on mount

  // if (loading) {
  //   return <div className="text-center py-10">Loading...</div>;

  // }
  const [Skeletonloading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSkeletonLoading(false);
    }, 100);
  }, []);

  return (
    <section className="add-sec feature-topics-sec py-14 bg-[#FBFBF8]">
      <div className="container mx-auto">
        <div className="text-center lg:text-left">
          <h4 className="heading text-3xl font-semibold ml-5">Featured Topics</h4>
        </div>

        {/* <div className="flex flex-wrap mt-6"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-dense auto-rows-[min-content] mt-6">
          {topics.map((topic) => (
            <div key={topic.id} className="px-4">
              <div className="mb-3">
                <h5 className="font-bold text-xl mb-4">
                  {/* <i className={`${topic.icon_code} pr-2 text-2xl`}></i> */}
                  {topic.category_name}
                </h5>
                <ul className="list-none flex flex-wrap gap-x-5">
                  {topic.sub_categories.map((sub) => (
                    <li key={sub.sub_cat_id} className="mb-3 pr-3 border-r-2 border-gray-300 last:border-r-0 text-lg">
                      <a
                        href={`https://hurak.com/courses/${sub.sub_category_url}`}
                        className="text-[#5022c2] underline font-semibold"
                      >
                        {sub.sub_category_name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
             

            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default FeaturedTopicsSection;
