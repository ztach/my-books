import styled from 'styled-components';

const Avatar = styled.img`
  width: 46px;
  height: 46px;
  
  border-radius: 50px;
  position: absolute;
  right: -40px;
  top: -10px;

  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 110%;
  background-size: 100%;
`;

export default Avatar;
