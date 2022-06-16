import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyleThemes from "./GlobalStyleTheme";
import GlobalStyles from "./GlobalStyle.style";
// import GlobalStyles from "./GlobalStyle.style";
import ErrorComponent from './screen/Error';
import OurCompany from './screen/About';
import Home from './screen/Homepage/Homepage';
import HireDedicatedAngular from './screen/HireDedicated/HireDedicatedAngular';
import HireDedicatedReact from './screen/HireDedicated/HireDedicatedReact';
// import ScrollToTop from './core/ScrollToTop';

function App() {
  return (
    <>
      <ThemeProvider theme={GlobalStyleThemes}>
        <GlobalStyles />
        <BrowserRouter>
          {/* <ScrollToTop /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<OurCompany />} />
            <Route path="/hire-angular-developers" element={<HireDedicatedAngular />} />
            <Route path="/hire-reactjs-developers" element={<HireDedicatedReact />} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
