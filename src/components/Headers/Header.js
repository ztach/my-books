import styled from "styled-components";

export const Header1 = styled.h1`
  color: ${({ theme }) => theme.secondaryTab[6]};
  font-size: ${({ theme }) => theme.fontSize.mxx};
  font-weight: ${({ theme }) => theme.bold};
  padding-right: 130px;
`;

export const Header2 = styled.h2`
  width: 100%;
  padding: 0 40px;
  color: ${({ theme }) => theme.secondaryTab[4]};
  font-size: ${({ theme }) => theme.fontSize.sx};

  ::first-letter {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.bold};
  }
`;

export const Header3 = styled.h3`
  width: 100%;
  padding: 0 40px;
  color: ${({ theme }) => theme.secondaryTab[7]};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  }
`;

export const HeaderWrapper = styled.div`
  padding: 150px 0 0 50px;
  margin-right: 50px;
  text-align: justify;
`;
