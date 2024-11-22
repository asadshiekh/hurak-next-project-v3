"use client"
import { useState } from 'react';
import { FaEnvelope, FaPoundSign, FaBook } from "react-icons/fa";
const PaymentOptions = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
   
    <div>
                <div>
                  <label className="block  bg-[#def1fa] border-[2px] border-[#0f7c90] py-5 px-3 text-[20px]">
                    <input
                      type="radio"
                      value="creditCard"
                      checked={paymentMethod === "creditCard"}
                      onChange={handlePaymentMethodChange}
                      className="mr-2 transform scale-125"
                    />
                    Credit Card
                  </label>

                  {paymentMethod === "creditCard" && (
                    <div className=" bg-[#efefef] p-6 border  shadow-sm mb-5">
                      <form className="space-y-4">
                        {/* Card Number */}
                        <div className="flex flex-col">
                          <label
                            className="text-sm font-medium text-gray-700"
                            htmlFor="card-number"
                          >
                            Card number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <input
                              id="card-number"
                              type="text"
                              placeholder="1234 1234 1234 1234"
                              className="w-full border border-gray-300 px-4 py-2 pr-20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>

                        {/* Expiration Date and CVC */}
                        <div className="flex space-x-4">
                          {/* Expiration Date */}
                          <div className="flex-1">
                            <label
                              className="text-sm font-medium text-gray-700"
                              htmlFor="expiry-date"
                            >
                              Expiration date{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              id="expiry-date"
                              type="text"
                              placeholder="MM / YY"
                              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                          {/* CVC */}
                          <div className="flex-1">
                            <label
                              className="text-sm font-medium text-gray-700"
                              htmlFor="cvc"
                            >
                              CVC <span className="text-red-500">*</span>
                            </label>
                            <input
                              id="cvc"
                              type="text"
                              placeholder="CVC"
                              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>

                        {/* Save Card Details */}
                        <div className="flex items-center">
                          <input
                            id="save-card"
                            type="checkbox"
                            className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <label
                            htmlFor="save-card"
                            className="ml-2 block text-sm text-gray-700"
                          >
                            Save card details
                          </label>
                        </div>
                      </form>
                    </div>
                  )}
                </div>

                <div className="">
                  <label className="block bg-[#fff] border-l-[2px] border-r-[2px] border-b-[2px] border-[#dedede] py-5 px-3 text-[20px]">
                    <input
                      type="radio"
                      value="invoice"
                      checked={paymentMethod === "invoice"}
                      onChange={handlePaymentMethodChange}
                      className="mr-2 transform scale-125"
                    />
                    Pay by Invoice
                  </label>

                  {paymentMethod === "invoice" && (
                    <div className="bg-[#efefef] p-6 border shadow-sm">
                      <div className="flex justify-between space-x-4 ">
                        {/* First item */}
                        <div className="flex flex-col items-center text-center">
                          <FaEnvelope className="text-4xl text-primary mb-4" />
                          <h3 className="text-lg font-semibold mb-2">
                            1 - We'll email you a link to your invoice
                          </h3>
                          <p>
                            If someone else is making the payment, you can
                            forward this email onto them.
                          </p>
                        </div>

                        {/* Second item */}
                        <div className="flex flex-col items-center text-center">
                          <FaPoundSign className="text-4xl text-primary mb-4" />
                          <h3 className="text-lg font-semibold mb-2">
                            2 - Your invoice must be paid within 7 days or
                            before any course starts, whichever is sooner
                          </h3>
                          <p>
                            You can pay using a credit or debit card.
                            Unfortunately, we don’t accept cheque payments.
                          </p>
                        </div>

                        {/* Third item */}
                        <div className="flex flex-col items-center text-center">
                          <FaBook className="text-4xl text-primary mb-4" />
                          <h3 className="text-lg font-semibold mb-2">
                            3 - Course access will be provided to the student(s)
                          </h3>
                          <p>
                            Once payment has been made, instructions on how to
                            access the course(s) will be sent by email.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="">
                  <label className="block bg-[#fff] border-l-[2px] border-r-[2px] border-b-[2px] border-[#dedede] py-5 px-3 text-[20px]">
                    <input
                      type="radio"
                      value="klarna"
                      checked={paymentMethod === "klarna"}
                      onChange={handlePaymentMethodChange}
                      className="mr-2 transform scale-125"
                    />
                    Pay by Klarna
                  </label>

                  {paymentMethod === "klarna" && (
                    <div className="bg-[#efefef] p-6 shadow-sm mb-5">
                      <p className="text-[20px]">
                        With Klarna, you can shop now and pay later. Follow the
                        instructions provided by Klarna to complete your
                        purchase.
                      </p>
                      <div className="flex justify-between items-end w-full mt-5">
                        <div>
                          {" "}
                          <p className="text-[20px]">£79.66/month</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-[14px]">Total</span>
                          <span className="text-[20px] font-medium">£239</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

  );
};

export default PaymentOptions;
