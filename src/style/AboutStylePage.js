import styled from 'styled-components';

export const StyledButton = styled.button`
  position:absolute;
  top:100px;
  right: 50px;
  width: 160px;
  padding: 20px 30px;
  border: none;
  background-color: rgba(150, 84, 134,.4) 
`;

export const StyledWrapper = styled.div`
  display:grid;
  width: 100%;
 ${({state}) => state === 'light' ? 
`background: linear-gradient(
    to bottom,
    rgba(255, 201, 230,.4) 0%,
    rgba(55, 200, 181,.4) 20%,
    rgba(214, 248, 234,.4)  40%,
    rgba(248, 208, 214,.4) 60%,
    rgba(150, 84, 134,.4) 80%,
    rgba(255, 170, 21,.4) 100%
  )
`
  :
  `background: linear-gradient(
    to top,
    rgba(255, 201, 230,.4)   0%,
    rgba(55, 200, 181,.4)   20%,
    rgba(214, 248, 234,.4)  40%,
    rgba(248, 208, 214,.4)  60%,
    rgba(150, 84, 134,.4)   80%,
    rgba(255, 170, 21,.4)   100%
  )
`
 }
`;

export const StyledPageDownWrapper = styled.div`
  width:100%;
  height:100vh;
  border-top:1px solid black;

`;

export const StyledPageWrapper = styled.div`
  padding: 80px 0 0 50px;
  width:80%;
  height:100vh;
border-top:1px solid black;
  h2 {
    font-size: 50px;
  }


  .styleLinks {
    width: 60%;
    padding: 20px;
    background-color: rgba(248, 214, 214, 0.459);
    color: red;

    p {
      font-weight: 700;
      text-transform: uppercase;

      a {
        text-transform: none;
        text-decoration: none;
      }
      a:hover {
        background-color: rgb(146, 25, 25);
        color: rgb(246, 250, 9);
        transform: scale(1.2);
      }
    }
  }
`;
