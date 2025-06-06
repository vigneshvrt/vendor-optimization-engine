import React from 'react';

const Tabs = () => {
  return (
    <nav>
      <ul>
        <li className="active">Dashboard</li> {/* Mark Dashboard as active */}
        <li>Performance Reports</li>
        <li>Configuration</li>
        <li>Audit Logs</li>
      </ul>
    </nav>
  );
};

export default Tabs;
