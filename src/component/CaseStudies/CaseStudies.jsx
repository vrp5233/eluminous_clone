import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonCustom from "../../Button/ButtonCustom";
// import svg1 from "../../../assets/images/HireDedicated/icons/cross-platform.svg";
import {
  ExpertiseWrapper,
  TitleWrap,
} from "./CaseStudies.style";
const Expertise = ({ expertiseData }) => {
  const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  const filePath = window.location.origin + "/images/HireDedicated/";
  return (
    <>
      <ExpertiseWrapper className="black">
        <Container>
          <TitleWrap>{expertiseData.expertiseIns.title}</TitleWrap>
          <Row>
                <Col xxl={3}>
                </Col>
          </Row>
          <ButtonCustom
            ParentClass="text-center"
            BtnTransparent={true}
            linkUrl={expertiseData.btnLink}
            titleText={expertiseData.btnText}
            colorChange=""
          />
        </Container>
      </ExpertiseWrapper>
    </>
  );
};

export default Expertise;
