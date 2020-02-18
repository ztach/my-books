import React from 'react';
import withContext from '../../hoc/withContext';
import withLogin from '../../hoc/withLogin';
import UserPageTemplate from '../../templates/UserPageTemplate';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledWrapper = styled.div`
  top: 10%;
  transform: translate(50% 50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 60vw;
  height: 70vh;
  background-color: white;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  position: fixed;
`;

const StyledButton = styled(Button)`
font-size:${({ theme }) => theme.fontSize.s};
 background-color: ${({ theme, activecolor }) => theme[activecolor]};
`;

const Modal = (props) => {
  const { closeModal } = props.login;

  return (
    <UserPageTemplate>
      <StyledWrapper>
        <p>to jest modal</p>
        <StyledButton activecolor={this.props.pageContext} onClick={closeModal}>
          exit
        </StyledButton>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

export default withContext(withLogin(Modal));
