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
import "./FormTable.css";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function FormTable() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserAction());
  }, [dispatch]);
  const { ListProduct, loading } = useSelector((state) => state.ProductReducer);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleOpenDialog = () => {
    setOpen(true);
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">quantity</TableCell>
            <TableCell align="center">price</TableCell>
            <TableCell align="center">description</TableCell>
            <TableCell align="center">category</TableCell>
            <TableCell align="center">picture</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <LinearProgress />
        ) : (
          <TableBody>
            {ListProduct?.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row" align="center">
                  {row?._id}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {row?.name}
                </TableCell>
                <TableCell align="center">{row?.quantity}</TableCell>
                <TableCell align="center">{row?.price}</TableCell>
                <TableCell align="center">{row?.description}</TableCell>
                <TableCell align="center">{row?.category?.name}</TableCell>
                <TableCell align="center">
                  <div className="product__item">
                    {row.productPictures?.map((picture) => (
                      <div className="productImage">
                        <img
                          src={`http://localhost:5000/public/${picture.img}`}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </TableCell>
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
    </TableContainer>
  );
}
