// src/App.jsx

import React from 'react';
import { Routes, Route} from 'react-router-dom';
import {Welcome} from './components/Welcome';
import { Counter } from './components/Counter';
import {ShowGithubUser} from './components/ShowGithubUser';

function App() {
  return (
  
        <Routes>
          <Route path="/" element={<Welcome name="Samuele" />} />
          <Route path="counter" element={<Counter initialValue={0} />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
    
    
  );
}

export default App;
