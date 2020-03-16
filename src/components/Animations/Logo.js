import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Logo from '../../assets/Logo.svg';
import styled from "styled-components";

const StyledObrazek = styled.div`
  padding: 2px;
`;

const LogoPicture = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const okrag = elements.getElementById("Okrag");
    const tekst = elements.getElementById("Tekst");
    gsap.set(
      [okrag, ...tekst.children], { autoAlpha: 0 });
    
    gsap.set(okrag, { transformOrigin: "50% 100%" });
    gsap.set(tekst, { transformOrigin: "50% 100%" });

    const tl1 = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl1
      .fromTo(okrag, { scaleY: 0 }, { duration: 5, autoAlpha: 1, scaleY: 1 })
      .fromTo(tekst.children, { scaleY: 0 }, { duration: 0.5, autoAlpha: 1, scaleY: 1, stagger: 0.3 })
  }, []);

  return (
    <StyledObrazek ref={wrapper}>
      <Logo />
    </StyledObrazek>
  );
};

export default LogoPicture;
