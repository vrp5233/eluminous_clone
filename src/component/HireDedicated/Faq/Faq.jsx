import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

// import ButtonCustom from "../../Button/ButtonCustom";
// import svg1 from "../../../assets/images/HireDedicated/icons/cross-platform.svg";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HireTitle } from "../../../GlobalStyle.style";
import { Wrapper } from "./Faq.style";
const Faq = ({ faqsData }) => {
  // const filePath = window.location.origin + "/images/HireDedicated/";
  // const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  // src={filePath + `${whyTechData.whyTechs.imgSrc}`}
  return (
    <>
      <Wrapper className="greyBg">
        <Container>
          <HireTitle className="text-center">FAQ's</HireTitle>
          <Accordion defaultActiveKey="0">
            {faqsData.faqs.faqLists.map((faq, index) => {
              return (
                <Accordion.Item eventKey={faq.id}>
                  <Accordion.Header>
                    {faq.title} <HiOutlineChevronDown />
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{faq.paragraph}</p>
                    {/* <ul>
                      {faq.ulLists.map((ulList, index) => {
                        return <li>{ulList.ulList}</li>;
                      })}
                    </ul> */}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Container>
      </Wrapper>
    </>
  );
};

export default Faq;