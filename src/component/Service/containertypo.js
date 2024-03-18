import React from 'react';
import { Icon } from '@iconify/react';
import trophyLogo from '@iconify-icons/fa-solid/trophy';
import lmessageLogo from '@iconify-icons/fa-solid/comment';
import userAddPlus from '@iconify-icons/fa-solid/user-plus';
import investingIcon from '@iconify-icons/fa-solid/chart-line';
import MoneyWalletLogo from '@iconify-icons/fa-solid/money-bill-alt';
import chatBubbleTypingOval from '@iconify-icons/fa-solid/comment-dots';

import { Box, Stack, Container, Typography, CssBaseline } from '@mui/material';


export default function ContainerTypo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <CssBaseline />
      <Container sx={{
        direction: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between', // Center the buttons horizontally
        width: '100%',
        height: 'auto',
        flexGrow: 1,
        display: { xs: 'block', md: 'flex' },
        px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

      }}>
        <Box
          sx={{
            bgcolor: '#131D30',
            color: '#000000',
            padding: '28px 54px',
            marginTop: '70px',
            width: '100%',
            height: '100%',
            borderRadius: '16px',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={8}
            sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
            <Box sx={{ width: '100%', height: 'auto' }}>
              <Typography
                sx={{
                  fontSize: '20px',
                  color: '#FFFFFF',
                  margin: '0px 0px 2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <Icon
                  icon={lmessageLogo}
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    verticalAlign: 'text-bottom',
                    marginRight: '10px',
                  }}
                />
                Dedicated Support
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#9FAFCE',
                  padding: ' 0px opx 0px 36px',
                  marginLeft: '25px',
                }}
              >
                Contact us through live-chat on site, Discord and email 24/7
              </Typography>
            </Box>

            <Box sx={{ width: '100%', height: 'auto' }}>
              <Typography
                sx={{
                  fontSize: '20px',
                  color: '#FFFFFF',
                  margin: '0px 0px 2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <Icon
                  icon={MoneyWalletLogo}
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    verticalAlign: 'text-bottom',
                    marginRight: '10px',
                  }}
                />
                Affordable Pricing
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#9FAFCE',
                  padding: ' 0px opx 0px 36px',
                  marginLeft: '35px',
                }}
              >
                Best prices in the market, starting from $0.01 per SMS
              </Typography>
            </Box>

            <Box sx={{ width: '100%', height: 'auto' }}>
              <Typography
                sx={{
                  fontSize: '20px',
                  color: '#FFFFFF',
                  margin: '0px 0px 2px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <Icon
                  icon={trophyLogo}
                  style={{
                    fontSize: '20px',
                    color: '#FFFFFF',
                    verticalAlign: 'text-bottom',
                    marginRight: '10px',
                  }}
                />
                Special VIP Program
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#9FAFCE',
                  padding: ' 0px opx 0px 36px',
                  marginLeft: '35px',
                }}
              >
                Qualify to our VIP Program and get special discounts, vouchers, and much more!
              </Typography>
            </Box>
          </Stack>
        </Box>
       
        
       
      </Container>
       {/* ------------------------------------------------ */}
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: '50px',
            fontSize: { xs: '30px', sm: '35px', md: '45px', lg: '50px', xl: '55px' },

          }}
        >
          <Typography sx={{ fontSize: '36px', color: '#131D30', fontWeight: 'bold' }}>
            <span style={{ color: '#1E80FE' }}>Simple</span> and{' '}
            <span style={{ color: '#7846FF' }}> fast</span> process.
          </Typography>
          <Typography sx={{ fontSize: '36px', color: '#131D30', fontWeight: 'bold' }}>
            Start verifying in minutes!
          </Typography>
        </Box>
        {/* -------------------------------------- */}
        <Container
        sx={{
        direction: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between', // Center the buttons horizontally
        width: '100%',
        height: 'auto',
        flexGrow: 1,
        display: { xs: 'block', md: 'flex' },
        px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

      }}>
        <Box
        sx={{
          color: '#000000',
          padding: '36px 42px',
          margin: '24px 0px 0px ',
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={14}>
          <Box direction="column" justifyContent="flex-start" alignItems="center" >
            <Box>
              <Icon
                icon={userAddPlus}
                style={{
                  fontSize: '20px',
                  bgcolor: '#1E80FE1A',
                  margin: '0px 0px 12px',
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#131D30',
                margin: ' 0px 0px 2px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Create an account
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
              It only takes 30 seconds to create an account.
            </Typography>
          </Box>

          <Box direction="column" justifyContent="flex-start" alignItems="center" spacing={2}>
            <Box>
              <Icon
                icon={investingIcon}
                style={{
                  fontSize: '20px',
                  bgcolor: '#1E80FE1A',
                  margin: '0px 0px 12px',
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#131D30',
                margin: '0px 0px 2px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Deposit funds
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',

                
              }}
            >
              Pay easily and securely through Credit Card or Cryptocurrency.
            </Typography>
          </Box>

          <Box direction="column" justifyContent="flex-start" alignItems="center" spacing={2} >
            <Box>
              <Icon
                icon={chatBubbleTypingOval}
                style={{
                  fontSize: '20px',
                  bgcolor: '#1E80FE1A',
                  margin: '0px 0px 12px',
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: '20px',
                bgolor: '#1E80FE1A',
                margin: '0px 0px 2px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Select a service
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
              Variety of services that can be purchased with a mouse click.
            </Typography>
          </Box>
        </Stack>
      </Box>
      </Container>
    </div>
  );
}
