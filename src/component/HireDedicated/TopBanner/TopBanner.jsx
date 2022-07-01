import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkCustom from "../../Button/LinkCustom";
import { RiStarSFill } from "react-icons/ri";

import {
  HireDedicatedBannerWrapper,
  TitleWrap,
  SmallTitleWrap,
  ParagraphWrap,
  ImgWrapper,
  ClutchReview,
  ClutchLogoRate,
  StarWrap,
  List,
} from "./TopBanner.style";
const TopBanner = ({ allData }) => {
  // const filePath = window.location.origin + "/images/";
  return (
    <>
      <HireDedicatedBannerWrapper>
        <Container>
          <Row>
            <Col>
              <TitleWrap className="blue">
                {allData.title}
                <span className="blackTurmeric fw400 d-block text-uppercase">
                  {allData.titleSpan}
                </span>
              </TitleWrap>
              <SmallTitleWrap>{allData.smallTitle}</SmallTitleWrap>
              <ParagraphWrap>{allData.paragraph}</ParagraphWrap>
              <LinkCustom
                BtnTransparent={true}
                linkUrl={allData.btnLink}
                titleText={allData.btnText}
                colorChange=""
              />
            </Col>
            <Col>
              <ImgWrapper>
                <img
                  // src={filePath + `HireDedicated/${allData.imgSrc}`}
                  // src={`/images/HireDedicated/${allData.imgSrc}`}
                  src={allData.imgSrc}
                  alt={allData.imgAlt}
                  className="img-fluid"
                />
                <ClutchReview>
                  <ClutchLogoRate className="d-flex align-items-center justify-content-between">
                    <img
                      src="/images/HireDedicated/clutch.webp"
                      alt="Clutch"
                    />
                    <StarWrap className="d-flex align-items-center">
                      <span>5.0</span>
                      <ul className="d-flex">
                        {[1, 2, 3, 4, 5].map((value, index) => {
                          return (
                            <li key={index}>
                              <RiStarSFill />
                            </li>
                          );
                        })}
                      </ul>
                    </StarWrap>
                  </ClutchLogoRate>
                  <p className="p-0">{allData.clutchReviewText}</p>
                </ClutchReview>
                <List>
                  {allData.listMenus.map((listMenu, index) => {
                    return (
                      <li
                        className="d-flex justify-content-center align-items-center"
                        key={listMenu.img}
                      >
                        <span className="d-flex flex-column">
                          <div className="icon">
                            <img
                              // src={filePath + `HireDedicated/icons/${listMenu.img}`}
                              // src={`/images/HireDedicated/icons/${listMenu.img}`}
                              src={listMenu.img}
                              alt={listMenu.title}
                              className="w-100"
                            />
                          </div>
                          <div className="text fw600 black p-0">
                            {listMenu.title}
                          </div>
                        </span>
                      </li>
                    );
                  })}
                </List>
              </ImgWrapper>
            </Col>
          </Row>
        </Container>
      </HireDedicatedBannerWrapper>
    </>
  );
};

export default TopBanner;
