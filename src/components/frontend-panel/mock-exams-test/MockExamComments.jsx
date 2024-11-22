"use client";

import ButtonFill from '@/components/global/butttons/ButtonFill';
import TextInput from '@/components/global/forms/TextInput';
import React, { useState } from 'react';
import { LuDot } from "react-icons/lu";

const MockExamComments = () => {
  const [TestingID, setTestingID] = useState(null);

  const comments = [
    {
      name: 'Saif Ur Rehman',
      date: 'October 11, 2023',
      comment: 'I recently took the Level 1 Health & Safety in a Construction Environment mock test provided by Hurak Education Service, and I must say.',
      replys: [{ name: 'Saif Health', reply: 'uhdjk iufskh', date: 'October 11, 2024', replay: [{ name: 'Saif', reply: 'uhdjk iufskdrtbbbbb55555h', date: 'October 11, 2024' }] }]
    },
    {
      name: 'John Doe',
      date: 'October 12, 2023',
      comment: 'This is another comment without replies.',
      replys: [{ name: 'Saif', reply: 'uhdjk iufskh', date: 'October 11, 2024' }]
    },
    { name: 'Jane Smith', date: 'October 13, 2023', comment: 'I found this mock test helpful.' },
    { name: 'Tom Brown', date: 'October 14, 2023', comment: 'I appreciate the resources provided.' },
  ];

  const getInitials = (name) => {
    const words = name.split(' ');
    return words.slice(0, 2).map(word => word.charAt(0).toUpperCase()).join('');
  };

  const [visibleComments, setVisibleComments] = useState(Array(comments.length).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleVisibility = (index) => {
    const newVisibleComments = [...visibleComments];
    newVisibleComments[index] = !newVisibleComments[index];
    setVisibleComments(newVisibleComments);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <div className="group grid grid-cols-8 bg-[#f8f9fa] py-5" id='leaveComment'>
        <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-6 h-auto py-5 px-6 lg:px-0">
          <div className='block md:flex justify-between text-center items-baseline border rounded-lg bg-white py-5 px-5'>
            <p className='text-xl text-start'>Still looking for an answer?</p>
            <div onClick={() => setIsModalOpen(true)}>
              <ButtonFill color={"primary"} text={"Leave a comment"} />
            </div>
          </div>
          <div className='py-5'>
            {comments.map((item, index) => (
              <div key={index} className="bg-white border rounded-xl items-center mb-5">
                <div className='sm:flex justify-between items-center py-5 px-3 md:px-5 lg:px-5'>
                  <div className='flex items-center'>
                    <div className='h-10 w-10 min-w-10 rounded-full bg-[#e4e4e4] mr-2 lg:mr-5 flex justify-center items-center'>{getInitials(item.name)}</div>
                    <div className='flex items-center md:ml-2 lg:ml-0'>
                      <p className='font-bold'>{item.name}</p>
                      <LuDot className='text-center' />
                      <p className='text-xs'>{item.date}</p>
                    </div>
                  </div>
                  <div className='sm:flex justify-end text-end w-full sm:w-20 box'>
                    <p className='inline-block text-right sm:text-right md:text-center text-[#0f7c90] border border-[#0f7c90] text-sm rounded-md hover:cursor-pointer px-2 py-1' onClick={() => setIsModalOpen(true)}>
                      Reply
                    </p>
                  </div>
                </div>
                <div className='px-3 md:px-5 lg:px-20 pb-5'>
                  <p>{item.comment}</p>
                  <p className='text-[#0f7c90] hover:cursor-pointer mt-3' onClick={() => toggleVisibility(index)}>
                    {visibleComments[index] ? 'Hide comments' : 'Show comments'}
                  </p>

                  {visibleComments[index] && item.replys && item.replys.map((reply, replyIndex) => (
                    <div key={replyIndex}>
                      <div className='sm:flex justify-between items-center py-5 px-3 md:px-5 lg:px-0 border-l-2 pl-2'>
                        <div className='flex items-center px-5'>
                          <div className='h-10 w-10 min-w-10 rounded-full bg-[#e4e4e4] mr-2 flex justify-center items-center'>{getInitials(reply.name)}</div>
                          <div className='flex items-center md:ml-2 lg:ml-0'>
                            <p className='font-bold'>{reply.name}</p>
                            <LuDot className='text-center' />
                            <p className='text-xs'>{reply.date}</p>
                          </div>
                        </div>
                        <div className='sm:flex justify-end text-end w-full sm:w-20 box'>
                          <p className='inline-block text-right sm:text-right md:text-center text-[#0f7c90] border border-[#0f7c90] text-sm rounded-md hover:cursor-pointer px-2 py-1' onClick={() => setIsModalOpen(true)}>
                            Reply
                          </p>
                        </div>
                      </div>
                      <div className='px-3 md:px-5 lg:px-14 pb-5'>
                        <p>{reply.reply}</p>
                      </div>
                      {reply.replay && reply.replay.map((nestedReply, nestedReplyIndex) => (
                        <div key={nestedReplyIndex} className='md:px-10'>
                          <div className='sm:flex justify-between items-center py-5 px-3 md:px-5 lg:px-0 border-l-2 pl-2'>
                            <div className='flex items-center px-5'>
                              <div className='h-10 w-10 min-w-10 rounded-full bg-[#e4e4e4] mr-2 flex justify-center items-center'>{getInitials(nestedReply.name)}</div>
                              <div className='flex items-center md:ml-2 lg:ml-0'>
                                <p className='font-bold'>{nestedReply.name}</p>
                                <LuDot className='text-center' />
                                <p className='text-xs'>{nestedReply.date}</p>
                              </div>
                            </div>
                          </div>
                          <div className='px-3 md:px-5 lg:px-14 pb-5'>
                            <p>{nestedReply.reply}</p>
                          </div>
                        </div>
                      ))}

                    </div>
                  ))}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg  w-11/12 max-w-lg">
            <div className='flex justify-between items-center px-5 pt-2 pb-1'>
              <h2 className="text-xl font-bold text-[#0f7c90] text-start ">Leave a Comment</h2>
              <button className="text-3xl text-gray-600 hover:text-gray-800" onClick={closeModal}>
                &times;
              </button>
            </div>
            <hr />
            <div className='p-5'>
              <form className="flex flex-col space-y-4">
                <div className='grid md:grid-cols-2 gap-x-2'>
                <TextInput label={`Name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

                  {/* <input
                    type="text"
                    name='name'
                    placeholder='Name'
                    className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0f7c90] col-span-2'
                    required
                  /> */}
<div className='mt-3 md:mt-0 '>  <TextInput label={`Email <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
</div>
                  {/* <input
                    type="email"
                    name='email'
                    placeholder='Email'
                    className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0f7c90] col-span-2'
                    required
                  /> */}
                </div>
                <textarea
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-[#0f7c90]"
                  rows="4"
                  placeholder="Write your comment..."
                  required
                ></textarea>
                <div className='flex justify-center'>
                  <div>
                  <ButtonFill color={"primary"} text={"Send"} />
                  </div>
                </div>
                <div className='text-center text-xs text-[#9aa0a6]'>
                  <p>This site is protected by reCAPTCHA and the Google</p>
                  <p><span className='text-[#0f7c90]'>Privacy Policy</span> and <span className='text-[#0f7c90]'>Terms of Service </span>apply.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default MockExamComments;
