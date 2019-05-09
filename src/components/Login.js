import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "@emotion/styled";

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

export const FormikForm = () => {
  return (
    <Container>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validateEmail}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field
                style={style.field}
                placeholder="Username"
                type="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field
                style={style.field}
                placeholder="Password"
                type="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
