import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import logo from '../assets/logo.png'


const pages = [
  'Service',
  'SMM',
  'VIP',
  'Affiliate Program',
  'Help Desk',
  'Blog',
  'About',
  
  'Login',
  'Register'
  
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 

  const  handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#FFFFFF', color: '#000000', boxShadow:'none', width:'100%'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <img src={logo} alt="Your Image Description" style={{ width: '241px', height: 'auto' }} />

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={handleToggleDrawer}
            >
              <Box
                sx={{
                  width: 350,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  paddingTop: 2,
                }}
              >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleToggleDrawer} >
                  <Typography component={Link} to={`/${page}`} 
                   sx={{ textDecoration: 'none', color: 'inherit',
                   ...(page === 'Register' && {
                    bgcolor:'#1E80FE',
                    color:'#FFFFFF',
                    borderRadius: 10,
                    width:'250px',
                    height:'auto',
                    textAlign:'center',
                   padding:'10px',
                    '&:hover': {
                      backgroundColor: '#2980b9', 
                    }
                  }),
                  ...(page === 'Login' && {
                    color:'#1E80FE',
                    '&:hover': {
                      color: '#2980b9'}
                  })
                  }}
                    >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
             </Box>
            </Drawer>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <img src={logo} alt="Your Image Description" style={{ width: '241px', height: 'auto' }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} , justifyContent: 'flex-end', gap: '20px'}}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page}`}
                onClick={handleCloseUserMenu}

                sx={{ my: 2, color: '#000000', display: 'block',textTransform:'none',fontSize:'16px',

              ...(page === 'Register' && {
                bgcolor:'#1E80FE',
                color:'#FFFFFF',
                borderRadius: 10,
                width:'111px',
                height:'auto',
                textAlign:'center',
                marginRight:'25px',
                '&:hover': {
                  backgroundColor: '#2980b9', 
                }
              }),
              ...(page === 'Login' && {
                color:'#1E80FE',
                '&:hover': {
                  color: '#2980b9'}
              })
              }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <MoreVertIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
