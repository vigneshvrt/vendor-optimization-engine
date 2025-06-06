import React from 'react';
import ActionLink from './ActionLink'; // Assuming ActionLink is in the same directory

const TableRow = ({ rowData }) => {
  return (
    <tr>
      <td>{rowData.country}</td>
      <td>{rowData.currentVendorOrder}</td>
      <td>{rowData.aiSuggestedOrder}</td>
      <td>{rowData.costImpact}</td>
      <td>{rowData.latency}</td>
      <td><ActionLink text="View / Modify" /></td>
    </tr>
  );
};

export default TableRow;
