import React from 'react';
import TableRow from './TableRow'; // Assuming TableRow is in the same directory

const StrategyTable = () => {
  const sampleData = [
    { country: 'IN', currentVendorOrder: 'datazoo → melissa', aiSuggestedOrder: 'melissa → datazoo', costImpact: '–18%', latency: '–320ms' },
    { country: 'PH', currentVendorOrder: 'enstream → datazoo', aiSuggestedOrder: 'datazoo → enstream', costImpact: '–25%', latency: '–490ms' },
    { country: 'CA', currentVendorOrder: 'melissa', aiSuggestedOrder: 'melissa', costImpact: '–4%', latency: '—' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Current Vendor Order</th>
          <th>AI Suggested Order</th>
          <th>Cost Impact</th>
          <th>Latency</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sampleData.map((row, index) => (
          <TableRow key={index} rowData={row} />
        ))}
      </tbody>
    </table>
  );
};

export default StrategyTable;
