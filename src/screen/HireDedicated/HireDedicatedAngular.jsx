import React from "react";
import Base from "../../core/Base";
import { HireAngularData } from "../../data/hireDedicatedDevelopers";
import HireDedicatedBanner from "../../component/HireDedicated/Banner/HireDedicatedBanner"
import HireDedicatedExpertise from "../../component/HireDedicated/Expertise/HireDedicatedExpertise"
const HireDedicatedAngular = () => {
  return (
    <Base>
      <HireDedicatedBanner allData={HireAngularData} />
      <HireDedicatedExpertise expertiseData={HireAngularData}/>
    </Base>
  );
};

export default HireDedicatedAngular;
