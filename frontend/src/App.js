import './App.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import Results from './Results';


function App() {

//<div className="web-title">UTSC Course Compass</div>

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/search/:query' element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
