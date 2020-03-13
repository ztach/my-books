import styled from "styled-components"

export const StyledWrapper = styled.div`
    padding: 150px 0 0 50px;
    margin-right: 50px;
    text-align: justify;

    font-size:${({ sFont }) => `${sFont}px` } inherit!;
    line-height: ${({ sFont }) => `${sFont+10}px` } inherit!;
  
    div p {
        text-align: justify;        
        font-size:${({ sFont }) => `${sFont}px` } inherit!;
        line-height: ${({ sFont }) => `${sFont+10}px` } inherit!;
    }

    p {
        text-align: justify inherit!;        
        font-size:${({ sFont }) => `${sFont}px` } inherit!;
        line-height: ${({ sFont }) => `${sFont+10}px` } inherit!;
    }

  img {
    width: 150px;
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.945);
    border-radius: 15px;
  }

  h2 {
    font-size: 20px;
    line-height: 30px;
    color: red;
    margin: 50px 0 30px 0;
  }

  h3 {
    margin: 50px 250px;
  }

  h2::first-letter {
    font-size: 50px;
    font-weight: 700;
  }

  table tbody tr td:nth-child(2) {
    padding-left: 40px;
  }
`
