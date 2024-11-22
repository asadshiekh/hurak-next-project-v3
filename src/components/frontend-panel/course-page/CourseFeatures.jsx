
'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseFeatures = ({ course_id }) => {
  
  const [loading, setLoading] = useState(true);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (course_id) {
    fetchCourseFeaturesData();
    }
  }, [course_id]);
  
  const fetchCourseFeaturesData = async () => {
    
    const apiKey = process.env.NEXT_PUBLIC_STATIC_API_KEY;
    const host = process.env.NEXT_PUBLIC_HOST
    const url = host+`api/course-features/${course_id}`
    try {
      const response = await axios.get(url, {
        headers: {
          "X-API-KEY": apiKey, // Your API key here
        },
      });
      console.log(response.data.features)
      setFeatures(response.data.features)
    } catch (error) {
      console.error("Error fetching featured topics:", error);
    } finally {
      setLoading(false); // Stop the loading indicator
    }
  };

  if (!features.length) return null;
  
  return (
      <section className="course-features pt-8 md:pt-16">
      <div className="w-full bg-white mb-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Course Features</h2>
          <div className="flex flex-wrap gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-center shadow-sm"
              >
                {feature.course_features}
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
  );
};

export default CourseFeatures;
