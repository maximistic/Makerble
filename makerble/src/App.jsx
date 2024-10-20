import React from 'react';
import Navbar from '../src/Sections/Navbar.jsx';
import Footer from '../src/Sections/Footer.jsx';
import LeftPanel from './Sections/LeftPanel.jsx';
import MainContent from './Sections/MainContent.jsx';
import RightPanel from './Sections/RightPanel.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row mt-20">
        <LeftPanel />
        <MainContent />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
