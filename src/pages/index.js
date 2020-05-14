import React, { useEffect, useRef } from "react";
import { logout } from "../utils/auth";
import { graphql } from "gatsby";
import { StyledWrapper, StyledPageText } from "../style/IndeksPageStyle";
import ImageWrapper from "../components/Images/ImageWrapper";
import { TextArea } from "../components/Paragraph/Paragraph";
import { Header1, Header2 } from "../components/Headers/Header";
import KubekKawy from "../components/Animations/KubekKawy";
import { gsap } from "gsap";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  border: none;
  padding: 15px;
`;

const IndexPage = ({
  data: { datoCmsIndexpagetitle: { author, title, description, subtitle, logo, picturebiblioteka } }
}) => {
  const hellou = useRef(null);

  useEffect(() => {
    const [tytul, podtytul, opis, autor] = hellou.current.children;

    gsap.set([tytul, podtytul, opis, autor], { autoAlpha: 0 });

    const tl1 = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl1
      .fromTo(tytul, { x: "-=300" }, { x: "+=300", duration: 3, autoAlpha: 1 })
      .fromTo(podtytul, { x: "+=300" }, { x: "-=300", duration: 2, autoAlpha: 1 })
      .fromTo(opis, { x: "-=300" }, { x: "+=300", duration: 2, autoAlpha: 1 })
      .fromTo(autor, { x: "+=300" }, { x: "-=300", duration: 2, autoAlpha: 1 });
  }, []);

  return (
    <StyledWrapper>
      <KubekKawy />
      <StyledPageText ref={hellou}>
        <Header1>{title}</Header1>
        <Header2>{subtitle}</Header2>

        <TextArea defaultValue={description} />
        <Header2>{author}</Header2>
      </StyledPageText>
      <StyledButton onClick={() => logout()}>
        <span>{author}</span>
      </StyledButton>

      <ImageWrapper img={picturebiblioteka.fluid} />
    </StyledWrapper>
  );
};

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
`;

export default IndexPage;
