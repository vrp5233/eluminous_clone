import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { FromWrap, FormTitle, FormSubTitle } from "./HireForm.style";
import { BtnWrap } from "../../../../GlobalStyle.style";
const HireForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <FromWrap>
      <FormTitle className="fw700 text-uppercase text-center">
        LET’S tALK
      </FormTitle>
      <FormSubTitle className="fw400 text-center">
        Ready to create an unique experience? Let's get in touch!
      </FormSubTitle>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control required type="text" placeholder="Full Name" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control required type="text" placeholder="Company Name" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control required type="email" placeholder="Email" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control required type="phone" placeholder="Mobile Number" />
            </Form.Group>
          </Col>
          <Col sm={12}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control required as="textarea" rows={3} />
            </Form.Group>
          </Col>
          <Col sm={6}>
            {/* <BtnWrap BtnTransparent={true}>
              <Button variant="primary" type="submit">
                Submit <CgArrowLongRight />
              </Button>
            </BtnWrap>
            <BtnWrap BtnTransparent={true}>
              <Link to="/">
                Link
                <CgArrowLongRight />
              </Link>
            </BtnWrap> */}
          </Col>
        </Row>
      </Form>
    </FromWrap>
  );
};

export default HireForm;
