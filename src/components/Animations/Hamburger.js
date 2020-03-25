import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hamburger from "../../assets/Hamburger.svg";
import styled from "styled-components";

const StyledObrazek = styled.div`padding: 2px;`;

const HamburgerButtnon = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const hamburger = elements.getElementById("Hamburger");

    gsap.set([hamburger, ...hamburger.children], { autoAlpha: 0 });

    gsap.set(hamburger, { transformOrigin: "50% 100%" });

    const tl1 = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl1
      .fromTo(hamburger, { scaleY: 0 }, { duration: 5, autoAlpha: 1, scaleY: 1 })
      .fromTo(hamburger.children, { scaleY: 0 }, { duration: 0.5, autoAlpha: 1, scaleY: 1, stagger: 0.3 });
  }, []);

  return (
    <StyledObrazek ref={wrapper}>
      <Hamburger />
    </StyledObrazek>
  );
};

export default HamburgerButtnon;
