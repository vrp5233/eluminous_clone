

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OurCompany from './screen/About';
import Home from './screen/Homepage/Homepage';
import HireDedicatedAngular from './screen/HireDedicated/HireDedicatedAngular';
import HireDedicatedReact from './screen/HireDedicated/HireDedicatedAngular';
// import Navigation from './component/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<OurCompany />} />
        <Route path="/hire-angular-developers" element={<HireDedicatedAngular />} />
        <Route path="/hire-reactjs-developers" element={<HireDedicatedReact />} />
        {/* <Route path="" component={ErrorComponent} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
