import React from "react"
import { Link } from "gatsby"
import Logo from '../../components/Animations/Logo';
import {
  NavigationWrapper,
  NavigationList,
  NavigationListItem
} from '../../style/NavigationStyle';


const Navigation = () => {

  return (
    <NavigationWrapper>

        <Link to="/" activeClassName="active">
          <Logo />
        </Link>
      
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
