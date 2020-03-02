import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import axios from "axios";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 0 50px;
  margin-right: 50px;
  text-align: justify;
`;

const StyledLabel = styled.label`
  display: block;
  width: 25%;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  margin: 15px 0;
  border: 1px solid black;
`;

const StyledInput = styled.input`
  display: block;
  width: 50%;
  padding: 10px;
  font-size: 20px;
  margin: 15px 0;
  border: 1px solid black;
`;

const StyledArea = styled.textarea`
  display: block;
  height: 100px;
  width: 50%;
  padding: 10px;
  border: 1px solid black;
  font-size: 20px;
`;

const StyledButton = styled.button`
  display: block;
  margin: 30px;
  width: 150px;
  padding: 15px;
  background-color: blanchedalmond;
  font-size: 25px;
  font-weight: 700;
`;

const ContactPreview = () => {
  return (
    <StyledWrapper>
      <h1>Napisz do mnie</h1>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
              values.email
            )
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
        }) => (
          <form onSubmit={handleSubmit}>
            <StyledLabel htmlFor="name"> name</StyledLabel>
            <StyledInput
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />

            <StyledLabel htmlFor="email"> email</StyledLabel>
            <StyledInput
              id="email"
              type="email"
              name="email"
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
