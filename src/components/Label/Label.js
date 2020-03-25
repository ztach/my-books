import styled from "styled-components";

const Label = styled.label`
  display: block;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.secondaryTab[6]};
`;

export default Label;
