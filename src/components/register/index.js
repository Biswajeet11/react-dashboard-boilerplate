import React from "react";
import { Formik } from "formik";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { CardWrapper } from "../wrapper";

import "./style.scss";

export const RegisterForm = () => (
  <div>
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Col lg="8">
          <CardWrapper
            content="Create Account"
            footerContent="Have an account?Go to login"
          >
            <Formik
              initialValues={{
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                confirmPassword: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="Enter first name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Enter last name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </Form.Group>
                  {errors.email && touched.email && errors.email}
                  <Row>
                    <Col>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      {errors.password && touched.password && errors.password}
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          placeholder="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group>
                    <Button variant="primary" type="submit" block>
                      Create Account
                    </Button>
                  </Form.Group>
                </Form>
              )}
            </Formik>
          </CardWrapper>
        </Col>
      </Row>
    </Container>
  </div>
);
