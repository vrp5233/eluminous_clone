import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FooterWrapper,
  GreyWrapper,
  Wrap,
  Heading,
  LinkList,
} from "./Footer.style";

function Footer() {
  return (
    <>
      <FooterWrapper>
        <Container>
          <GreyWrapper>
            <Row>
              <Col sm={8}>
                <Wrap>
                  <Heading>Services</Heading>
                  <LinkList>
                    <li>
                      <Link to="/web-application-development/">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/mobile-app-development/">
                        Mobile Apps Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/front-end-development/">
                        Front End Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/data-analytics-and-bi/">
                        Data Analytics &amp; BI
                      </Link>
                    </li>
                    <li>
                      <Link to="/dedicated-developer/">
                        Hire Dedicated Developers
                      </Link>
                    </li>
                    <li>
                      <Link to="/digital-marketing-services/">
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link to="/virtual-assistant-services/">
                        Virtual Assistant
                      </Link>
                    </li>
                  </LinkList>
                </Wrap>
              </Col>
            </Row>
          </GreyWrapper>
        </Container>
      </FooterWrapper>
    </>
  );
}

export default Footer;
