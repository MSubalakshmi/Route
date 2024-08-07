import React from 'react';
import Header from './Header';
import SliderComponent from './SliderComponent';
import Box from '@mui/material/Box';

const MainComponent = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5',maxWidth:"xl" }}>
      <Header />
      <SliderComponent />
    </Box>
  );
};

export default MainComponent;
