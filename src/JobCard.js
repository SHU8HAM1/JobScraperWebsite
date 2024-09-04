import React from 'react';
import './JobCard.css'; // Import the CSS file

const JobCard = ({ job }) => {
  const handleCardClick = () => {
    window.open(job[1], '_blank'); // Opens the link in a new tab
  };

  return (
    <div className="job-card" onClick={handleCardClick}>
      <h2 className="job-title">{job[0]}</h2>
      <p className="job-company">{job[2]}</p>
      <p className="job-location">{job[3]}</p>
      <p className="job-date">{job[4]}</p>
    </div>
  );
};

export default JobCard;
