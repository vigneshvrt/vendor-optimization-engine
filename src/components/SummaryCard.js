import React from 'react';

const SummaryCard = ({ value, title }) => {
  return (
    // Added summary-card class here
    <div className="summary-card">
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
};

export default SummaryCard;
