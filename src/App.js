import React from 'react';
import BackGround from './components/back';
import './App.css';
import Card from './components/card';
import Timeline from './components/achievements';
import CardList from './components/projects';
import ContactMe from './components/contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/page';
import Port from './port'

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Port />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

