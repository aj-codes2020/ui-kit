import React, { useState, useMemo } from 'react';
import './Table.css';

interface TableProps {
  columns: string[];
  data: { [key: string]: string }[];
  itemsPerPage?: number;
  showFilter?: boolean;
  showNavigation?: boolean;
  className?: string;
}

const Table = ({
  columns,
  data,
  itemsPerPage = 10,
  showFilter = true,
  showNavigation = true,
  className = '',
}: TableProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      columns.some((column) =>
        row[column]?.toString().toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [data, columns, filterText]);

  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;
    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (aValue !== undefined && bValue !== undefined) {
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  }, [filteredData, sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage, itemsPerPage]);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <div className={`table-container ${className}`}>
      {showFilter && (
        <input
          type="text"
          placeholder="Filter..."
          name="table-filter" 
          value={filterText}
          onChange={handleFilterChange}
          className="table-filter"
        />
      )}
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} onClick={() => handleSort(column)}>
                {column} {sortColumn === column ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showNavigation && (
        <div className="pagination">
          <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
            First
          </button>
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            Next
          </button>
          <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
            Last
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
