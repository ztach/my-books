import styled, { css } from 'styled-components';
import magnifierIcon from '../../assets/icons/magnifier.svg';

const Input = styled.input`
  display: block;
  position: relative;
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.grey100};
  padding: 15px 30px;
  color: ${({ theme }) => theme.secondaryTab[0]};
  border: none;
  border-radius: 5px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    text-overflow: ellipsis;
    transform: rotateZ(-1deg);

    color: ${({ theme }) => theme.grey300};
  }

  :focus::placeholder {
    color: ${({ theme }) => theme.grey300};
    z-index: 999;
    position: absolute;
    top: 20px;
    transform: translateY(-30px);
    transition: transform 1s ease-in-out;
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `};
`;

export default Input;
