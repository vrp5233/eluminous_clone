import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
:root {
  --white: 255, 255, 255;
  --blue: 33, 102, 243;
  --grey: 241, 241, 241;
  --red: 223, 46, 49;
  --black: 0, 0, 0;
  --black2: 51, 51, 51;
  --black3: 117, 117, 117;
  --blackTurmeric: 45, 62, 98;
  --revelBlue: 78, 104, 138;
  --inter: "Inter", sans-serif;
  --trans_a3: all 0.3s;

  --mediaMobile767: 767px;
}

*,
body,
ul,
li,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Inter", sans-serif;
  color: rgba;
}

body {
  /* height: 3000px; */
  padding: 113px 0 0 0;
  color: rgba(var(--black2));
}

section {
  padding: 80px 0;
}
 
.container {
  max-width: 1730px;
}

/* Color Css Start */
.fw900 {
  font-weight: 900 !important;
}

.fw800 {
  font-weight: 800 !important;
}

.fw700 {
  font-weight: 700 !important;
}

.fw600 {
  font-weight: 600 !important;
}

.fw500 {
  font-weight: 500 !important;
}

.fw400 {
  font-weight: 400 !important;
}

.bgNone {
  background-color: transparent !important;
}

.shadowNone {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.white {
  color: rgba(var(--white)) !important;
}

.black {
  color: rgba(var(--black)) !important;
}

.blue {
  color: rgba(var(--blue)) !important;
}

.blackTurmeric {
  color: rgba(var(--blackTurmeric)) !important;
}

.grey {
  color: rgba(var(--grey)) !important;
}

.red {
  color: rgba(var(--red)) !important;
}

.black2 {
  color: rgba(var(--black2)) !important;
}
.black3 {
  color: rgba(var(--black3)) !important;
}

.revelBlue {
  color: rgba(var(--revelBlue)) !important;
}

.whiteBg {
  background-color: rgba(var(--white)) !important;
}

.blackBg {
  background-color: rgba(var(--black)) !important;
}

.blueBg {
  background-color: rgba(var(--blue)) !important;
}

.blackTurmericBg {
  background-color: rgba(var(--blackTurmeric)) !important;
}

.greyBg {
  background-color: rgba(var(--grey)) !important;
}

.redBg {
  background-color: rgba(var(--red)) !important;
}

.black2Bg {
  background-color: rgba(var(--black2)) !important;
}

.black3Bg {
  background-color: rgba(var(--black3)) !important;
}

.revelBlueBg {
  background-color: rgba(var(--revelBlue)) !important;
}

/* Color Css End */
`;
export default GlobalStyles;
