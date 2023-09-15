import React from 'react';

// Router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// external files 
import {Home, Products} from './pages/index';


// App.js main settings
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;