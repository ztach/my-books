import styled from "styled-components";

export const StyledPageText = styled.div`
  width: 100%;
  height: 100vh;

  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.secondaryTab[6]};

  h1,
  h2,
  h3,
  p {
    text-align: right;
    padding: 0 0 0 50px;
  }
`;

export const StyledWrapper = styled.div`
  width: 55%;
  height: 100vh;
`;
