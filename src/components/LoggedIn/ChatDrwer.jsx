import * as React from "react";
import ChatLoading from "./ChatLoading";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import UserList from "./UserList";

const ChatDrwer = () => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [search, setSearch] = React.useState("");

  // API 1: Search User Handler
  const handleSearch = async (e) => {
    if (!search) {
      // to open snackbar
      setOpen(true);
    }

    // TODO: API call for searching user
    try {
      setLoading(true);

      const config = {
        headers: {
          // TODO: Authorization token should come from local storage
          // Authorization: `Bearer ${user.token}`,
        },
      };

      // TODO: Use correct api and payload to get required data
      // const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      // setSearchResult(data);
    } catch (error) {
      setError(true);
    }
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // It is refrenceing to the click for drawer
  const ref = React.useRef();

  // This function is exported to SlideDrawer. When user will click on search users, this function will triggered.
  const drawerClickHandler = () => {
    ref.current.click();
  };

  const textSearchClickHandler = (e) => {
    e.preventDefault();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <div
        className="container"
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginLeft: "4px",
          marginTop: "7px",
          marginBottom: "5px",
        }}
      >
        Search Users
      </div>

      <div className="d-flex my-3" style={{ width: "100%" }}>
        <TextField
          id="outlined-basic"
          label="Search users"
          variant="outlined"
          className="mx-2"
          style={{ width: "80%" }}
          value={search}
          onClick={textSearchClickHandler}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Button
          variant="contained"
          className="mx-2"
          style={{ width: "20%", backgroundColor: "#374c45" }}
          onClick={handleSearch}
        >
          Go
        </Button>
      </div>

      <Divider />

      {/* To Show Search Results: */}

          {/* When resukts are loading <ChatLoading/> will be shown */}
      {loading ? <ChatLoading /> : (
        <span>
          <UserList/>
        </span>
      )
      }
      
    </Box>
  );

  return {
    drawerClickHandler,
    render: (
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              className="d-none"
              onClick={toggleDrawer(anchor, true)}
              ref={ref}
            >
              {anchor}
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Please enter something in search!
          </Alert>
        </Snackbar>
        <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Failed to load the search results!
          </Alert>
        </Snackbar>
      </div>
    ),
  };
};

export default ChatDrwer;
