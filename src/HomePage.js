import './Home.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import SearchBar from './components/SearchBar';
import { styled } from 'styled-components';

const MyDiv = styled.div`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;


function Home() {

//<div className="web-title">UTSC Course Compass</div>

  return (
    <div>
    <div className='topBar'>
    <MyDiv className="topItem">Job Aggregator</MyDiv>
    <MyDiv className='topItem'>Search</MyDiv>
    </div>
    <div className='Home'>
    <div className='text'><p>Find All the Pre-Requisites <br /> of courses offered at UTSC</p></div>
    <div className='bar'><SearchBar/></div>
  </div>
  </div>
  );
}

export default Home;
