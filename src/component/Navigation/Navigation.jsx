import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import MenuList from "./MenuList";
import ButtonCustom from "../Button/ButtonCustom";
import "./Navigation.css";
import {
  NavigationWrapper,
  NavigationToolbarWrapper,
} from "./Navigation.style";

const Navigation = () => {
  const filePath = window.location.origin + "/images/";
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 10
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    
    <NavigationWrapper>
      <Container>
        <NavigationToolbarWrapper>
          <MdEmail /> biz@eluminoustechnologies.com
        </NavigationToolbarWrapper>
      </Container>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={filePath + "eluminous-pvt-ltd_black.svg"} alt="Logo" />
              {/* <img src={filePath + `${whyTechData.whyTechs.imgLogo}`} alt="Logo" /> */}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className=" w-100 d-flex justify-content-center" navbarScroll>
              <MenuList />
            </Nav>
          </Navbar.Collapse>
          <ButtonCustom
            BtnTransparent={false}
            linkUrl="/about-us"
            titleText="Get a Quote"
            colorChange=""
          />
        </Container>
      </Navbar>
    </NavigationWrapper>
  );
};

export default Navigation;
