import React from "react";
import { Link } from "gatsby";
import View from "../components/User/View";
import Status from "../components/User/Status";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: beige;
  z-index: 5000;
`;

const UserPage = () => (
  <StyledWrapper>
    <Status />
    <View title="Simple Authentication Example">
      <p>
        This is a simple example of creating dynamic apps with Gatsby that require user authentication. It uses concepts
        from the
        {` `}
        <a href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/">
          client-only routes section
        </a>
        {` `}
        of the “Building Apps with Gatsby” documentation.
      </p>
      <p>
        For the full experience, go to
        {` `}
        <Link to="/app/profile">your profile</Link>.
      </p>
    </View>
  </StyledWrapper>
);

export default UserPage;
