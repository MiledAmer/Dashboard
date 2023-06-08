import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../config/firebase";
import { CircularProgress } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



  //   const rows = [
  //   createData("Souhir beji ", 159, 6.0,[<Button variant="contained">update</Button>,<Button variant="contained" color="error">Delete</Button> ]),
  //   createData("yassmine Hassouna ", 237, 9.0,[<Button variant="contained">update</Button>,<Button variant="contained" color="error">Delete</Button> ]),
  //   createData("med ameur miled", 262, 16.0,[<Button variant="contained">update</Button>,<Button variant="contained" color="error">Delete</Button> ]),
  //   createData("feriel ben mammia", 305, 3.7, [<Button variant="contained">update</Button>,<Button variant="contained" color="error">Delete</Button> ]),
  //   createData("rima guedria", 356, 16.0, [<Button variant="contained">update</Button>,<Button variant="contained"color="error">Delete</Button> ]),
  // ];


export default function CustomizedTables() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["display users data"],
    queryFn: () => fetchData("Users/"),
  });

  if (isLoading) return <CircularProgress />;

  if (error) return "An error has occurred: " + error.message;

  const createData = (FullName, Email, Role, Actions) => {
    return { FullName, Email, Role, Actions };
  }

  let rows = Object.values(data).map(user =>{
      return (createData(
      user.FirstName+" "+user.LastName,
      user.email,
      user.Role,
      [<Button variant="contained">update</Button>,<Button variant="contained"color="error">Delete</Button> ]
    ))
  })
  console.log(rows);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> Full Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.FullName}>
              <StyledTableCell component="th" scope="row">
                {row.FullName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.Role}</StyledTableCell>
              <StyledTableCell align="center">{row.Actions}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
