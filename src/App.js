import React from 'react';
import Services from './component/services';
import Navbar from './component/navbar';
import Login from './component/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Registration from './component/registration';
import SMM from './component/smm';
import VIP from './component/vip';
import AffiliateProgram from './component/affiliateprogram';
import About from './component/about';
import HelpDesk from './component/help';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/service" element={<Services />} />
        <Route path="/smm" element={<SMM />} />
        <Route path="/vip" element={<VIP />} />
        <Route path="/Affiliate Program" element={<AffiliateProgram />} />
        <Route path="/Help Desk" element={<HelpDesk />} />
        <Route path="/About" element={<About />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>

  );
};

export default App;
