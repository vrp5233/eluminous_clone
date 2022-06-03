import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, ButtonGroup, Container } from "react-bootstrap";
import { NavigationWrapper } from "./Navigation.style";

const Navigation = () => {
   const navigation = [
      { name: "home", href: "/", current: true },
      { name: "About", href: "/about", current: false },
   ];

   return (
      <NavigationWrapper expand="lg">
         <Container>
            <Navbar.Brand href="#">
               <Link to="/">
                  <img src="images/eluminous-pvt-ltd_black.svg" alt="Logo" />
               </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="ml-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
               >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Services</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                     <NavDropdown.Item href="#action3">Services 2</NavDropdown.Item>
                     <NavDropdown.Item href="#action4">Services 2</NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </NavigationWrapper>
   );
};

export default Navigation;
