import React from 'react';
import './StyleModules/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePageComponent from '../src/Component/ProfilePageComponent';
import NavbarComponent from './Component/NavbarComponent';
import PortfolioComponent from './Component/PortfolioComponent';
import UsefulForFrontend from './Component/UsefulForFrontend';
import FeedbackComponent from './Component/FeedbackComponent';
import PortfolioReact from './Component/PortfolioReact';
import PortfolioLayout from './Component/PortfolioLayout';




function App({ props }) {

  return (
    <BrowserRouter>
        <div className="wrapper">
          <nav>
            <NavbarComponent />
          </nav>
          <section>
            <Routes>
              <Route path='/' element={<ProfilePageComponent />} />
              <Route path='/portfolio' element={<PortfolioComponent />} />
              <Route path='/useful' element={<UsefulForFrontend />} />
              <Route path='/feedback' element={<FeedbackComponent />} />
              <Route path='/portfolio/layout' element={<PortfolioLayout layouts={props.layouts} />} />
              <Route path='/portfolio/react' element={<PortfolioReact projects={props.projects} />} />
            </Routes>
          </section>
        </div> 
    </BrowserRouter>

  );
}

export default App;
