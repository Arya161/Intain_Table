import React, { useMemo } from "react";
import './muitable.css';
import MOCK_DATA from './MOCK_DATA.json';
import MUIDataTable from "mui-datatables";

import { TableContainer, 
         Table,
         TableHead,
         TableBody,
         TableRow,
         TableCell,
         Paper,
 } from '@mui/material';

export const Muitable = () => {

    const tableData = useMemo(() => MOCK_DATA, []);

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
                    {
                tableData.map(row => (
                    <TableRow key = {row.id}
                    sx = {{'&:last-child td, &:last-child th' : {border : 0}}}> 
                        <TableCell className="table-cell">{row.id}</TableCell>
                        <TableCell className="table-cell">{row.name}</TableCell>
                        <TableCell className="table-cell">{row.SIP}</TableCell>
                        <TableCell className="table-cell">{row.bal}</TableCell>
                        <TableCell className="table-cell">{row.rate}</TableCell>
                        <TableCell className="table-cell" id="link">{row.act}</TableCell>
                        </TableRow>
                    ))
                    }
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}
