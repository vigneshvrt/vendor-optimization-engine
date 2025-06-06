import React from 'react';
import TableRow from './TableRow';

// Accept onViewModifyClick prop
const StrategyTable = ({ data, onViewModifyClick }) => {
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
        {data.map((row, index) => (
          // Pass onViewModifyClick to each TableRow
          <TableRow key={index} rowData={row} onViewModifyClick={onViewModifyClick} />
        ))}
      </tbody>
    </table>
  );
};

export default StrategyTable;
