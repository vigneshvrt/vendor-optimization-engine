import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="title-section">
        {/* Icon would be here, e.g., <img src="/path/to/icon.svg" alt="icon" /> */}
        <div>
          <h1>Vendor Optimization Engine</h1>
          <h2>Admin Dashboard</h2>
        </div>
      </div>
      <div className="user-section">
        <p>Daniel</p> {/* Placeholder for user dropdown */}
      </div>
    </header>
  );
};

export default Header;
