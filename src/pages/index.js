import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 50%;
  height: 100vh;

  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-weight: 700;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin: 0;
  }
  p {
    margin: 20px 0 40px;
    width: 50%;
  }
`

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 42%;
  height: 100vh;
  object-fit: cover;
  background-color: ${({ theme }) => theme.index};
  z-index: 100;
`


const Auth0Context = React.createContext();
export { Auth0Context }


const IndexPage = ({
  data: {
    datoCmsIndexpagetitle: {
      author,
      title,
      description,
      subtitle,
      logo,
      picturebiblioteka,
    },
  },
}) => {
  return (
    <Fragment>
      <StyledWrapper>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <span>{author}</span>
      </StyledWrapper>
      <ImageWrapper fluid={picturebiblioteka.fluid} />
    </Fragment>
  )
}

export const query = graphql`
  {
    datoCmsIndexpagetitle {
      title
      subtitle
      description
      welcome
      author
      picturebiblioteka {
        fluid(maxWidth: 800, maxHeight: 1200) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
