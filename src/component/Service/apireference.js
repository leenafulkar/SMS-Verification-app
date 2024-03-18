import React from 'react';
import { Icon } from '@iconify/react';
import arrowRight from '@iconify-icons/fa-solid/arrow-right';

import { Stack } from '@mui/system';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF', // Set color to white
  backgroundColor: '#7846FF', // Set background color to #FFA800
  width: '220.98px', // Set width
  height: 'auto', // Set height
  padding: '6px 24px', // Set padding
  margin: '30px 0px 0px',
  fontSize: '16px', // Increase font size
  borderRadius: '25px',
  '&:hover': {
    backgroundColor: '#BDA5FF', // Set hover background color
  },
}));

export default function APIReference() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
       direction={{ xs: 'column', md: 'row' }} 
        sx={{
           
            width: '100%',
          height: 'auto',
          background: '#131d30',
          color: '#000000',
          margin: '48px 0px 0px',
        }}
      >
        <Stack
 direction={{ xs: 'column', md: 'row' }} 
          alignContent="center"
          alignItems="center"
          justifyContent="center"
          spacing={8}
        >
          <Box
            sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: '370px' },
              height: '270px',
              color: '#000000',
              padding: '35px 0px 0px',
              font: '16px',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                maxWidth: '320px',
                height: '84px',
                color: '#FFFFFF',
                fontSize: '28px',
                margin: '0px 0px 12px',
                fontWeight: 'bold',
              }}
            >
              Integrate our service into your project
            </Typography>
            <Typography
              sx={{
                width: '100%',
                maxWidth: '360px',
                height: '56px',
                color: '#9FAFCE',
                fontSize: '16px',
              }}
            >
              Our user-friendly REST API documentation allows you to integrate our service with
              ease.
            </Typography>
            <ColorButton sx={{textTransform:'none'}}>
              Full API reference
              <Icon icon={arrowRight} style={{ marginLeft: '14px' }} />
            </ColorButton>
          </Box>
          {/* ----------------------------------------------- */}
          <Box
            sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: '500px' },
              height: 'auto',
              background: 'linear-gradient(180deg, rgba(7, 11, 18, 0) 0%, #324A8E 100%)',
              color: '#000000',
              fontSize: '16px',
              padding: { xs: '20px', md: '40px 46px' },
              marginBottom: '0px',
              position: 'relative',
              overflow: 'hidden',

            }}
          >
            <Typography
              sx={{
                width: '345.6px',
                height: '20.8px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                mb: 3,
              }}
            >
              {' '}
              <span style={{ color: '#A360FF' }}>use</span> SMSVerification\{' '}
              <span style={{ color: '#FFA767' }}>SMSVerification</span>;
            </Typography>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '16px',
                mb: 3,
              }}
            >
              require_once <span style={{ color: '#FF5B37' }}>&apos;vendor/autoload.php&apos;</span>
              ;
            </Typography>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '16px',
                mb: 3,
              }}
            >
              <span style={{ color: '#1E80FE' }}>$api</span> = new{' '}
              <span style={{ color: '#FFA767' }}>SMSVerification</span> ({' '}
              <span style={{ color: '#FF5B37' }}>&apos;username&apos;, &apos;password&apos;</span>);
            </Typography>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              $disposableActions = <span style={{ color: '#1E80FE' }}>$api</span> ~
              getDisposableActions();
            </Typography>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}