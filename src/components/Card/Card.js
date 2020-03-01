import React from 'react';
import withContext from '../../hoc/withContext';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';
import Paragraph from '../Paragraph/Paragraph';
import Heading from '../Heading/Heading';
import Avatar from '../Avatar/Avatar';

const CardWrapper = styled.div`
  display: block;
  margin: 10px;
  min-width: 300px;
  max-width: 400px;

  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight:${({ theme }) => theme.bold}

  background-color: ${({ activecolor, theme }) =>
    activecolor ? theme[activecolor] : 'white'};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `};
`;

class Card extends React.Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const {
      pageContext,
      icon,
      id,
      reprezentant,
      tel,
      email,
      opis,
    } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageContext}/details/${id}`} />;
    }

    return (
      <CardWrapper onClick={this.handleCardClick}>
        <InnerWrapper activecolor={pageContext}>
          <StyledHeading>{reprezentant}</StyledHeading>
          {pageContext !== 'zarzadcy' && (
            <Avatar icon={icon} activecolor={pageContext} />
          )}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{opis}</Paragraph>
        </InnerWrapper>
        <InnerWrapper activecolor={pageContext}>
          {tel && <div>tel.: {tel}</div>}
          {email && <div>email: {email} </div>}
        </InnerWrapper>
      </CardWrapper>
    );
  }
}

export default withContext(Card);
