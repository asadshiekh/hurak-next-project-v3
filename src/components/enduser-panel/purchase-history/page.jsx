const { default: Header } = require("../header")
import ButtonOutline from "@/components/global/butttons/ButtonOutline";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";

const Purchasehistory = () => {
    const orders = [
        { id: 1, order_no: '#12345678', date: '20 September 2024', total_price: '£36.29', order_status: 'paid' },
        { id: 2, order_no: '#12300000', date: '20 September 2024', total_price: '£62.29', order_status: 'unpaid' },
        { id: 3, order_no: '#12388740', date: '20 November 2024', total_price: '£40.29', order_status: 'paid' },
        { id: 4, order_no: '#12388740', date: '20 November 2024', total_price: '£40.29', order_status: 'paid' },
    ]
    return (
        <div>
            <Header breadcrum={"Purchase history"} headerText={"Purchase history"} />
            <div className="lg:ml-auto md:ml-auto m-auto lg:w-3/5 my-5 mb-10 pt-2 pb-5">
                <div className="text-center mb-5 pb-5">
                    <p className="text-3xl">Purchase history</p>
                    <p className="text-lg mt-2 mx-4">Your payment info and transactions made online</p>
                </div>

                {/* Render table only if orders are available */}
                {orders?.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-center">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 hidden md:table-row">
                                    <th className="py-4 text-start pl-6">Purchase history</th>
                                    <th className="py-4 px-2 text-start pl-12">Date</th>
                                    <th className="py-4 px-2">Total Price</th>
                                    <th className="py-4 px-2">Order Status</th>
                                    <th className="py-4 px-2">Receipt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="shadow-md block md:table-row mb-4 md:mb-0 border-b md:border-none text-center">
                                        <td className="flex md:table-cell flex-col items-start lg:ml-0 md:ml-0 ml-6 py-4 text-start md:pl-5">
                                            <div className="flex items-center relative">
                                                <div className="py-3 px-3 rounded-full shadow-xl">
                                                    <SlBasket className="text-2xl" />
                                                </div>
                                                <div className="lg:text-sm md:text-sm text-lg ml-3  text-red-500 font-bold">
                                                    {order.order_no} <br />
                                                    {order.order_status === 'paid' ? (
                                                        <span className="bg-green-600 absolute right-0 top-[-8px]  md:hidden w-[50px] px-1 text-white rounded text-sm my-3 mb-5">
                                                            {order.order_status}
                                                        </span>
                                                    ) : (
                                                        <span className="bg-red-500 md:hidden absolute right-0 top-[-8px] w-[60px] text-white px-1 rounded text-sm my-3 mb-5">
                                                            {order.order_status}
                                                        </span>
                                                    )}
                                                    <span className="text-black font-medium lg:text-base md:text-md text-lg">
                                                        1 Product purchased
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="flex md:table-cell flex-row items-start lg:ml-0 md:ml-0 ml-10">
                                            <p className="lg:text-md md:text-md text-lg">{order.date}</p>
                                        </td>
                                        <td className="flex md:table-cell flex-row items-start lg:ml-0 md:ml-0 ml-10 md:font-bold lg:font-bold">
                                            <p className="lg:text-md md:text-md font-bold text-lg">{order.total_price}</p>
                                        </td>
                                        <td className="flex md:table-cell flex-row items-start ml-12 lg:block md:block hidden mt-4">
                                            {order.order_status === 'paid' ? (
                                                <p className="bg-green-600 w-[40px] text-white rounded text-sm my-3 mb-5">{order.order_status}</p>
                                            ) : (
                                                <p className="bg-red-500 w-[50px] text-white rounded text-sm my-3 mb-5">{order.order_status}</p>
                                            )}
                                        </td>
                                        <td className="flex md:table-cell flex-row items-start lg:ml-0 md:ml-0 ml-10 mb-4">
                                            <div className="flex justify-center">
                                                <Link href="/user-receipt/135654774">
                                                    <ButtonOutline color={"primary"} size={"sm"} text={"Receipt"} />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center">No purchase history available.</p>
                )}
            </div>
        </div>
    )
}

export default Purchasehistory;