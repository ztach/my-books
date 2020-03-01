import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const NavigationWrapper = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Montserrat";
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Logo = styled.span`
  font-weight: 700;
`

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 37px;

  ::hover {
    cursor: pointer;
  }

  .active {
    padding: 5px 15px;
    background-color: rgb(48, 5, 146);
    color: yellow;
  }
`

const Navigation = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsIndexpagetitle {
        logo {
          fixed(height: 98) {
            tracedSVG
            src
            sizes
          }
        }
      }
    }
  `)

  return (
    <NavigationWrapper>
      <Logo>
        <Link to="/" activeClassName="active">
          <img
            src={data.datoCmsIndexpagetitle.logo.fixed.src}
            alt="moje logo"
          />
        </Link>
      </Logo>
      <NavigationList>
        <NavigationListItem>
          <Link to="/booksArticle" activeClassName="active">
            Lista książek
          </Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/authorArticle" activeClassName="active">
            Lista autorów
          </Link>
        </NavigationListItem>

        <NavigationListItem>
          <Link to="/authorDay" activeClassName="active">
            Pisarz dnia
          </Link>
        </NavigationListItem>

        <NavigationListItem>
          <Link to="/contact" activeClassName="active">
            Kontakt
          </Link>
        </NavigationListItem>

        <NavigationListItem>
          <Link to="/faq" activeClassName="active">
            Komentarze
          </Link>
        </NavigationListItem>

        <NavigationListItem>
          <Link to="/about" activeClassName="active">
            O mnie
          </Link>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  )
}

export default Navigation
