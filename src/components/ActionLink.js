import React from 'react';

// It's good practice to add a class if more specific styling is needed later,
// but for now, the 'td a' selector in style.css will style it.
const ActionLink = ({ text }) => {
  return (
    <a href="#" className="action-link">{text}</a>
  );
};

export default ActionLink;
