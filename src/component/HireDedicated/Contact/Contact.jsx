import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import HireForm from "./Form/HireForm";
import { WhyTechWrapper, ImgBox, TextBox } from "./Contact.style";
const Contact = ({ whyTechData }) => {
  const filePath = window.location.origin + "/images/HireDedicated/";
  const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  return (
    <>
      <WhyTechWrapper>
        <Container>
          <Row>
            <Col xxl={6}>
              <ImgBox>
                <img src={filePath + "contact-bg.png"} alt="Contact Banner" />
                <TextBox></TextBox>
              </ImgBox>
            </Col>
            <Col xxl={6} className="d-flex align-items-center">
              <HireForm />
            </Col>
          </Row>
        </Container>
      </WhyTechWrapper>
    </>
  );
};

export default Contact;
