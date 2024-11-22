import React from 'react'
import HeroSection from "@/components/frontend-panel/home-page/HeroSection";
import Services from "@/components/frontend-panel/home-page/Services";
import HomeSlider from "@/components/frontend-panel/home-page/HomeSlider";
import FeaturedTopicsSection from "@/components/frontend-panel/home-page/FeaturedTopicsSection";
import UpskillYourTeamSection from "@/components/frontend-panel/home-page/UpskillYourTeamSection";
import UpSkillYourTeamSection1 from "@/components/frontend-panel/home-page/UpSkillYourTeamSection1";
import ContactUsSection from "@/components/global/ContactUsSection";
import BrandingSection from "@/components/global/BrandingSection";

const HomePage = () => {
  
  return (
    <div>
        <HeroSection />
        <Services/>
        <hr/>
        <HomeSlider/>
        <FeaturedTopicsSection/>
        <UpskillYourTeamSection/>
        <UpSkillYourTeamSection1 />
        <BrandingSection />
        <ContactUsSection />
    </div>
  )
}

export default HomePage