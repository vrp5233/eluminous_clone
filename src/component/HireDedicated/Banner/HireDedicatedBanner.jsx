import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonCustom from "../../Button/ButtonCustom";
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
} from "./HireDedicatedBanner.style";
const HireDedicatedBanner = ({ allData }) => {
  const stars = [
    "RiStarSFill",
    "RiStarSFill",
    "RiStarSFill",
    "RiStarSFill",
    "RiStarSFill",
  ];
  const filePath = window.location.origin + "/images/HireDedicated/";
  const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  return (
          <>
            <HireDedicatedBannerWrapper>
              <Container>
                <Row>
                  <Col>
                    <TitleWrap className="blue">
                      {allData.title}
                      <span class="blackTurmeric fw400 d-block text-uppercase">
                        {allData.titleSpan}
                      </span>
                    </TitleWrap>
                    <SmallTitleWrap>{allData.smallTitle}</SmallTitleWrap>
                    <ParagraphWrap>{allData.paragraph}</ParagraphWrap>
                    <ButtonCustom
                      BtnTransparent={true}
                      linkUrl={allData.btnLink}
                      titleText={allData.btnText}
                      colorChange=""
                    />
                  </Col>
                  <Col>
                    <ImgWrapper>
                      <img
                        src={filePath + `${allData.imgSrc}`}
                        alt={allData.imgAlt}
                        class="img-fluid"
                      />
                      <ClutchReview>
                        <ClutchLogoRate className="d-flex align-items-center justify-content-between">
                          <img
                            src="images/HireDedicated/clutch.webp"
                            alt="Clutch"
                          />
                          <StarWrap className="d-flex align-items-center">
                            <span>5.0</span>
                            <ul className="d-flex">
                              {stars.map((value, index) => {
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
                            <li className="d-flex justify-content-center align-items-center" key={listMenu.img}>
                              <span className="d-flex flex-column">
                                <div class="icon">
                                  <img
                                    src={fileIconsPath + `${listMenu.img}.svg`}
                                    alt={listMenu.title}
                                    className="w-100"
                                  />
                                </div>
                                <div class="text fw600 black p-0">
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

export default HireDedicatedBanner;
