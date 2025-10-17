import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import TopBar from "./TopBar";
import JobCard from "./JobCard";
import './Results.css'

function Results(){
    const { query } = useParams();
    const [results, setresults] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
    const handleSearch = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/search/', {
            params: { q: query }
          });
          setresults(response.data.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally{
          setloading(false);
        }
    };

    handleSearch();

    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    return(
        <div className="main-page">
          <TopBar />
          <div className="result-slots">
            <div className="src">LinkedIn</div>
            <div className="jobs">
            {results.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
            </div>
          </div>
        </div>
    )
}

export default  Results;