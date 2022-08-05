import React from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={ <Home/> }/>
        </Routes>
        <div>

        </div>
      </BrowserRouter>
  );
}

export default App;
