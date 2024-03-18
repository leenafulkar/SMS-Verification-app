import React from 'react';
import { Icon } from '@iconify/react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import arrowRight from '@iconify-icons/fa-solid/arrow-right';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Card, Stack, Button, Typography } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const content = [
  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '18px', fontWeight: 'bold', padding: '15px' }}>
      Select the country and service you want to receive the SMS from
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '22px' }}>
      For example, if you want to create a USA Blizzard account,choose USA as the country and
      Blizzard as the service.
    </Typography>
    <Typography color="#D1ECFC" sx={{ fontSize: '35px' }}>
      - - - - - - - - - - - - - -
    </Typography>
    <Typography color="#D1ECFC" sx={{ fontSize: '16px' }}>
      Step 01
    </Typography>
  </>,
  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '18px', fontWeight: 'bold', padding: '15px' }}>
      Your online number will be displayed in your user dashboard
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '25px' }}>
      Use the provided number in the registration process of the selected service
    </Typography>
    <Typography color="#D1ECFC" sx={{ fontSize: '35px' }}>
      - - - - - - - - - - - - - -
    </Typography>
    <Typography color="#D1ECFC" sx={{ fontSize: '16px' }}>
      Step 02
    </Typography>
  </>,
  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '18px', fontWeight: 'bold', padding: '15px' }}>
      Once you receive the SMS, the confirmation code will be displayed
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '22px' }}>
      Copy and paste the code to the registration page and activate your account
    </Typography>
    <Typography color="#D1ECFC" sx={{ fontSize: '35px' }}>
      - - - - - - - - - - - - - -
    </Typography>
    <Typography color="#D1ECFC" sx={{ fontSize: '16px' }}>
      Step 03
    </Typography>
  </>,
];

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#7846FF', // Set color to white
  bgColor: '#FFFFFF', // Set background color to #FFA800
  width: '200.32px', // Set width
  height: '40px', // Set height
  //   padding: '6px 24px', // Set padding
}));
export default function Gif() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Box
    sx={{
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    }}
  >
    <Stack direction={{ xs: 'column', md: 'row' }} sx={{ marginBottom: '20px' }}>
      <Box
        sx={{
          width: '337.96px',
          height: 'auto',
          borderRadius: '20px',
          bgcolor: '#1E80FE',
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {content.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    height: '428px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  <Typography>{step}</Typography>
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ marginLeft: { xs: 0, md: '35px' } , height:'auto'}}>
        <Card sx={{ width: '100%',height:'auto', bgcolor: '#FFFFFF', boxShadow:'none' }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: 28,
                width: '490px', height: 'auto' ,
                color: '#131D30',
                fontWeight: 'bold',
                margin: '0px 0px 15px ',
              }}
            >
              Why should you choose SMSVerification.xyz?{' '}
            </Typography>
            <Typography
              sx={{ fontSize: '16px', width: '458.04px', height: '84px', color: '#364053' }}
            >
              We value our customers and strive to provide the best possible experience. If you
              didn't receive your SMS, we offer an instant and automatic refund. Learn more
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '458.04px', height: 'auto' ,
                color: '#364053',
                marginTop: '10px',
              }}
            >
              Global coverage in 196 countries allows you to use our online numbers on any
              platform worldwide.
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                width: '490px', height: 'auto' ,
                color: '#364053',
                marginTop: '10px',
              }}
            >
              Easy and secure payment options, including credit card and cryptocurrency, Select
              the one that works best for you. Learn more
            </Typography>
          </CardContent>
          <CardActions>
            <ColorButton
              variant="text"
              sx={{
                color: '#258FFE',
                fontWeight: 'bold',
                marginTop: '25px',
                fontSize: '16px',
                width: '146.32', height: 'auto' ,
                marginLeft:'-35px',
                textTransform:'none'
              }}
            >
              Start now
              <Icon icon={arrowRight} style={{ marginLeft: '14px' }} />
            </ColorButton>
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  </Box>
</div>
  );
}
