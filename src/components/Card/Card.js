import React from "react";
import styled, { css } from "styled-components";
import Avatar from "../Avatar/Avatar";

const CardWrapper = styled.div`
  display: block;
  margin: 10px;
  min-width: 300px;
  max-width: 300px;
  background-color: hsla(180, 100%, 25%, .05);

  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;

  position: relative;
  display: flex;
  flex-direction: column;
  :hover {
    background-color: hsla(180, 100%, 25%, 1.05);
    color: white;
  }
`;

const StyledHeading = styled.div`
  margin: 15px 0 10px;
  font-size: 1.3rem;
  font-weight: 600;
`;

const StyledLink = styled.div`
  margin: 5px 0 0;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: black;
    a {
      text-decoration: none;
      font-weight: 600;
    }

    a:hover {
      color: red;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

const InnerWrapper = styled.div`
  padding: 0;
  margin:0:
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight:${({ theme }) => theme.bold};

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
    redirect: false
  };

  render() {
    const { data, link, contDoc, pageContext, image } = this.props;

    const { fixed: { src } } = image;

    return (
      <CardWrapper onClick={this.handleCardClick}>
        <InnerWrapper activecolor={pageContext}>
          <StyledHeading>{contDoc}</StyledHeading>
          <Avatar icon={src} />
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{data}</Paragraph>

          <StyledLink dangerouslySetInnerHTML={{ __html: link }} />
        </InnerWrapper>
        <InnerWrapper activecolor={pageContext} />
      </CardWrapper>
    );
  }
}

export default Card;
