import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonCustom from "../../Button/ButtonCustom";
// import svg1 from "../../../assets/images/HireDedicated/icons/cross-platform.svg";
import {
  HireDedicatedExpertiseWrapper,
  TitleWrap,
  SmallTitleWrap,
  ExpertiseBox,
  ExpertiseBoxTitle,
  ExpertiseBoxPara,
} from "./HireDedicatedExpertise.style";
const HireDedicatedExpertise = ({ expertiseData }) => {
  // const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  return (
    <>
      <HireDedicatedExpertiseWrapper className="black">
        <Container>
          <TitleWrap>{expertiseData.expertiseIns.title}</TitleWrap>
          <SmallTitleWrap>{expertiseData.expertiseIns.subTitle}</SmallTitleWrap>
          <Row>
            {expertiseData.expertiseIns.expertLists.map((expertList, index) => {
              return (
                <Col xxl={3}>
                  <ExpertiseBox>
                    <span>
                      <img
                        // src={fileIconsPath + `${expertList.expertImage}`}
                        src={expertList.expertImage}
                        alt="Title"
                      />
                    </span>
                    <ExpertiseBoxTitle class="title">
                      {expertList.expertTitle}
                    </ExpertiseBoxTitle>
                    <ExpertiseBoxPara dangerouslySetInnerHTML={{__html: expertList.expertSubTitle}}>
                      {/* {expertList.expertSubTitle} */}
                    </ExpertiseBoxPara>
                  </ExpertiseBox>
                </Col>
              );
            })}
          </Row>
          <ButtonCustom
            ParentClass="text-center"
            BtnTransparent={true}
            linkUrl="#contact-form-top"
            titleText="Hire Angular Developer"
            colorChange=""
          />
        </Container>
      </HireDedicatedExpertiseWrapper>
    </>
  );
};

export default HireDedicatedExpertise;
