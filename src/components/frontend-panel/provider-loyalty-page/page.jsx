
'use client'
import { useState } from 'react';
import ProviderSkillSaver from './providerSkillSaver';
import SkillPercentage from './percentageSection';
import SkillSaverDiscount from './skillSaverDiscount';
import FAQList from './skillSaverFaqs';
// import TeachingJourney from '../advertise-on-hurak/teachingJourney';



const ProviderLoyaltyPage = () => {
    return (
        <div>
            <div className="pt-6 pb-[70px] lg:mt-10 max-w-[1140px] lg:mx-auto mx-6">
                <ProviderSkillSaver />
               {/* <TeachingJourney></TeachingJourney> */}
                <SkillPercentage />
                <SkillSaverDiscount />
                <div className="mt-10 mb-4">
                    <FAQList />
                </div>
            </div>
        </div>
    )
}

export default ProviderLoyaltyPage;