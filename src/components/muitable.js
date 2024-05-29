import React, { useMemo, useState } from "react";
import './muitable.css';
import MOCK_DATA from './MOCK_DATA.json';
import MUIDataTable from "mui-datatables";
import ViewModal from './viewmodal';
import EditModal from './editmodal';

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  TableSortLabel,
  TablePagination
} from '@mui/material';

export const Muitable = () => {

  const tableData = useMemo(() => MOCK_DATA, []);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('rate');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState(tableData);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleView = (id) => {
    const row = rows.find(r => r.id === id);
    setSelectedRow(row);
    setViewModalOpen(true);
  };

  const handleEdit = (id, newName) => {
    setRows(rows.map(row => row.id === id ? { ...row, name: newName } : row));
  };

  const handleDelete = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleRequestSort = () => {
    const isAsc = orderBy === 'rate' && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedRows = [...rows].sort((a, b) => {
    const rateA = parseFloat(a.rate);
    const rateB = parseFloat(b.rate);
    if (order === 'asc') {
      return rateA - rateB;
    } else {
      return rateB - rateA;
    }
  });

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
              <TableCell className="table-cell">
                <TableSortLabel
                  active={orderBy === 'rate'}
                  direction={order}
                  onClick={handleRequestSort}
                >
                  Interest Rate
                </TableSortLabel>
              </TableCell>
              <TableCell className="table-cell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell className="table-cell">{row.id}</TableCell>
                <TableCell className="table-cell">{row.name}</TableCell>
                <TableCell className="table-cell">{row.SIP}</TableCell>
                <TableCell className="table-cell">{row.bal}</TableCell>
                <TableCell className="table-cell">{row.rate}</TableCell>
                <TableCell className="table-cell">
                  <Button  class="button" variant="contained"  onClick={() => handleView(row.id)}>
                    View
                  </Button>
                  <Button class="button" variant="contained" onClick={() => { setSelectedRow(row); setEditModalOpen(true); }}>
                    Edit
                  </Button>
                  <Button class="button" variant="contained" onClick={() => handleDelete(row.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <ViewModal open={viewModalOpen} handleClose={() => setViewModalOpen(false)} rowData={selectedRow} />
      <EditModal open={editModalOpen} handleClose={() => setEditModalOpen(false)} rowData={selectedRow} handleEdit={handleEdit} />
    </div>
  )
}

export default Muitable;
