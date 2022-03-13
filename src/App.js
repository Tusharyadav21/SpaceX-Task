import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Upcoming from './components/Upcoming/Upcoming';
import Past from './components/Past/Past';
import Latest from './components/Latest/Latest';
import LaunchDetails from './components/LaunchDetails';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <div style={{ padding: "40px" }}> */}
      <Routes>
        <Route path='/latest' element={<Latest />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/past' element={<Past />} />
        <Route path='/launch/:id' element={<LaunchDetails />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
