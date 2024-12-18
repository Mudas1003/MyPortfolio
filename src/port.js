import React from 'react';
import BackGround from './components/back';
import './App.css';
import Card from './components/card';
import Timeline from './components/achievements';
import CardList from './components/projects';
import ContactMe from './components/contact';
import Navbar from './components/navbar';
import SocialButtons from './components/buttons';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/page';



const Port = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="background">
        <BackGround />
      </div>
      <div id="card">
        <Card />
      </div>
      <div id="achievements">
        <Timeline />
      </div>
      <div id="projects">
        <CardList />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
};

export default Port;
