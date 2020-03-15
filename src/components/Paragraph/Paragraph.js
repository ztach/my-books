import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sx};
  color: ${({ theme }) => theme.secondaryTab[6]};
  font-weight: ${({ theme }) => theme.light};
`;

export const TextArea = styled.textarea`
  width: 55%;
  height: 12%;
  border: none;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.sxx};
  color: ${({ theme }) => theme.secondaryTab[6]};
  font-weight: ${({ theme }) => theme.bold};
  z-index: -5;
`;
