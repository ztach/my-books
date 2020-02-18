import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.qwintaly};
  margin-bottom: 25px;
`;

export default Label;
