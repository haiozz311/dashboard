import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAction } from "../../../Redux/Actions/UserList";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import LinearProgress from "@material-ui/core/LinearProgress";
import FormDialog from "../FormDialog";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function BasicTable() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);
  const { ListUser, loading } = useSelector((state) => state.UserListReducer);

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleOpenDialog = () => {
    setOpen(true);
  };
  const hanleCanle = (value) => {
    setOpen(value);
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">UserName</TableCell>
            <TableCell align="center">password</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">phoneNumber</TableCell>
            <TableCell align="center">level</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <LinearProgress />
        ) : (
          <TableBody>
            {ListUser.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row" align="center">
                  {row._id}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row.fullName}
                </TableCell>
                <TableCell align="center">{row.passWord}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center">{row.level}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<AddIcon />}
                    onClick={() => {
                      handleOpenDialog();
                    }}
                  >
                    Add
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      <FormDialog open={open} hanleCanle={hanleCanle} />
    </TableContainer>
  );
}
