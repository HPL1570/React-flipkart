import logo from './OIP.jpeg';
import './App.css';
import React from 'react';

import Forms from './Forms.js';
import Shl from './SHL.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      
    <Routes>
      <Route>
                <Route path='/' element={<Shl/>} />
                </Route>
                <Route path='/Forms' element={<Forms />} />
       </Routes>
     
    </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;
