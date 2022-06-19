import React from "react";
import ButtonCustom from "../Button/ButtonCustom";
import { Col } from "react-bootstrap";
// import svg1 from "../../../assets/images/HireDedicated/icons/cross-platform.svg";
// import CaseStudiesimg from "https://eluminoustechnologies.com/hire-dedicated-developer/hire-angular-developers/FDA-compliant-eCommerce.webp";
import {
  CaseBox,
  CaseImg,
  CaseText,
  Title,
  Paragraph,
} from "./CaseStudy.style";
const CaseStudy = ({ CaseStudyData }) => {
  const filePath = window.location.origin + "/images/CaseStudies/";
  // const filePathIcon = "https://pawardemo.000webhostapp.com/images/CaseStudies/";
  // const filePathIcon = "https://pawardemo.000webhostapp.com/images/CaseStudies/";
  return (
    <>
      {CaseStudyData.caseSudies.map((CaseSudie, index) => {
        return (
          <Col className="d-flex" key={CaseSudie.id}>
            <CaseBox key={index} className="d-flex">
              <CaseImg>
                <img
                  // src="images/CaseStudies/front-end-development.webp"
                  // src={filePath + `${CaseSudie.image}`}
                  src={CaseSudie.image}
                  // src={CaseStudiesimg}
                  height={100}
                  width={100}
                  alt="Title"
                />
              </CaseImg>
              <CaseText>
                <Title
                  className="black fw600"
                  dangerouslySetInnerHTML={{
                    __html: CaseSudie.title,
                  }}
                ></Title>
                <Paragraph>{CaseSudie.paragraph}</Paragraph>
                <ButtonCustom
                  ParentClass="text-center mt-auto"
                  BtnTransparent={true}
                  target="_blank"
                  // linkUrl={`images/CaseStudies/${CaseSudie.pdfLink}`}
                  linkUrl={CaseSudie.pdfLink}
                  titleText="Download PDF"
                  colorChange=""
                />
              </CaseText>
            </CaseBox>
          </Col>
        );
      })}
    </>
  );
};

export default CaseStudy;
