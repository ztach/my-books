import React from "react";
import styled from "styled-components";

import ContactPreview from "../components/ContactPreview/ContactPreview";

const StyledWrapper = styled.div`
  padding: 150px 0 0 50px;
  margin-right: 50px;
  text-align: justify;
`;

const ContactPage = () => {
  return (
    <StyledWrapper>
      <ContactPreview />
    </StyledWrapper>
  );
};

export default ContactPage;
