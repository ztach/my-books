import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { Header1 } from "../Headers/Header";
import { StyledWrapper, StyledLabel, StyledInput, StyledArea, StyledButton } from "./ContactPreviewStyle";

const ContactPreview = () => {
  return (
    <StyledWrapper>
      <Header1>Napisz do mnie</Header1>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("https://us-central1-mybook-email.cloudfunctions.net/sendEmail", values)
            .then(res => {
              setSubmitting(false);
            })
            .catch(err => {
              console.log(err);
              setSubmitting(false);
            });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <StyledLabel htmlFor="name"> name</StyledLabel>
            <StyledInput
              id="name"
              type="text"
              name="name"
              placeholder="Twoje imię to?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />

            <StyledLabel htmlFor="email"> email</StyledLabel>
            <StyledInput
              id="email"
              type="email"
              name="email"
              placeholder="podaj swojego maila"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}

            <StyledLabel htmlFor="message"> message</StyledLabel>
            <StyledArea
              id="message"
              type="text"
              name="message"
              placeholder="co masz do mnie"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && errors.message}
            <StyledButton type="submit" disabled={isSubmitting}>
              Submit
            </StyledButton>
          </form>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default ContactPreview;
