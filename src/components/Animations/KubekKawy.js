import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Kubek from "../../assets/Kubek.svg";
import styled from "styled-components";

const StyledObrazek = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const KubekKawy = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const Kubek = elements.getElementById("Kubek");
    const Czapka = elements.getElementById("Czapka");
    const UchwytBuzia = elements.getElementById("UchwytBuzia");
    const OkoL = elements.getElementById("OkoL");
    const OkoP = elements.getElementById("OkoP");
    const GornyLisc = elements.getElementById("GornyLisc");
    const PrawyLisc = elements.getElementById("PrawyLisc");
    const LewyLisc = elements.getElementById("LewyLisc");

    gsap.set(
      [Kubek, ...GornyLisc.children, ...PrawyLisc.children, ...LewyLisc.children, OkoL, OkoP, Czapka, UchwytBuzia],
      { autoAlpha: 0 }
    );
    gsap.set(Czapka, { transformOrigin: "50% 100%" });
    gsap.set(UchwytBuzia, { transformOrigin: "50% 100%" });

    const tl1 = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl1
      .fromTo(Kubek, { x: "-=300" }, { x: "+=300", duration: 2, autoAlpha: 1 })
      .fromTo(Czapka, { scaleY: 0 }, { duration: 0.5, autoAlpha: 1, scaleY: 1 })
      .fromTo(UchwytBuzia, { scaleY: 0 }, { duration: 0.5, autoAlpha: 1, scaleY: 1 })
      .fromTo(OkoL, { scaleY: 0 }, { duration: 0.5, autoAlpha: 1, scaleY: 1 })
      .fromTo(OkoP, { scaleY: 0 }, { duration: 0.5, autoAlpha: 1, scaleY: 1 })
      .fromTo(GornyLisc.children, { scaleY: 0 }, { duration: 0.5, autoAlpha: 1, scaleY: 1, stagger: 0.3 })
      .fromTo(PrawyLisc.children, { scaleY: 0 }, { duration: 0.5, autoAlpha: 1, scaleY: 1, stagger: 0.3 })
      .fromTo(LewyLisc.children, { scaleY: 0 }, { duration: 0.5, autoAlpha: 1, scaleY: 1, stagger: 0.3 });
  }, []);

  return (
    <StyledObrazek ref={wrapper}>
      <Kubek />
    </StyledObrazek>
  );
};

export default KubekKawy;
