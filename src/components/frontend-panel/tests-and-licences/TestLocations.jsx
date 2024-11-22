"use client"
import React, { useState, useEffect } from 'react'

import { FiMapPin } from "react-icons/fi";
import { LiaSearchLocationSolid } from "react-icons/lia";
import Skeleton from '@/components/global/Skeletons/Skeleton';



const TestLocations = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLocation, setFilteredLocations] = useState([]);

    const filteredLocationData = [
        {
            name: 'London'
        },
        {
            name: 'Bristol'
        },
        {
            name: 'Builth Wells'
        },
        {
            name: 'Hereford'
        },
        {
            name: 'Isle of Arran'
        },
        {
            name: 'York'
        },
    ];


    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchTerm(query);

        const filtered = filteredLocationData.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredLocations(filtered);
    };


    useEffect(() => {
        setFilteredLocations(filteredLocationData);
    }, []);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    return (
        <section className="my-8">
            <h2 className="text-2xl font-semibold mb-4">All Test Locations</h2>

            <div className='flex items-center border rounded mb-8 py-3'>
                <LiaSearchLocationSolid className='mx-2' size={30} />
                <input value={searchTerm} onChange={handleSearch} placeholder='Find locations' className='text-lg w-full outline-none' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {loading ? (
                    [1,2,3,4,5,6].map((item,index)=>(
                    <Skeleton style={'h-10 w-[100%] bg-neutral-200 mt-5'} />
                    ))
                ) : (
                    filteredLocation.length > 0 ?
                        filteredLocation.map((item, index) => (
                            <a key={index} href={`/tests-locations/citb-test-location-${item.name.toLowerCase()}`} className='flex items-center py-2 rounded border border-gray-300 bg-gray-100 hover:bg-gray-200 ease-in-out duration-300 text-lg'>
                                <FiMapPin className='mx-2' />
                                <span>{item.name}</span>
                            </a>
                        ))
                        :
                        <p className='flex items-center col-span-3'>
                            <FiMapPin className='mx-2' />
                            <span>0 locations match your search</span>
                        </p>
                )}
            </div>


        </section>
    )
}

export default TestLocations