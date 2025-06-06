import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import SummaryCard from './components/SummaryCard';
import SearchBar from './components/SearchBar';
import StrategyTable from './components/StrategyTable';
import Button from './components/Button';

const App = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(tabName + " tab clicked");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewModifyClick = (rowData) => {
    alert(`View/Modify clicked for country: ${rowData.country}
Current Vendor: ${rowData.currentVendorOrder}
AI Suggestion: ${rowData.aiSuggestedOrder}`);
  };

  const strategyData = [
    { country: 'IN', currentVendorOrder: 'datazoo → melissa', aiSuggestedOrder: 'melissa → datazoo', costImpact: '–18%', latency: '–320ms' },
    { country: 'PH', currentVendorOrder: 'enstream → datazoo', aiSuggestedOrder: 'datazoo → enstream', costImpact: '–25%', latency: '–490ms' },
    { country: 'CA', currentVendorOrder: 'melissa', aiSuggestedOrder: 'melissa', costImpact: '–4%', latency: '—' },
    { country: 'US', currentVendorOrder: 'acme → enstream', aiSuggestedOrder: 'enstream → acme', costImpact: '-10%', latency: '-100ms' },
    { country: 'GB', currentVendorOrder: 'datazoo', aiSuggestedOrder: 'datazoo → melissa', costImpact: '-5%', latency: '-50ms' }
  ];

  const filteredStrategyData = strategyData.filter(item => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      item.country.toLowerCase().includes(lowerSearchTerm) ||
      item.currentVendorOrder.toLowerCase().includes(lowerSearchTerm) ||
      item.aiSuggestedOrder.toLowerCase().includes(lowerSearchTerm)
    );
  });

  return (
    <div>
      <Header />
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />

      {activeTab === 'Dashboard' && (
        <>
          <div className="summary-cards-container">
            <SummaryCard value="24" title="Countries Covered" />
            <SummaryCard value="92%" title="AI Recommendation Accuracy" />
            <SummaryCard value="12,420" title="Cost Saved this Month" />
            <SummaryCard value="450ms" title="Avg. Latency Reduction" />
          </div>
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          {/* Add wrapper div for table responsiveness */}
          <div className="table-responsive-wrapper">
            <StrategyTable data={filteredStrategyData} onViewModifyClick={handleViewModifyClick} />
          </div>
          <div className="bottom-button-container">
            <Button text="View / Modify" />
          </div>
        </>
      )}
      {activeTab === 'Performance Reports' && <p>Performance Reports View</p>}
      {activeTab === 'Configuration' && <p>Configuration View</p>}
      {activeTab === 'Audit Logs' && <p>Audit Logs View</p>}
    </div>
  );
};

export default App;
