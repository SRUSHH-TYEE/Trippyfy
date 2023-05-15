import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContex";
import { useNavigate } from "react-router-dom";

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

const RowOrg = ({ row }) => {
  const navigate = useNavigate();
  const { delOrg, showAlert, selOrgEdit, setSelOrgEdit } =
    useContext(GlobalContext);

  const deleteHandler = async () => {
    delOrg(row._id);
  };

  const editClickHandler = () => {
    setSelOrgEdit(row._id);
    navigate('/editOrg')
  };

  return (
    <>
      <StyledTableRow>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="right">
          <Button
            variant="contained"
            style={{ backgroundColor: "#0277bd" }}
            onClick={editClickHandler}
          >
            Edit details
          </Button>
        </StyledTableCell>
        <StyledTableCell align="right">
          <Button
            variant="contained"
            style={{ backgroundColor: "red", marginRight: "1rem" }}
            onClick={deleteHandler}
          >
            Remove
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default RowOrg;
