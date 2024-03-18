import React from 'react'
import { Icon } from '@iconify/react';
import arrowRight from '@iconify-icons/fa-solid/arrow-right';
import Button from '@mui/material/Button';
import { Box, Stack, Container, Typography } from '@mui/material'; // Replace with the actual icon you want to use
import { styled } from '@mui/material/styles';
import Lottie from 'react-lottie';
import animationJson from '../../Lottiefiles/animation.json';
import { Link } from 'react-router-dom';


const ColorButton = styled(Button)(({ theme }) => ({
    color: '#FFFFFF', // Set color to white
    backgroundColor: '#FFA800', // Set background color to #FFA800
    width: '250.41px', // Set width
    height: '48px', // Set height
    padding: '6px 24px', // Set padding
    fontSize: '20px',
    // Increase font size
    borderRadius:'20px',
    '&:hover': {
      backgroundColor: '#D88E00', // Set hover background color
    },
  }));
const TypoAndLottie = () => {

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationJson,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Container
        sx={{
            direction: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between', // Center the buttons horizontally
            width: '100%',
            height: 'auto',
            flexGrow: 1,
            display: { xs: 'block', md: 'flex'},
                     px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

        }}
      >
        <Stack sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
        <Typography
              sx={{
                fontSize: '55px',
                fontHeight: '72px',
                fontWeight: 'bold',
                color: '#1A80FE',
                width: '100%',
                height: 'auto',
                mr: 2,

                display: { xs: 'block', md: 'flex' },

              }}
              
            >
              SMS Verification Service
            </Typography>
            <Typography
              sx={{
                fontSize: '50px',
                fontHeight: '72px',
                fontWeight: 'bold',
                color: 'black',
                maXidth: '750.65px',
                width: '100%',
                height: 'auto',
                mr: 2,
                marginTop:'-10px',

                display: { xs: 'block', md: 'flex' },
              }}
            >
              Fast, Secure, and Reliable.
            </Typography>
            <Typography
              sx={{ fontSize: '20px', width: '100%',maxWidth:'661.65px', height: 'auto', margin: '12px 0px 0px' , mr: 2,

              display: { xs: 'block', md: 'flex' }, }}
            >
              Easily and immediately verify any service worldwide without using your personal
              number. Use an online number to receive one-time SMS or rent it for up to 4 weeks and
              receive unlimited texts.
            </Typography>
            <Box   sx={{ width: '100%', height: 'auto', marginTop: '20px' }}>
               
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <ColorButton variant="contained" 
              style={{ 
                  textTransform: 'none', // Set textTransform to 'none' to preserve the case
            }}>
                Get started today
                <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
              </ColorButton>
            </Link> <Button
                variant="contained"
                sx={{
                  fontSize: '23px',
                  color: 'black',
                  fontWeight: 'normal',
                  marginLeft:'20px',
                  textTransform: 'none',
                  bgcolor:'#FFFFFF',
                  borderRadius:'20px',
                  '&:hover': {
                    bgcolor: 'lightgray', // Set hover background color
                  }, // Set textTransform to 'none' to preserve the case

                }}
              >
                Try now 

                <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
              </Button>
              </Box>
        </Stack>
        <Stack sx={{ mt: { xs: 3, md: 0 } }}>
          <Box>
            <Lottie options={lottieOptions} width={400} height={400} />
          </Box>
        </Stack>
      </Container>
      
     
      
</div>
  )
}

export default TypoAndLottie