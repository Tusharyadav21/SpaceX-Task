import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Upcoming from './components/Upcoming/Upcoming';
import Past from './components/Past/Past';
import Latest from './components/Latest/Latest';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <Routes>
          <Route path='/latest' element={<Latest />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/past' element={<Past />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
