import styled from "styled-components";
import Image from "gatsby-image";

export const StyledButton = styled.button`
  position: absolute;
  top: 10px;
  right: ${({size}) =>  `${size+10}px` }  ;
  width: 40px;
  border: none;
  background-color: rgba(150, 84, 134,.4);
  font-size: 30px;
  color: white;
  font-weight: 600;
`;


export const BiographyDetailWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 50px;
  top: 50px;
  padding: 20px;
  font-size:${({sFont}) => `${sFont}px` };

  div p {
    font-size:${({ sFont }) => `${sFont}px` };
    line-height: ${({ sFont }) => `${sFont+10}px` };
    
    
  }

  p {
      font-size:${({ sFont }) => `${sFont}px` };
      line-height: ${({ sFont }) => `${sFont+10}px` };
    }

  background-color: ${({ format }) =>
    format === "standard"
      ? "rgba(56, 81, 134,0.2)"
      : format === "small"
      ? "rgba(146, 167, 30,0.2)"
      : "rgba(146, 67, 3,0.2)"};

  h1 {
    margin: 0 0 20px;
  }

  h4 {
    display: inline-block;
    margin-left: 250px;
    margin-top: -200px;
  }
`;

export const StyledImage = styled(Image)`
  display: inline-block;
  width: 10%;

  object-fit: cover;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;
`;
