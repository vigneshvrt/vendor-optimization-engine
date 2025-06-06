import React from 'react';

const Tabs = ({ activeTab, onTabClick }) => {
  const tabNames = ['Dashboard', 'Performance Reports', 'Configuration', 'Audit Logs'];

  return (
    <nav>
      <ul>
        {tabNames.map(tabName => (
          <li
            key={tabName}
            className={activeTab === tabName ? 'active' : ''}
            onClick={() => onTabClick(tabName)}
          >
            {tabName}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
