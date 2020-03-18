import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 150px 0 0 50px;
  margin-right: 50px;
  text-align: justify;

  font-size: ${({ sFont }) => `${sFont}px`};
  line-height: ${({ sFont }) => `${sFont + 10}px`};

  div p {
    text-align: justify;
    font-size: ${({ sFont }) => `${sFont}px`};
    line-height: ${({ sFont }) => `${sFont + 10}px`};
  }

  p {
    text-align: justify;
    font-size: ${({ sFont }) => `${sFont}px`};
    line-height: ${({ sFont }) => `${sFont + 10}px`};
  }

  img {
    width: 150px;
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.945);
    border-radius: 15px;
  }

  h2 {
    background-color: ${({ theme }) => theme.secondaryTab[3]};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.secondaryTab[0]};
    line-height: 30px;
    padding: 20px 10px;
    margin: 50px 0 30px 0;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    align-content: space-between safe;

    img {
      margin-left: auto;
      width: 100px;
    }
  }
  h2::first-letter {
    font-size: ${({ theme }) => theme.fontSize.lxx};
    font-weight: ${({ theme }) => theme.bold};
  }

  h3 {
    margin: 50px 250px;
  }

  table tbody tr td:nth-child(2) {
    padding-left: 40px;
  }
`;
