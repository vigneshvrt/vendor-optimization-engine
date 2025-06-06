import React from 'react';
import ActionLink from './ActionLink';

const TableRow = ({ rowData, onViewModifyClick }) => {
  const handleActionClick = () => {
    onViewModifyClick(rowData);
  };

  // Helper function to determine class for conditional styling
  const getConditionalClass = (valueString) => {
    if (valueString === '—' || !valueString) {
      return 'text-neutral';
    }
    // Remove 'ms', '%', and convert to number. Handles '–' (en-dash) for negative.
    const numericValue = parseFloat(valueString.replace(/ms|%|→/g, '').replace('–', '-'));

    if (isNaN(numericValue)) {
      return 'text-neutral';
    }

    if (numericValue < 0) {
      return 'text-green'; // Negative is good (cost saved, latency reduced)
    } else if (numericValue > 0) {
      return 'text-red'; // Positive is bad (cost increased, latency increased)
    }
    return 'text-neutral'; // Zero or unparseable
  };

  return (
    <tr>
      <td>{rowData.country}</td>
      <td>{rowData.currentVendorOrder}</td>
      <td>{rowData.aiSuggestedOrder}</td>
      {/* Apply conditional class to Cost Impact */}
      <td className={getConditionalClass(rowData.costImpact)}>{rowData.costImpact}</td>
      {/* Apply conditional class to Latency */}
      <td className={getConditionalClass(rowData.latency)}>{rowData.latency}</td>
      <td><ActionLink text="View / Modify" onClick={handleActionClick} /></td>
    </tr>
  );
};

export default TableRow;
