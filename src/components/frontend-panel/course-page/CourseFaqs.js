
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FAQItem from "@/components/global/FAQItem";
import { FaPlus, FaMinus } from "react-icons/fa";
import Skeleton from "@/components/global/Skeletons/Skeleton";

const CourseFaqs = ({course_id}) => {
  const [loading, setLoading] = useState(true);
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  const fetchFAQs = async () => {
    const host = process.env.NEXT_PUBLIC_HOST;
    const apiKey = process.env.NEXT_PUBLIC_STATIC_API_KEY;
    const endpoint = `${host}api/fetch-single-course-faqs/${course_id}`;

    try {
      const response = await axios.get(endpoint, {
        headers: {
          "X-API-KEY": apiKey,
        },
      });
      setFaqs(response.data.faqs || []);
    } catch (err) {
      console.error("Error fetching FAQs:", err);
      setError("Failed to load FAQs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  if (error) {
    return false;
    // return <p className="text-red-500">{error}</p>;
  }

  // If there's no data and loading is complete, return nothing
  if (!loading && faqs.length === 0) {
    return null;
  }

  return (
    <section className="faq-course-section pb-20">
      <div className="container mx-auto px-10 lg:px-20">
                  {/* Show Skeletons while loading */}
          {loading && (
            <div>
              <Skeleton style={"h-8 md:h-10 w-[30%] bg-neutral-200 mb-3"} />
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} style={"h-8 md:h-10 w-[100%] bg-neutral-200 mb-2"} />
              ))}
            </div>
          )}
          {/* Render FAQ Items */}
          {!loading &&
          <>
            <h2 className="text-2xl font-normal mb-4">Frequently Asked Questions</h2>
            <div className="bg-white shadow-md rounded-lg">

               { faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    bgColor={"bg-[#F8F9FA]"}
                    OpenBtn={<FaMinus />}
                    CloseBtn={<FaPlus />}
                    index={index}
                    question={faq.course_faq_question}
                    answer={faq.course_faq_answer}
                  />
                ))}
            </div>
          </>
          }
      </div>
    </section>
  );
};

export default CourseFaqs;

