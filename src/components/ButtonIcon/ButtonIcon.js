import styled from 'styled-components';

const ButtonIcon = styled.button`
  & {
    position: relative;
    display: block;
    margin: 5px 15px 45px 15px;
    width: 60px;
    height: 60px;
    border-radius: 20px;
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 60% 60%;

    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &.active {
    background-color: white;
  }

  &:hover {
    background-color: white;
  }

  &[data-descr]::after {
    display: block;
    margin: 0 auto;
    content: attr(data-descr);
    text-align: center;
    text-transform: uppercase;

    position: absolute;
    left: 50%;
    top: 60px;

    transform: translateX(-50%);

    border: 1px solid
      ${({ activecolor, theme }) =>
        activecolor ? theme[activecolor] : theme.wspolnoty};
    border-radius: 10px;

    padding: 5px 10px;
    color: ${({ theme }) => theme.secondaryTab[7]};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    font-weight: ${({ theme }) => theme.bold};
    z-index: 100;
  }
`;

export default ButtonIcon;
