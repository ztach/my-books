import styled from "styled-components";

export const StyledWrapper = styled.div`
  text-align: justify;

  h2 {
    font-size: 20px;
    color: red;
    padding-right: 130px;
  }

  h3 {
    font-size: 18px;
  }

  h2::first-letter {
    font-size: 50px;
    font-weight: 700;
  }

  table tbody tr td:nth-child(2) {
    padding-left: 40px;
  }
`;

export const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: white;
  height: 40px;

  :hover {
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
    cursor: pointer;
    text-decoration: none;
  }

  img {
    width: 50px;

    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.15);
    border-radius: 2px;
  }
`;

export const StyledBlock = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 2;
  justify-items: center;

  h2 {
    width: 100%;
    font-size: 20px;
    color: #222286;
    margin-left: 50px;
    padding: 0 10px 0 0;
  }
`;
