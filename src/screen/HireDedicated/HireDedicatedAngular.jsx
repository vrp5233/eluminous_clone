import React from "react";
import Base from "../../core/Base";
import { HireAngularData } from "../../data/hireDedicatedDevelopers";
import TopBanner from "../../component/HireDedicated/TopBanner/TopBanner";
import Expertise from "../../component/HireDedicated/Expertise/Expertise";
import WhyTech from "../../component/HireDedicated/WhyTech/WhyTech";
import ReviewSlider from "../../component/HireDedicated/ReviewSlider/ReviewSlider";
const HireDedicatedAngular = () => {
  return (
    <Base>
      {/* <GlobleStyles /> */}
      <TopBanner allData={HireAngularData} />
      <Expertise expertiseData={HireAngularData} />
      <WhyTech whyTechData={HireAngularData} />
      <ReviewSlider ReviewSliderData={HireAngularData} />
    </Base>
  );
};

export default HireDedicatedAngular;
