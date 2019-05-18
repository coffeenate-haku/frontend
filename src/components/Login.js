import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "@emotion/styled";
// import axios from "axios";
import { connect } from "react-redux";
import { login } from "../redux/actions/profileAction";

const Container = styled.div`
  display: grid;
`;

const Button = styled.button`
  background-color: #4c3a32;
  color: #f5f1e8;
  border-style: none;
  padding: 5px 10px;
`;

const style = {
  field: {
    marginBottom: "10px",
    padding: "5px 10px"
  }
};

const validateEmail = values => {
  let errors = {};
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!values.email) errors.email = "Required";
  else if (!regex.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const Login = props => {
  return (
    <Container>
      <h2>Sign in</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validateEmail}
        onSubmit={async (values, { setSubmitting }) => {
          const userLogin = {
            email: values.email,
            password: values.password
          };

          await props.login(userLogin);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field
                style={style.field}
                placeholder="Email"
                type="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field
                style={style.field}
                autocomplete="current-password"
                placeholder="Password"
                type="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Sign in
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default connect(
  null,
  { login }
)(Login);
