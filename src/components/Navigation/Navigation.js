import React from "react"

import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import {
  NavigationWrapper,
  Logo,
  NavigationList,
  NavigationListItem
} from '../../style/NavigationStyle';



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
