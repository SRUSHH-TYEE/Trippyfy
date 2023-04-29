import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import ChatDrwer from './ChatDrwer';



function SideDrawer() {

  // Destructuring Chat Drawer component
  const {render, drawerClickHandler} = ChatDrwer()

  // Function for generating different color for Avatar
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
 
  // Function for avatar name
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  
  const [loadingChat, setLoadingChat] = useState(false);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  

  return (
    <>
      <Box display="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderRadius={3}
        marginTop={1}
        marginX={1}
      >
        <Tooltip title="Search User With Names" arrow placement="bottom-end">
          <Button startIcon={<SearchIcon />} style={{color:"#374c45"}} onClick={drawerClickHandler}>
            Search User
          </Button>
        </Tooltip>

        <div id='trippy-talk'>
          Trippy-Talk
        </div>
        
        <div className='d-inline-flex p-2 align-items-center'>
          <NotificationsIcon fontSize='large' className='mx-2'/>
          <Avatar {...stringAvatar('Kent Dodds')}  />

        </div>
      </Box>
      {render}
    </>
  )
}

export default SideDrawer