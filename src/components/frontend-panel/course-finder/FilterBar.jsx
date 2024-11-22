import React from 'react'

const FilterBar = () => {
    const categories = [
        "Accounting and Finance",
        "Business",
        "Construction",
        "First Aid",
        "Health and Care",
        "Health and Safety",
        "Hospitality",
        "Lifestyle",
        "Marketing",
        "Personal Development",
        "Security",
        "Teaching & Academics",
      ];
  return (
    <div>
        <div>
            <h4>Subjects</h4>
            <div className='categories text-lg'>
                {categories.map((category, index) => (
                    <label key={index} className="flex items-center space-x-3">
                    <input
                        type="radio"
                        name="category"
                        value={category}
                        className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="text-gray-700">{category}</span>
                    </label>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FilterBar