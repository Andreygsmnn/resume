import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProfilePageComponent from '../src/Component/ProfilePageComponent';
import NavbarComponent from './Component/NavbarComponent';
import PortfolioComponent from './Component/PortfolioComponent';
import UsefulForFrontend from './Component/UsefulForFrontend';
import FeedbackComponent from './Component/FeedbackComponent';
import PortfolioReact from './Component/PortfolioReact';
import PortfolioLayout from './Component/PortfolioLayout';
import store from './store/store';



function App() {
  return (
    <BrowserRouter>

      <div>
        <div>
          <div>
            <NavbarComponent />
          </div>
          <div>
            <Routes>
              <Route path='/' element={<ProfilePageComponent />} />
              <Route path='/portfolio' element={<PortfolioComponent />} />
              <Route path='/useful' element={<UsefulForFrontend />} />
              <Route path='/feedback' element={<FeedbackComponent />} />
              <Route path='/portfolio/layout' element={<PortfolioLayout layouts={store.layouts} />} />
              <Route path='/portfolio/react' element={<PortfolioReact projects={store.projects} />} />
            </Routes>
            
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
