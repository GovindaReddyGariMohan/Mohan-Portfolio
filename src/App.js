
import './App.css';
import PortfoilHome from './components/homePage/Home';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigationMenu/Navigation';
import About from './components/aboutMe/aboutMe';
import Profile from './components/Photo/profilePhoto';
import Projects from './components/portfolioPage/projects';
import Contact from './components/contactMe/contactMe';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='navigation-position'>
        <Navigation />
      </div>


      <Routes>
        <Route path="/" element={<PortfoilHome />}></Route>
        <Route path='aboutMe' element={<About />}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='portfolio' element={<Projects/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
