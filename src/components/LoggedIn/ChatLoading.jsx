import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ChatLoading = () => {
  return (
    <div>
      <Stack>
      <Skeleton height={60} />
      <Skeleton animation="wave" height={60}  />
      <Skeleton animation={false} height={60} />
      <Skeleton height={60} />
      <Skeleton animation="wave" height={60}  />
      <Skeleton animation={false} height={60} />
      <Skeleton height={60} />
      <Skeleton animation="wave" height={60}  />
      <Skeleton animation={false} height={60} />
      <Skeleton height={60} />
      <Skeleton animation="wave" height={60}  />
      <Skeleton animation={false} height={60} />
      </Stack>

    </div>
  )
}

export default ChatLoading