import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

const style = {
  container: {
    display: "flex"
  },

  form: {
    textAlign: "center"
  },

  placeholder: {
    textAlign: "center"
  }
}

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
    <div style={style.container}>
      <div>
          <h1>Login</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={validateEmail}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({ isSubmitting }) => (
              
              <Form>
              <div>
                  <Field style={style.placeholder} placeholder="Username" type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div>
                  <Field style={style.placeholder} placeholder="Password" type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
              </Form>
              
            )}
          </Formik>
        </div>
      </div>
)
}

