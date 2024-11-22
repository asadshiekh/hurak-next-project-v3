import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const Detail = () => {
  const certificate = [
    {
      number: '512786',
      status: 'Certified',
      name: 'Fire Marshal',
      CertificateName: 'Fire Marshal (Fire Warden) Online',
      completion: '05 Nov, 2023',
      expiry: '05 Nov, 2026'
    }
  ];

  return (
    <div className="container pb-10">
  <div className="overflow-x-auto mt-5">
  <table className="min-w-full table-auto">
    <thead>
      <tr className="border-t-2">
        <th className="px-4 py-2 text-left">Certificate Number</th>
        <th className="px-4 py-2 text-left">Status</th>
        <th className="px-4 py-2 text-left">Learner Name</th>
        <th className="px-4 py-2 text-left">Certificate Name</th>
        <th className="px-4 py-2 text-left">Completion Date</th>
        <th className="px-4 py-2 text-left">Expiry Date</th>
      </tr>
    </thead>
    <tbody className="bg-[#f2f2f2]">
      {certificate.map((cert, index) => (
        <tr key={index} className="border-t-2 align-top">
          <td className="px-4 py-2 text-left align-top">{cert.number}</td>
          <td className="px-4 py-2 flex  text-[#038103]">
            <p className="text-[20px] pt-1 pr-2 flex items-center">
                <FiCheckCircle />
            </p>
            {cert.status}
        </td>

          <td className="px-4 py-2 text-left">{cert.name}</td>
          <td className="px-4 py-2 text-left">{cert.CertificateName}</td>
          <td className="px-4 py-2 text-left">{cert.completion}</td>
          <td className="px-4 py-2 text-left">{cert.expiry}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
</div>

  );
};

export default Detail;
