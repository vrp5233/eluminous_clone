

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutComponent from './screen/About';
import Home from './screen/Homepage/Homepage';
// import Navigation from './component/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutComponent />} />
        {/* <Route path="" component={ErrorComponent} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
