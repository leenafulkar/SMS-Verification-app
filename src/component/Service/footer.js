import React from 'react';

import { Box, Grid, Link, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Container>
    <Box
      component="footer"
      sx={{
        width: '100%',
        maxWidth: '1285.6px', // Adjusted for responsiveness
        height: 'auto',
        color: '#000000',
        padding: '48px 0px 62px',

      }}
    >
      <Container
        sx={{
          width: '700px',
          height: 'auto',
          color: '#000000',
        }}
      >
        <Grid container spacing={3} textAlign="left">
          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#131D30' }}>
              Pages
            </Typography>
            <Typography component="div" sx={{ color: '#364053', marginTop: '10px' }}>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Login
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Register
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Blog
              </Link>
              {/* Add other pages here */}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#131D30' }}>
              Products
            </Typography>
            <Typography component="div" sx={{ color: '#364053', marginTop: '10px' }}>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Services
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                SMM
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                VIP
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Affiliate
              </Link>
              {/* Add other pages here */}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#131D30' }}>
              Help
            </Typography>
            <Typography component="div" sx={{ color: '#364053', marginTop: '10px' }}>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Resources
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Email
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Discord
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Developers
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                About Us
              </Link>
              {/* Add other pages here */}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#131D30' }}>
              Legal
            </Typography>
            <Typography component="div" sx={{ color: '#364053', marginTop: '10px' }}>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                color="inherit"
                sx={{ textDecoration: 'none', display: 'block', marginBottom: '10px' }}
              >
                Terms of Service
              </Link>
              {/* Add other pages here */}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </Container>
  );
}
