import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import GlobalContext from "../Context/GlobalContex";

const SnackbarMsgs = ({ alert }) => {
  let horizontal = 'center';
  let vertical = 'bottom';

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <div>
        {alert &&
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        autoHideDuration={7000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alert.type} sx={{ width: "100%" }}>
          {alert.msg}
        </Alert>
      </Snackbar>}
    </div>
  );
};

export default SnackbarMsgs;
