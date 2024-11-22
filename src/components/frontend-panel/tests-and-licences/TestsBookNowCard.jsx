'use client';

import ButtonFill from "@/components/global/butttons/ButtonFill";
import { useState, useEffect } from "react";
import { GoPlus, GoDash } from "react-icons/go";
// import BasicModal from '@/components/global/modal-windows/BasicModal';

const TestsBookNowCard = ({ setOpen }) => {

    const [showSticky, setShowSticky] = useState(`lg:relative -top-64`);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 450) {
                setShowSticky('lg:sticky top-2');
            } else {
                setShowSticky(`lg:relative -top-64`);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [Qty, setQty] = useState(parseInt(1, 10));

    const handleIncrement = () => {
        setQty(prevQty => parseInt(prevQty + 1, 10));
    }

    const handleDecrement = () => {
        setQty(prevQty => (prevQty > 1 ? parseInt(prevQty - 1, 10) : prevQty));
    }

    return (
        <>

            <div className={`text-[17px] lg:border rounded lg:shadow-lg lg:p-5 w-full lg:w-[370px] bg-white ${showSticky}`}>


                <div className="flex items-center justify-between border-b pb-8 mb-8">
                    <div>
                        <p className="font-bold">Test information</p>
                        <p>Book it yourself</p>
                    </div>
                    <div>
                        <p className="font-bold">£22.50</p>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <p>Let us book it for you</p>
                    <p>£37.50</p>
                </div>
                <div className="flex items-center justify-between my-1">
                    <p>Test resources</p>
                    <p>£0.00</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-bold">Total</p>
                    <p>£37.50</p>
                </div>

                <div className="flex border border-gray-300 rounded my-2">
                    <button className="p-3" onClick={handleDecrement}>
                        <GoDash />
                    </button>
                    <input className="text-center w-full border-x border-gray-300" type="number" onInput={(e) => setQty(parseInt(e.target.value), 10)} min={1} value={Qty} />
                    <button className="p-3" onClick={handleIncrement}>
                        <GoPlus />
                    </button>
                </div>
                <ButtonFill color={"danger"} text={"Book Now"} />

                <p className="hidden lg:block font-semibold my-1">Free Mock Test</p>

                <div className="hidden lg:block py-2 mt-2 border-t">
                    <p className="text-xl font-bold">Need on-site training?</p>
                    <p className="text-sm">Tell us your requirements and get your staff trained on site anywhere in the UK.</p>
                    <button onClick={() => { setOpen('Requirments') }} className="bg-white text-primary border-primary ease-in-out duration-500 hover:text-white hover:bg-primary border mt-3 py-2 rounded font-semibold w-full">Enter requirments</button>
                </div>

            </div>

        </>
    );
};

export default TestsBookNowCard;
