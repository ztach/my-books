import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";

export const PreviewWrapperB = styled(Link)`
  display: black;
  position: relative;
  width: 80%;
  height: 360px;
  margin:auto;

`;

export const PreviewInfoLabelB = styled.div`
  position: absolute;
  left: -35px;
  min-width: 320px;
  min-height: 40px;
  background-color: #292986;
  color: white;
  padding: 5px 15px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxxs};

  h2,
  p {
    margin: 5px;
    text-align: color;
  }
`;

export const PreviewWrapperA = styled(Link)`
  position: relative;
  width: 80%;
  height:100%;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
`;

export const PreviewInfoLabelA = styled.div`
  display: block;
  max-width: 400px;
  min-width: 350px;
  background-color: #292986;
  color: white;
  padding: 5px 15px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xxxs};

  h2,
  p {
    margin: 5px;
    text-align: color;
  }
`;

export const StyledImg = styled.img`
  width: 64.1%;
  height: 81%;
  border: none;
  border: .5px solid hsla(100, 0%, 0%, 90.5);
  margin: 0 0 0 20px;
  object-fit: cover;
  background: url(${({ cover }) => cover}) no-repeat;
  background-size: 204px;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;
`;

export const StyledImage = styled(Image)`
  width: 70%;
  height: 80%;
  object-fit: cover;
  object-position:center;
  
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;
`;
