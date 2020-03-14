import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 0 50px;
  margin-right: 50px;
  text-align: justify;
`;

export const StyledLabel = styled.label`
  display: block;
  width: 25%;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  margin: 15px 0;
  border: 1px solid black;
`;

export const StyledInput = styled.input`
  display: block;
  width: 50%;
  padding: 10px;
  font-size: 20px;
  margin: 15px 0;
  border: 1px solid black;
`;

export const StyledArea = styled.textarea`
  display: block;
  height: 100px;
  width: 50%;
  padding: 10px;
  border: 1px solid black;
  font-size: 20px;
`;

export const StyledButton = styled.button`
  display: block;
  margin: 30px;
  width: 150px;
  padding: 15px;
  background-color: #222286;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;

  color: white;
  font-size: 25px;
  font-weight: 700;
`;
