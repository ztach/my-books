import styled from "styled-components";

export const BookWrapper = styled.div`
  width: 50%;
  margin: 150px 0 0 50px;
 font-size:${({sFont}) => `${sFont}px` };

  div p {
      font-size:${({ sFont }) => `${sFont}px` };
      line-height: ${({ sFont }) => `${sFont+10}px` };
      text-align: justify;    
  }

  ul,
  li,
  p {
      text-align: justify;
      font-size:${({ sFont }) => `${sFont}px` };
      line-height: ${({ sFont }) => `${sFont+10}px` };
    }

`;

export const BookDetails = styled.div`
  margin: 10px;
  padding-top: 30px;

  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    text-decoration: none;
    list-style: none;
  }

  li {
    display: flex;
    margin: 5px 20px;
    p {
      width: 80px;
      font-weight: 600;
      margin: 0 20px;
    }
  }
`;

export const StyledImageText = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: 25vw;
  height: 610px;
  background-image: url(${({ cover }) => cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
