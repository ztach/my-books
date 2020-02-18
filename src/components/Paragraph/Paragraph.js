import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.x};
  font-weight: ${({ theme }) => theme.light};
`;

export default Paragraph;
