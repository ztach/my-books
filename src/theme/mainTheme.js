import { css } from "styled-components";

export const theme = {
  maron: "hsl(0,100%,25%)",

  primaryTab: ["#b2dae4", "#7EAFBB", "#4D8896", "#307180", "#1C5D6D", "#0A4755"],

  secondaryTab: [
    "#FFFFFF", //0
    "#d0d8f5", //1
    "#8B98C5", //2
    "#5C6BA5", //3
    "#3D4E8C", //4
    "#273877", //5
    "#13235D", //6
    "#000000" //7
  ],

  tertiartyTab: ["#8BD29E", "#5AB672", "#379A51", "#1F8339", "#0A6722"],

  qwartalyTab: ["#FFD4AA", "#F3B579", "#CE8B4A", "#AF6C29", "#894B0D"],

  light: 300,
  medium: 400,
  bold: 600,

  fontSize: {
    xxxs: "0.7rem",
    xxs: "0.8rem",
    xs: "0.9rem",
    x: "1rem",
    s: "1.2rem",
    sx: "1.4rem",
    sxx: "1.6rem",
    sxxx: "1.8rem",
    m: "2rem",
    mx: "2.5rem",
    mxx: "2.7rem",
    l: "3rem",
    lx: "3.5rem",
    lxx: "3.7rem",
    lxxx: "3.9rem",
    d: "4rem"
  },

  beforeBox: (width, height, left, top, color) =>
    css`
      &::before {
        z-index: -1;
        content: '';
        background-color: ${color};
        width: ${width};
        height: ${height};
        left: ${left};
        top: ${top};
        position: absolute;
      }
    `
};

//użycie: beforebox
/** 
 * ${({theme})=>theme.beforeBox(width:'100%', height:'100%', left:'-20%', top:'0', color:'yellow')}
*/
