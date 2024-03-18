import React from 'react';
import { Container, Box, Typography, Stack } from '@mui/material';
import Footer from './Service/footer';

const About = () => {
  return (
    <>
      <Container
        sx={{
          direction: 'column',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 'auto',
          flexGrow: 1,
          display: { xs: 'block', md: 'flex' },
          px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
        }}
      >
        <Box>
          <Typography
            direction={{ xs: 'column', md: 'column' }}
            sx={{
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '48px 0px 0px',
              textAlign: 'center',
              color: '#131D30',
            }}
          >
            Helping <span style={{ color: '#1A80FE' }}>40,000+</span>
          </Typography>

          <Typography
            direction={{ xs: 'column', md: 'column' }}
            sx={{
              fontSize: '64px',
              marginTop: '-15px',
              textAlign: 'center',
              color: '#131D30',
              fontWeight: 'bold',
            }}
          >
            to protect their privacy
          </Typography>
        </Box>
      </Container>
      {/* -------------------------------------------
      --------------------------------------------- */}
<Container >
      {/* Team Section */}
      <Stack sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } ,margin:'48px 0px 0px' }}>
        <Typography
          sx={{
            fontSize: '24px',
            width: '100%',
            maxWidth: '1250px',
            height: 'auto',
            margin: '0px 0px 8px',
            mr: 2,
            display: { xs: 'block', md: 'flex' },
            color: '131D30',
            fontWeight: 'bold',
          }}
        >
          Meet the Team
        </Typography>

        <Typography
          sx={{
            fontSize: '16px',
            width: '100%',
            maxWidth: '1250px',
            height: 'auto',
            margin: '0px 0px 24px',
            mr: 2,
            display: { xs: 'block', md: 'flex' },
            color: '364053',
          }}
        >
          Welcome to SMSverification.xyz – your trusted partner in online security and verification. We are a team of seasoned professionals with over a decade of experience in the field of online security and verification. Our team has been operating this website since 2020, and we have come a long way since then.
        </Typography>
      </Stack>

      {/* Mission & Vision Section */}
      <Stack sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
        <Typography
          sx={{
            fontSize: '24px',
            width: '100%',
            maxWidth: '1250px',
            height: 'auto',
            margin: '0px 0px 8px',
            mr: 2,
            display: { xs: 'block', md: 'flex' },
            color: '131D30',
            fontWeight: 'bold',
          }}
        >
          Mission & Vision
        </Typography>

        <Typography
          sx={{
            fontSize: '16px',
            width: '100%',
            maxWidth: '1250px',
            height: 'auto',
            margin: '0px 0px 24px',
            mr: 2,
            display: { xs: 'block', md: 'flex' },
            color: '364053',
          }}
        >
          We are passionate about providing our clients with the best possible service, and we strive to continually improve our processes to ensure maximum satisfaction. Our mission is to provide our clients with the most secure and reliable online verification service available. We believe that the internet is a free place, and everyone should have access to it anytime, anywhere, without compromising their safety or data protection.
        </Typography>

        <Typography
          sx={{
            fontSize: '16px',
            width: '100%',
            maxWidth: '1250px',
            height: 'auto',
            margin: '0px 0px 24px',
            mr: 2,
            display: { xs: 'block', md: 'flex' },
            color: '364053',
          }}
        >
          At SMSverification.xyz, we pride ourselves on providing exceptional customer service. We take great care in ensuring our customers’ data is safe and secure, and our verification process is reliable, efficient, and transparent. Our vision is to become the leading online verification service provider, offering a reliable, secure, and cost-effective solution for our clients.
        </Typography>
      </Stack>

      {/* Contact Us Section */}
      <Stack sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
        <Typography
          sx={{
            fontSize: '24px',
            width: '100%',
            maxWidth: '1250px',
            height: 'auto',
            margin: '0px 0px 8px',
            mr: 2,
            display: { xs: 'block', md: 'flex' },
            color: '131D30',
            fontWeight: 'bold',
          }}
        >
          Contact Us
        </Typography>

        <Typography
          sx={{
            fontSize: '16px',
            width: '100%',
            maxWidth: '1250px',
            height: 'auto',
            margin: '0px 0px 24px',
            mr: 2,
            display: { xs: 'block', md: 'flex' },
            color: '364053',
          }}
        >
          We value our customers' feedback and support, and we welcome any questions or queries you may have about our services. You can reach us through LiveChat,
           email us at care@smsverification.xyz  or join our Discord community by clicking this LINK. Thank you for considering SMSverification.xyz for your online security and verification needs.
        </Typography>
      </Stack>
      <Footer/>
      </Container>
      
     
    </>
  );
};

export default About;
