import Image from "next/image";

const CSCSCards = [
    { src: 'https://hurak.com/public/front_panel_assets/images/Green-Labourer-General-Operative-Card.webp', alt: 'Course Image 1', Validity: 'validity - 5 years', heading: 'Experienced Technical, Supervisor or Manager', description: 'For Supervisors with on the job experience (normally at least one year in the last three years)' },
    { src: 'https://hurak.com/public/front_panel_assets/images/Red-CSCS-Experienced-Worker-Card.webp', alt: 'Course Image 2', Validity: 'Validity - 1 year', heading: 'CSCS Apprentice Card', description: 'For applicants who have started (or about to start) a recognised apprenticeship framework.' },
    { src: 'https://hurak.com/public/front_panel_assets/images/Blue-CSCS-Skilled-Worker-Card.webp', alt: 'Course Image 3', Validity: 'Validity - 5 years', heading: 'CSCS Green Card - Labourers Card', description: 'For General Labourers and Site Operatives' },
    { src: 'https://hurak.com/public/front_panel_assets/images/Red-CSCS-Trainee-Card.webp', alt: 'Course Image 3', Validity: 'Validity - 5 years', heading: 'Experienced Worker Card', description: 'For applicants who are registered to a complete a Construction Related NVQ or SVQ Level 2.' },
];

const CSCSLicenceCards = () => {

    return (
        <div className="grid md:grid-cols-2 gap-4 mb-5">
            {CSCSCards.map((items, index) => (
                <div key={index} className="flex flex-col justify-between bg-gray-100 rounded-xl border border-gray-300 overflow-hidden">
                    <div>
                        <Image
                            src={items.src}
                            alt={items.alt}
                            className="w-full h-auto"
                            loading='lazy'
                            width="400"
                            height="300"
                        />
                        <div className="p-3">
                            <h2 className="text-xl font-semibold">{items.heading}</h2>
                            <h5 className="my-2 text-base font-semibold">{items.Validity}</h5>
                            <p className="text-lg">{items.description}</p>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="w-1/2 text-center border-gray-300 border-t border-r p-3">Know more</button>
                        <button className="w-1/2 duration-200 bg-[#17a2b8] hover:bg-primary text-white font-semibold text-center border-gray-300 border-t p-3">Apply now</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CSCSLicenceCards;