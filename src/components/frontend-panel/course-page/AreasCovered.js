"use client"
import { useState } from 'react';

const AreasCovered = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Health and Safety Law',
      content: 'You will learn about legislation, including the Health and Safety at Work, etc. Act related to health and safety. You will learn the legal duties of the employers, self-employed, and employees to promote health and safety awareness and effective safety management standards. This topic will also cover the CDM regulations that cover health, safety, and welfare management on construction projects.',
    },
    { title: 'Accident, Injuries and Work-related Health', content: 'You will learn about legislation, including the Health and Safety at Work, etc. Act related to health and safety.' },
    { title: 'Risk Assessments and Method Statements', content: 'You will learn about legislation, including the Health and Safety at Work, etc. Act related to health and safety.' },
  ];

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleSection = (index) => {
    if (expanded) return;
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="areascovered bg-white py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-black text-3xl font-medium mb-5">Areas Covered</h2>
        <button
          onClick={toggleExpand}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          {expanded ? 'Collapse all sections' : 'Expand all sections'}
        </button>
      </div>

      <div className="border border-gray-200 rounded-md">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </button>
            <div
              className={`${
                expanded || activeSection === index ? 'block' : 'hidden'
              } p-4 bg-white text-gray-600`}
            >
              {section.content || 'No content available for this section.'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasCovered;
