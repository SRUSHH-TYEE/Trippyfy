import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Fab from "@mui/material/Fab";

const ReqForAuth = ({empName,docName}) => {
  return (
    <div className="mx-2 my-2" style={{ width: "100%" }}>
      <Card>
        <div className="d-flex align-items-center" style={{margin:"4px", padding:"9px"}}>
          <div className="" style={{width:"14rem", fontSize:"1.3rem",margin:"3px",padding:"12px",border:"3px solid rgb(164 170 192)",borderRadius:"0.8rem",backgroundColor:"#e4e8e8"}}>{empName}</div>
            <Fab variant="extended" style={{margin:"1rem"}}>
              <AssignmentIndIcon />
              {docName}
            </Fab>

            <Button className="mx-2" variant="success">
              Approve
            </Button>
            <Button className="mx-1" variant="danger">
              Delete
            </Button>
        </div>
      </Card>
    </div>
  );
};

export default ReqForAuth;
