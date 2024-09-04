import './Home.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import SearchBar from './components/SearchBar';
import TopBar from './TopBar';



function Home() {

//<div className="web-title">UTSC Course Compass</div>

  return (
    <div>
      <TopBar />
    <div className='Home'>
    <div className='text'>Find All the Jobs Scraped from Websites</div>
    <div className='bar'><SearchBar/></div>
  </div>
  </div>
  );
}

export default Home;
