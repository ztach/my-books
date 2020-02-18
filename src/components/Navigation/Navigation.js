import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

const NavigationWrapper = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat';
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  margin-right: 30px;
`;

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 37px;

  ::hover {
    cursor: pointer;
  }
`;

const Navigation = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "Logo-books" }) {
        childImageSharp {
          fixed(
            height: 80
            width: 80
            quality: 100
            duotone: { highlight: "#aaafff", shadow: "#11122f" }
            rotate: 90
          ) {
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <NavigationWrapper>
      <Logo>
        <Link to="/">
          <img src={data.file.childImageSharp.fixed.src} alt="moje logo" />
        </Link>
      </Logo>
      <NavigationList>
        <NavigationListItem>
          <Link to="/booksArticle">BooksArticle</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/booksGalery">BooksGalery</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/contact">Contact</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/about">About</Link>
        </NavigationListItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
