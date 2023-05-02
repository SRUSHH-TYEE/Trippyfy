import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SuggestionList from './SuggestionList';

const rows = [
  {
    "username": "john_doe5",
  "fname": "John",
  "lname": "Doe",
  "gender": "male",
  "birth_date": "1990-01-01",
  "email": "john_doe54@example.com",
  "contact": "123456770",
  "street": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zip": "10001",
  "organization": "test_1",
  "department": "IT",
  "role": "Manager",
  "emp_id": "123456",
  "password": "password123"
  },
  {
    "username": "john_doe5",
  "fname": "John",
  "lname": "Doe",
  "gender": "male",
  "birth_date": "1990-01-01",
  "email": "john_doe54@example.com",
  "contact": "123456770",
  "street": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zip": "10001",
  "organization": "test_1",
  "department": "IT",
  "role": "Manager",
  "emp_id": "123456",
  "password": "password123"
  },
  {
    "username": "john_doe5",
  "fname": "John",
  "lname": "Doe",
  "gender": "male",
  "birth_date": "1990-01-01",
  "email": "john_doe54@example.com",
  "contact": "123456770",
  "street": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zip": "10001",
  "organization": "test_1",
  "department": "IT",
  "role": "Manager",
  "emp_id": "123456",
  "password": "password123"
  },
  {
    "username": "john_doe5",
  "fname": "John",
  "lname": "Doe",
  "gender": "male",
  "birth_date": "1990-01-01",
  "email": "john_doe54@example.com",
  "contact": "123456770",
  "street": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zip": "10001",
  "organization": "test_1",
  "department": "IT",
  "role": "Manager",
  "emp_id": "123456",
  "password": "password123"
  }
];

export default function Suggestions() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '30%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{color:"#2a314d",fontSize:"1.5rem"}}>Suggestions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>

                    {/* This is Suggestion in form of card */}
                    <SuggestionList row={row}/>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

