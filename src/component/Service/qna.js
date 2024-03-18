import React from 'react';
import { Icon } from '@iconify/react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import arrowDown from '@iconify-icons/fa-solid/arrow-down';
import arrowRight from '@iconify-icons/fa-solid/arrow-right';

import Accordion from '@mui/material/Accordion';
import { styled, useTheme } from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box, Stack, Button, Typography } from '@mui/material'; // Replace with the correct arrow icon

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const content = [
  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '16px', fontWeight: 'bold', padding: '20px' }}>
      Luke Eldridge{' '}
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '20px' }}>
      &quot;Had an issue where I hadn&apos;t received my balance after paying, however it was
      shortly resolved by staff and am very happy with the service. Works flawlessly and is much
      cheaper than many other services that I have used in the past.&quot;
    </Typography>
  </>,
  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '16px', fontWeight: 'bold', padding: '20px' }}>
      MrShadow{' '}
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '20px' }}>
      ”This service has served me well and the support is quick and amazing, if I ever had an issue
      the staff would be fast to help me!”
    </Typography>
  </>,
  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '16px', fontWeight: 'bold', padding: '00px' }}>
      Stealthy{' '}
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '20px' }}>
      ”BEST and CHEAP service!!! I&apos;ve been a regular user since 2021 and never experienced any
      issues in this service. The phone numbers are high quality and work with all services and
      there&apos;s a variety of countries to choose from. The staff are very wonderful and kind
      people...”
    </Typography>
  </>,
  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '16px', fontWeight: 'bold', padding: '20px' }}>
      Adamson{' '}
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '20px' }}>
      ”Forgot my account login information, but got my access to the site pretty easily with the
      help of the friendly staff. Will be using this site for a long time I reckon!”
    </Typography>
  </>,
  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '16px', fontWeight: 'bold', padding: '20px' }}>
      Arne Diehl{' '}
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '20px' }}>
      ”Worked flawlessly. The number I got was able to confirm a telegram registration without a
      problem. The whole process took a little over a day, but it was well worth the wait. The site
      has a clean and easy to use interface. All in all, I can recommend this service without a
      doubt.”
    </Typography>
  </>,
  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '16px', fontWeight: 'bold', padding: '20px' }}>
      Ralp{' '}
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '20px' }}>
      ”Omg This site really works,I actually was able to use their number for verification Thank you
      so Much”
    </Typography>
  </>,

  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '16px', fontWeight: 'bold', padding: '20px' }}>
      Liana Rose{' '}
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '20px' }}>
      ”Good and High Quality Verification Service - Not the cheapest but one of them - Legit - Safe”
    </Typography>
  </>,
  <>
    <Typography color="#FFFFFF" sx={{ fontSize: '16px', fontWeight: 'bold', padding: '20px' }}>
      Silvana Sousa{' '}
    </Typography>
    <Typography color="#D1ECFC" sx={{ padding: '20px' }}>
      ”Good services and affordable prices.”
    </Typography>
  </>,
];

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#2186FE', // Set color to white

  width: '100%', // Set width
  height: '28px', // Set height
  fontSize: '16px', // Increase font size
  marginTop: '120px',
}));

export default function QandA() {
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
          maxWidth: '948px',

          height: 'auto',
          margin: '48px 0px 0px',
        }}
      >
        <Typography
          sx={{
            width: '100%',
            height:'auto',
            fontSize: '36px',
            margin: ' 0px 0px 12px ',
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#131D30',

          }}
          direction={{ xs: 'column', md: 'row' }} 

        >
          Frequently Asked Questions
        </Typography>
        <Typography
          sx={{
            width: '100%',
            height: 'auto',
            margin: ' 0px 0px 12px ',
            textAlign: 'center',
            fontSize: '20px',
            color: '#131D30',
          }}
          direction={{ xs: 'column', md: 'row' }} 

        >
          Have questions? Keep calm and read ahead...
        </Typography>
        <Accordion
          sx={{
            width: '100%',
            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            color: '#364053',
            border:'none',
            boxShadow:'none'
          }}
        >
          <AccordionSummary
            expandIcon={<Icon icon={arrowDown} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What are Online numbers?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px'}}>
            Online numbers are one-time-use numbers that can receive SMS and are used to verify
            accounts on various online platforms. Our platform makes it easy to activate a new
            account by receiving SMS through our user-friendly dashboard. We offer worldwide numbers
            that can be used with a wide range of services, including Google, Gmail, Blizzard,
            Twitter, Facebook, Instagram, and many more.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: '100%',
            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            color: '#364053',
            border:'none',
            boxShadow:'none'
          }}
        >
          <AccordionSummary
            expandIcon={<Icon icon={arrowDown} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Why do I need Online numbers?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px'}}>
            <Typography> There is a wide variety of reasons to get online numbers:</Typography>
            <Typography>
              1. Online numbers provide a layer of privacy and security, since they are not
              connected to any personal information.
            </Typography>
            <Typography>
              2. If you have been blocked or do not have access to your own account on different
              platforms you must use a new phone number to open a new account.
            </Typography>

            <Typography>
              3. Sometimes there are promotions on different services which only apply to new users
              who register a new account.
            </Typography>

            <Typography>
              4. Some platforms, apps and services do not offer their services across the world,
              with our solution you can use any service you want by using an online number for the
              specific country you want.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: '100%',
            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            border:'none',
            boxShadow:'none',
            color: '#364053',
          }}
        >
          <AccordionSummary
            expandIcon={<Icon icon={arrowDown} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What are Rental numbers?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px'}}>
            Rental numbers are online phone numbers that can be used for a selected period of time
            (up to 4 weeks!), and can get unlimited SMS to verify accounts on multiple platforms.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: '100%',
            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            border:'none',
            boxShadow:'none',
            color: '#364053',
          }}
        >
          <AccordionSummary
            expandIcon={<Icon icon={arrowDown} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What type of payments are supported?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px'}}>
            We offer three payment methods: Credit Cards, gift cards, and cryptocurrency. just
            choose the most convenient way for you in the checkout page. Learn more
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: '100%',            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            border:'none',
            boxShadow:'none',
            color: '#364053',
          }}
        >
          <AccordionSummary
            expandIcon={<Icon icon={arrowDown} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What is Client Protection?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px'}}>
            Client protection is an exclusive service offered by SMSVerification to protect its
            customers from paying for numbers that do not work or receive SMS. This means that if a
            customer purchases a number and does not receive the SMS, they will not be charged for
            that number and the balance will be automatically and instantly refunded. This
            protection ensures that customers only pay for numbers that are successful and can be
            used to verify accounts on online platforms.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: '100%',            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            color: '#364053',
            border:'none',
            boxShadow:'none'
          }}
        >
          <AccordionSummary
            expandIcon={<Icon icon={arrowDown} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What if I can&apos;t find the service I need?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px'}}>
            If you cannot find a specific service on our platform, you can use the &quot;Other&quot;
            service as an alternative. We keep updating our services on a daily basis, and our team
            adds over 10 new services every week, so if you do not find the service you are looking
            for, you can check back later or contact our support team, they will be happy to assist
            you and check the availability of the service you need.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: '100%',
            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            border:'none',
            boxShadow:'none',
            color: '#364053',
          }}
        >
          <AccordionSummary
            expandIcon={<Icon icon={arrowDown} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What is about privacy?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px'}}>
            When using SMSVerification services, you do not need to share any personal or
            identifiable information. We do not collect any cookies or history of numbers, so your
            privacy is fully protected. Our services are designed to be easy and convenient,
            allowing you to activate new accounts on online platforms without giving out your
            personal phone number or any other information.
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* --------------------------------------- */}
      <Box
        sx={{
            width: '100%', // Set the width to 100% to make it responsive
            maxWidth: '948px', // Set a maximum width to maintain a reasonable size
           
          height: 'auto',
          borderRadius: '20px',
          bgcolor: '#131d30',

          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Change the direction based on screen size

          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '48px 0px 0px ',
          padding: '24px 48px 24px 40px',
        }}
      >
        {/* First Stack */}
        <Stack>
          <Box
            sx={{
              width: '253.83px',
              height: '272px',
              color: '#000000',
              font: '16px',
            }}
          >
            <Typography
              sx={{
                width: '253.83px',
                height: '42px',
                margin: '12px 0px 4px',
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#FFFFFF',
              }}
            >
              Customers Choice
            </Typography>
            <Typography
              sx={{
                width: '230.83px',
                height: '56px',
                fontSize: '16px',
                color: '#D1ECFC',
              }}
            >
              Find out what our customers have to say about us.
            </Typography>
            <ColorButton variant="text" sx={{width:'100%',fontSize:'16px', textTransform:'none'}}>
              Read more reviews here
              <Icon icon={arrowRight} style={{ marginLeft: '14px' }} />
            </ColorButton>
          </Box>
        </Stack>

        {/* Second Stack */}
        <Stack>
          <Box
            sx={{
            width:'100%',
              maxWidth: '386px',
              height: '244px',
              borderRadius: '20px',
              bgcolor: '#1A263E',
              marginTop: { xs: '20px', md: '0' }, // Add margin top for small screens

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
                        height: 255,
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
        </Stack>
      </Box>
      {/* ---------------------------------------------- */}
      <Box
      sx={{
        width: '100%',
        maxWidth: '948px',
        height: 'auto',
        margin: '48px 0px 0px',
        bgcolor: '#131d30',
        borderRadius: '20px',
        padding: '24px 48px 24px 40px',
        justifyContent: 'space-between',
        display: 'flex',

        flexDirection: { xs: 'column', md: 'row' }, 
      }}
      spacing={2}
    >
      <Box
        sx={{
          width: '428.38px',
          height: 'auto',
        }}
      >
        <Typography
          sx={{
            width: '428.38px',
            height: 'auto',
            color: '#FFFFFF',
            fontSize: '28px',
            fontWeight: 'bold',
          }}
        >
          Ready to get started?
        </Typography>
        <Typography
          sx={{
            width: '428.38px',
            height: 'auto',
            fontSize: '16px',
            color: '#D1ECFC',
          }}
        >
          Create an account and get started in less than a minute.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '36px',
        }}
      >
        <ColorButton
          variant="text"
          sx={{
            width: '100%',
            maxWidth:'280.79px',
            height: 'auto',
            borderRadius: '20px',
            bgcolor: '#1E80FE',
            color: '#FFFFFF',
            fontSize: '14px',
            padding: '4px 24px',
            marginTop:'20px',
            marginLeft:'80px',
            textTransform:'none',
            '&:hover': {
              backgroundColor: '#0000FF',
            },
          }}
        >
          Create SMSVerification account
        </ColorButton>
      </Box>
    </Box>
    </div>
  );
}
