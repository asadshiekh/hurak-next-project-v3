import React from 'react'
import { LuBookMinus } from "react-icons/lu";

const VerticleCourseCards = ({idx,image,title,study,provider,price}) => {
  return (
    <div>
         <div
            key={idx}
            className="bg-white flex flex-col"
            >
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{title}</h3>
            {provider && 
            <p className="text-gray-500 mt-1">{provider}</p>
            }
            {study && 
            <p className="text-gray-500 mt-1 text-custom-17"><LuBookMinus className='inline-block mr-2' />{study}</p>
            }
            
            <p className="text-gray-500 mt-1 font-light text-sm">From <strong className='font-bold text-lg text-gray-900 '>{price}</strong></p>
        </div>
    </div>
  )
}

export default VerticleCourseCards