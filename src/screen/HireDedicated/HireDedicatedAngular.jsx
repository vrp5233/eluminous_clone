import React from "react";
import Base from "../../core/Base";
import {
  HireAngularData,
  HireCaseStudiesData,
  HireReviewData,
} from "../../data/hireDedicatedDevelopers";
import TopBanner from "../../component/HireDedicated/TopBanner/TopBanner";
import Expertise from "../../component/HireDedicated/Expertise/Expertise";
import WhyTech from "../../component/HireDedicated/WhyTech/WhyTech";
import ReviewSlider from "../../component/HireDedicated/ReviewSlider/ReviewSlider";
import CaseStudies from "../../component/CaseStudies/CaseStudies";
import Faq from "../../component/HireDedicated/Faq/Faq";
const HireDedicatedAngular = () => {
  return (
    <Base>
      {/* <GlobleStyles /> */}
      <TopBanner allData={HireAngularData} />
      <Expertise expertiseData={HireAngularData} />
      <WhyTech whyTechData={HireAngularData} />
      <ReviewSlider ReviewSliderData={HireReviewData} />
      <CaseStudies CaseStudyData={HireCaseStudiesData} />
      <Faq faqsData={HireAngularData} />
    </Base>
  );
};

export default HireDedicatedAngular;
