import React from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import SummaryCard from './components/SummaryCard';
import SearchBar from './components/SearchBar';
import StrategyTable from './components/StrategyTable';
import Button from './components/Button'; // Assuming a general Button at the bottom
// Note: React and ReactDOM are usually imported if you're using JSX and rendering to DOM,
// but for a single App.js file that might be part of a larger setup (like Create React App),
// this basic structure is fine. We'll assume a build system handles JSX transpilation.

const App = () => {
  return (
    <div>
      <Header />
      <Tabs />
      {/* Added summary-cards-container class here */}
      <div className="summary-cards-container">
        <SummaryCard value="24" title="Countries Covered" />
        <SummaryCard value="92%" title="AI Recommendation Accuracy" />
        <SummaryCard value="12,420" title="Cost Saved this Month" />
        <SummaryCard value="450ms" title="Avg. Latency Reduction" />
      </div>
      <SearchBar />
      <StrategyTable />
      <div style={{ marginTop: '20px', textAlign: 'center' }}> {/* Basic styling for bottom button */}
        <Button text="View / Modify" /> {/* General bottom button */}
      </div>
    </div>
  );
};

export default App;

// If this file were to be run standalone in a browser with a simple setup,
// you might need something like this (but usually it's handled by index.js in CRA):
/*
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));
*/
