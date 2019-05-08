import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"


const validateEmail = values => {
  let errors = {}
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if(!values.email) errors.email = 'Required'
  else if (!regex.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export const FormikForm = () => {
  return (
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
          <label>username: </label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label>password: </label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
        
      )}
    </Formik>
  </div>
)
}

