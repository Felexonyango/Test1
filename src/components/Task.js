
import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Task = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const current = new Date();


  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const getUsers = async () => {
    try {
      const data = await axios.get(
        "https://pacific-chamber-45004.herokuapp.com/api/users"
      );
      console.log(data.data);
      setUsers(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      <h1>Test</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

  

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell>Last Name</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>Date of Birth</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
          
            </TableRow>
          </TableHead>
          <TableBody>
            {users.filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.fname.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              }).map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.fname}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.lname}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.age}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.dateofbirth}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {date}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Task;