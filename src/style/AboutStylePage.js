import styled from "styled-components";

export const StyledButton = styled.button`
  position: absolute;
  top: 100px;
  right: 50px;
  width: 200px;
  padding: 20px 30px;
  border: none;
  background-color: ${({ theme }) => theme.secondaryTab[6]};
  font-size: ${({ theme }) => theme.fontSize.x};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.secondaryTab[0]};
`;

export const StyledWrapper = styled.div`
  display: grid;
  width: 100%;

  ${({ state }) =>
    state === "light"
      ? `background: linear-gradient(
    to bottom,
        #d0d8f5 0%,
        #8B98C5 40%,
        #5C6BA5 60%,
        #3D4E8C 100%
  )
`
      : `background: linear-gradient(
    to top,
        #d0d8f5 0%,
        #8B98C5 40%,
        #5C6BA5 60%,
        #3D4E8C 100%
  )
`};
`;

export const StyledPageDownWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border-top: 1px solid black;
`;

export const StyledPageWrapper = styled.div`
  padding: 100px 0 0 50px;
  width: 80%;
  height: 100vh;
  border-top: 1px solid black;

  h2 {
    background-color: ${({ theme }) => theme.secondaryTab[3]};
    font-size: ${({ theme }) => theme.fontSize.lxx};
    font-weight: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.secondaryTab[0]};
  }

  div table:nth-child(2) {
    background-color: ${({ theme }) => theme.secondaryTab[0]};
  }

  div table:nth-child(8) {
    background-color: green;
  }

  div table:nth-child(9) {
    background-color: red;
  }

  .styleLinks {
    width: 60%;
    padding: 20px;
    background-color: ${({ theme }) => theme.secondaryTab[1]};

    p {
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.bold};
      text-transform: uppercase;

      a {
        text-transform: none;
        text-decoration: none;
        padding: 10px;
      }
      a:hover {
        background-color: ${({ theme }) => theme.secondaryTab[5]};
        color: ${({ theme }) => theme.secondaryTab[0]};
        transform: scale(1.2);
      }
    }
  }

  table.main {
    border: none;
    background-color: ${({ theme }) => theme.secondaryTab[1]};
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }
  table.main td,
  table.main th {
    border: none;
    padding: 3px 2px;
  }
  table.main tbody td {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: ${({ theme }) => theme.fontSize.sx};
  }

  table.main tbody td p {
    font-size: ${({ theme }) => theme.fontSize.sx};
    font-weight: ${({ theme }) => theme.bold};
  }

  table.main tbody td img {
    display: block;
    top: 0;
    right: 0;
    width: 120px;
    height: 160px;
    font-size: ${({ theme }) => theme.fontSize.sx};
    font-weight: ${({ theme }) => theme.bold};
    background-color: ${({ theme }) => theme.secondaryTab[1]};
  }

  table.main tbody td p li {
    font-size: ${({ theme }) => theme.fontSize.l};
    background-color: ${({ theme }) => theme.secondaryTab[0]};
  }

  table.main tr:nth-child(even) {
    background: ${({ theme }) => theme.secondaryTab[1]};
  }
  table.main thead {
    background: ${({ theme }) => theme.secondaryTab[5]};
  }
  table.main thead th {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.bold};
  }
  table.main thead th:first-child {
    border-left: none;
  }

  table.serwisy {
    border: none;
    background-color: ${({ theme }) => theme.secondaryTab[1]};
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  }
  table.serwisy td,
  table.serwisy th {
    border: none;
    padding: 3px 2px;
  }
  table.serwisy tbody td {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: ${({ theme }) => theme.fontSize.sx};
  }

  table.serwisy tbody td p {
    font-size: ${({ theme }) => theme.fontSize.sx};
    font-weight: ${({ theme }) => theme.bold};
  }

  table.serwisy tbody td img {
    display: block;
    top: 0;
    right: 0;
    font-size: ${({ theme }) => theme.fontSize.sx};
    font-weight: ${({ theme }) => theme.bold};
    background-color: ${({ theme }) => theme.secondaryTab[1]};
  }

  table.serwisy tbody td p li {
    font-size: ${({ theme }) => theme.fontSize.l};
    background-color: ${({ theme }) => theme.secondaryTab[0]};
  }

  table.serwisy tr:nth-child(even) {
    background: ${({ theme }) => theme.secondaryTab[1]};
  }
  table.serwisy thead {
    background: ${({ theme }) => theme.secondaryTab[2]};
  }
  table.serwisy thead th {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.bold};
  }
  table.serwisy thead th:first-child {
    border-left: none;
  }

  .styleLinks--link {
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.secondaryTab[6]};

    :hover {
      background-color: ${({ theme }) => theme.secondaryTab[6]};
      color: ${({ theme }) => theme.secondaryTab[0]};
    }
  }
`;
