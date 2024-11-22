import React from 'react'

const WhoThisCourse = () => {
  return (
    <div>
         <div className='whoisthisblock bg-[#eeeeee] p-5 text-left border-[1px] rounded border-[#E2D9E2] mt-5'>
            <h2 className='text-black text-3xl font-medium mb-5'>Who is this course for?</h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <li className='font-medium'>✓ Individuals looking to work in the construction industry at entry-level positions</li>
                <li className='font-medium'>✓ Individuals who want to perform security guarding duties on site</li>
                <li className='font-medium'>✓ Individuals already working in the construction industry</li>
            </ul>
        </div>
    </div>
  )
}

export default WhoThisCourse