import React from "react";
import Base from "../../core/Base";
import { HireReactData } from "../../data/hireDedicatedDevelopers";
import TopBanner from "../../component/HireDedicated/TopBanner/TopBanner";
import Expertise from "../../component/HireDedicated/Expertise/Expertise";
import WhyTech from "../../component/HireDedicated/WhyTech/WhyTech";
const HireDedicatedReact = () => {
  return (
    <Base>
      <TopBanner allData={HireReactData} />
      <Expertise expertiseData={HireReactData} />
      {/* <WhyTech whyTechData={HireReactData} /> */}
    </Base>
  );
};

export default HireDedicatedReact;
