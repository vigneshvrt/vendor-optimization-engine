import React from 'react';

// Accept onClick prop
const ActionLink = ({ text, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor navigation
    if (onClick) {
      onClick(); // Call the passed onClick handler
    }
  };

  return (
    // Attach the local handleClick to the anchor's onClick event
    <a href="#" className="action-link" onClick={handleClick}>
      {text}
    </a>
  );
};

export default ActionLink;
