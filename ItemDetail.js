import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const ItemDetail = () => {
  const [searchParams] = useSearchParams();
  const itemId = searchParams.get('itemId');

  return (
    <Box>
      <Typography variant="h4">Item Detail</Typography>
      <Typography variant="body1">You are viewing details for item: {itemId}</Typography>
    </Box>
  );
};

export default ItemDetail;

