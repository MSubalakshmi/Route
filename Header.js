import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/logo.png';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f5f5f5', color: '#18191F', boxShadow: 'none' }}>
      <Container maxWidth="xl" sx={{ marginBottom: '10px' }}>
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" style={{ maxWidth: '220.49px', height: '100px', marginRight: '16px' }} />
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {['Home', 'Services', 'Feature', 'Product', 'Testimonial', 'FAQ','items'].map((item) => (
                  <Button key={item} component={Link} to={`/${item.toLowerCase()}`} sx={{ color: 'black', textTransform: 'none', margin: '0 10px' }}>
                    {item}
                  </Button>
                ))}
                {/* Example link to a dynamic route with query params */}
                <Button component={Link} to="/item?itemId=123" sx={{ color: 'black', textTransform: 'none', margin: '0 10px' }}>
                  Item 123
                </Button>
              </Box>
            )}
          </Box>

          {isMobile ? (
            <IconButton edge="start" sx={{ color: '#18191F', marginLeft: 'auto' }} aria-label="menu">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button component={Link} to="/login" sx={{ color: 'green', textTransform: 'none' }}>Login</Button>
              <Button
                variant="contained"
                color="success"
                component={Link}
                to="/signup"
                sx={{
                  textTransform: 'none',
                  borderRadius: '20px',
                  padding: '5px 15px',
                }}
              >
                Sign up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

