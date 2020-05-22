import React from "react";
import { Formik } from "formik";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { CardWrapper } from "../wrapper";

import "./style.scss";

export const LoginForm = () => (
  <div>
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Col lg="5">
          <CardWrapper
            content="Login"
            footerContent="Need an account? Sign up!"
          >
            <Formik
              initialValues={{ email: "", password: "" }}
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
                  {errors.password && touched.password && errors.password}
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember password" />
                  </Form.Group>
                  <Form.Group className="button-group">
                    <a href="/">Forgot Password?</a>
                    <Button variant="primary" type="submit">
                      Login
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
