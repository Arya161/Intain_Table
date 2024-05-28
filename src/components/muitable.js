import React, { useMemo,useState } from "react";
import './muitable.css';
import MOCK_DATA from './MOCK_DATA.json';
import MUIDataTable from "mui-datatables";
import AddTrancheModal from "./AddTrancheModal";

import { TableContainer, 
         Table,
         TableHead,
         TableBody,
         TableRow,
         TableCell,
         Paper,
         Button,
         Typography,
    IconButton
 } from '@mui/material';
 import { ArrowUpward, ArrowDownward } from '@mui/icons-material';


export const Muitable = () => {

  const [page, setPage] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedData, setSortedData] = useState([]);

  const tableData = useMemo(() => {
    if (sortedData.length > 0) {
        return sortedData;
    } else {
        return MOCK_DATA;
    }
}, [sortedData]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };


  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    const sortedData = tableData.slice().sort((a, b) => {
        if (newSortOrder === 'asc') {
            return a.id - b.id;
        } else {
            return b.id - a.id;
        }
    });
    setSortedData(sortedData);
};

  return (
    <div className="table-container">
    <TableContainer component={Paper}>
        <Table className="table">
            <TableHead className="table-head">
                <TableRow>
                <TableCell className="table-cell">Id</TableCell>
                        <TableCell className="table-cell">Name</TableCell>
                        <TableCell className="table-cell">CUSIP</TableCell>
                        <TableCell className="table-cell">Original Principal Balance</TableCell>
                        <TableCell className="table-cell">Interest Rate</TableCell>
                        <TableCell className="table-cell">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {tableData.slice(page * 5, page * 5 + 5).map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell className="table-cell">{row.id}</TableCell>
                <TableCell className="table-cell">{row.name}</TableCell>
                <TableCell className="table-cell">{row.SIP}</TableCell>
                <TableCell className="table-cell">{row.bal}</TableCell>
                <TableCell className="table-cell">{row.rate}</TableCell>
                <TableCell className="table-cell" id="link">
                  {row.act}
                </TableCell>
                </TableRow>
                    ))}
            </TableBody>
        </Table>
        <Button onClick={handlePrevPage} disabled={page === 0}>
          Previous
        </Button>
        <Button onClick={handleNextPage} disabled={page >= Math.ceil(tableData.length / 5) - 1}>
          Next
        </Button>
    </TableContainer>
    </div>
  )
}
