import styled from 'styled-components';

const Avatar = styled.img`
  width: 66px;
  height: 66px;
  border: 5px solid
    ${({ activecolor, theme }) => (activecolor ? theme[activecolor] : 'white')};

  border-radius: 50px;
  position: absolute;
  right: 15px;
  top: 15px;

  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 110%;
`;

export default Avatar;
