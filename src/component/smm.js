import React from 'react'

import { Icon } from '@iconify/react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import arrowDown from '@iconify-icons/fa-solid/arrow-down';
import CardContent from '@mui/material/CardContent';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import arrowRight from '@iconify-icons/fa-solid/arrow-right';
import Button from '@mui/material/Button';
import { Box, Stack,Card, Container, Typography } from '@mui/material'; // Replace with the actual icon you want to use
import { styled, useTheme } from '@mui/material/styles';
import Lottie from 'react-lottie';
import animationJson from '../Lottiefiles/Animation3.json';
import {Link } from 'react-router-dom';
import telegramIcon from '@iconify-icons/logos/telegram';
import instagramIcon from '@iconify-icons/logos/instagram';
import twitterIcon from '@iconify-icons/logos/twitter';
import youtubeIcon from '@iconify-icons/logos/youtube-icon';
import facebookIcon from '@iconify-icons/logos/facebook';
import tiktokIcon from '@iconify-icons/logos/tiktok';
import discordIcon from '@iconify-icons/logos/discord';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';  // Import MUI TrendingUp icon
import ContactMailIcon from '@mui/icons-material/ContactMail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';


import Footer from './Service/footer';

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
const SMM = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationJson,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };


  return (
    <div style={{  flexDirection: 'column', alignItems: 'center',  display: { xs: 'block', md: 'flex'},
                     px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints
 }}>
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
                width: '670.96px',
                height: '67.2px',
                mr: 2,

                display: { xs: 'block', md: 'flex' },


              }}
              
            >
             Enhance  your reach
            </Typography>
            <Typography
              sx={{
                fontSize: '55px',
                fontHeight: '72px',
                fontWeight: 'bold',
                color: 'black',
                width: '750.65px',
                height: '70.2px',
                mr: 2,

                display: { xs: 'block', md: 'flex' },
              }}
            >
              with our SMM Panel
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
              style={{ textTransform: 'none',}}
              >
                Get started today
                <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
                   </ColorButton>
                   </Link>
              <Button
                variant="contained"
                sx={{
                  fontSize: '22px',
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
                More details
                <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
              </Button>
              </Box>
        </Stack>
        <Stack sx={{ mt: { xs: 3, md: 0 } }}>
          <Box>
            <Lottie options={lottieOptions} width={420} height={420} />
          </Box>
        </Stack>
      </Container>
      {/* ---------------------------------------- */}

<Container sx={{
  direction: 'column',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'space-between', // Center the buttons horizontally
  width: '100%',
  // maxWidth:'1250px',
  height: 'auto',
  flexGrow: 1,
  display: { xs: 'block', md: 'flex' },
  px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

}}>
  <Box
    sx={{
      bgcolor: '#FFFFFF',
      color: '#000000',
      padding: '28px 54px',
      marginTop: '70px',
      width: '100%',
      height: '100%',
      borderRadius: '16px',
    }}
  >
    <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={6}
      sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
      <Box sx={{ width: '100%', height: 'auto',     
 }}>
        <Typography
          sx={{
            fontSize: '22px',
            color: '#131D30',
            margin: '20px 0px 2px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
         
          Dedicated Support
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#131D30',
            padding: ' 0px opx 0px 36px',
          }}
        >
          Contact us through live-chat on site, Discord and email 24/7
        </Typography>
      </Box>

      <Box sx={{ width: '100%', height: 'auto' }}>
        <Typography
          sx={{
            fontSize: '22px',
            color: '#131D30',
            margin: '0px 0px 2px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
         
         Client Protection  
               </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#131D30',
            padding: ' 0px opx 0px 36px',
          }}
        >
         Automatic and instant refund for unsuccessful orders
        </Typography>
      </Box>

      <Box sx={{ width: '100%', height: 'auto', 
 }}>
        <Typography
          sx={{
            fontSize: '22px',
            color: '#131D30',
            margin: '0px 0px 2px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          
          Fast Delivery
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#131D30',
            padding: ' 0px opx 0px 36px',
          }}
        >
Variety of offers to increase your presence today        </Typography>
      </Box>
      <Box sx={{ width: '100%', height: 'auto'
 }}>
        <Typography
          sx={{
            fontSize: '22px',
            color: '#131D30',
            margin: '20px 0px 2px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          
          Quality Engagement
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#131D30',
            padding: ' 0px opx 0px 36px',
          }}
        >
Engaged audience, real subscribers, views, likes & more!     
  </Typography>
      </Box>
    </Stack>
  </Box>
 
  
 
</Container>
{/* ----------------------------------------------------------------- */}
<Container
  sx={{
    direction: { xs: 'column', md: 'row' },
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between', // Center the buttons horizontally
    width: '100%',
    maxWidth: '1245px',

    height: 'auto',
    flexGrow: 1,
    display: { xs: 'block', md: 'flex' },
    px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints
  }}
>
  <Box
     sx={{
      direction: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '1245px',
      height: 'auto',
      mb: { xs: 3, md: 0 },
      display: { xs: 'block', md: 'flex' },
      margin: '64px 0px 0px'
    }}
  >
    <Stack
      sx={{
        maxWidth: '407px',
        height: 'auto',
        textAlign: 'left',
        marginRight: { xs: 0, md: '40px' },
        display: { xs: 'block', md: 'flex' },
        marginTop:'-64px'
      }}
    >
      <Typography sx={{ fontSize: '36px', color: '#131D30', fontWeight: 'bold' }}>Social Media Marketing</Typography>
      <Typography sx={{ fontSize: '36px', color: '#FF4A4A', fontWeight: 'bold' }}>Best Seller</Typography>
    </Stack>
    <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '650px',
            width: '100%',
            height: 'auto',
            textAlign: 'center',
            flexWrap: 'wrap',
          }}
          direction={{ xs: 'column', md: 'row' }}
          spacing={2} // Adjust spacing between buttons
        >
          <Button sx={{ fontSize: '20px', textTransform: 'none', color: '#000000', width: '178px', height: '72px', flex: '1 0 auto' }}>
            <Icon icon={telegramIcon} style={{ fontSize: '24px', marginRight: '8px' }} />
            Telegram
          </Button>
          <Button sx={{ fontSize: '20px', textTransform: 'none', color: '#000000', width: '178px', height: '72px', flex: '1 0 auto' }}>
            <Icon icon={instagramIcon} style={{ fontSize: '24px', marginRight: '8px' }} />
            
          </Button>
          <Button sx={{ fontSize: '20px', textTransform: 'none', color: '#000000', width: '178px', height: '72px', flex: '1 0 auto' }}>
            <Icon icon={twitterIcon} style={{ fontSize: '24px', marginRight: '8px' }} />
            Twitter
          </Button>
          <Button sx={{ fontSize: '20px', textTransform: 'none', color: '#000000', width: '178px', height: '72px', flex: '1 0 auto' }}>
            <Icon icon={youtubeIcon} style={{ fontSize: '24px', marginRight: '8px' }} />
            YouTube
          </Button>
          <Button sx={{ fontSize: '20px', textTransform: 'none', color: '#000000', width: '178px', height: '72px', flex: '1 0 auto' }}>
            <Icon icon={facebookIcon} style={{ fontSize: '24px', marginRight: '8px' }} />
            Facebook
          </Button>
          <Button sx={{ fontSize: '20px', textTransform: 'none', color: '#000000', width: '178px', height: '72px', flex: '1 0 auto' }}>
            <Icon icon={tiktokIcon} style={{ fontSize: '24px', marginRight: '8px' }} />
           
          </Button>
          <Button sx={{ fontSize: '20px', textTransform: 'none', color: '#000000', width: '178px', height: '72px', flex: '1 0 auto' }}>
            <Icon icon={discordIcon} style={{ fontSize: '24px', marginRight: '8px' }} />
            
          </Button>
        </Stack>
      </Box>
    </Container>


{/* -------------------------------------------------------------------------- */}
<Container sx={{
  direction: 'column',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'space-between', // Center the buttons horizontally
  width: '100%',
  maxWidth:'1250px',
  height: 'auto',
  flexGrow: 1,
  display: { xs: 'block', md: 'flex' },
  px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

}}>
  <Box
    sx={{
      bgcolor: '#FFFFFF',
      color: '#000000',
      padding: '28px 54px',
      marginTop: '70px',
      width: '100%',
      height: '100%',
      borderRadius: '16px',
    }}
  >
    <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={6}
      sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 }, textAlign:'center' }}>
      <Box sx={{ width: '100%', height: 'auto' }}>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#131D30',
            margin: '0px 0px 2px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
         
         Buy Instagram Followers
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            color: '#7846FF',
            padding: ' 0px opx 0px 36px',
            marginTop:'20px'
          }}
        >
Starting from $0.40 per 1,000
        </Typography>
       
        <Button
                variant="text"
                style={{
                  fontSize: '14px',
                  color: '#7846FF',
                  fontWeight: 'normal',
                  marginTop:'10px',
                  padding:'0px 14px 0px 24px',
                  textTransform: 'none',

                }}
              >
                View
                <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
              </Button>
      </Box>

      <Box sx={{ width: '100%', height: 'auto' }}>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#131D30',
            margin: '0px 0px 2px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
         
         Buy Instagram Likes
               </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            color: '#7846FF',
            padding: ' 0px opx 0px 36px',
            marginTop:'20px'

          }}
        >
Starting from $0.75 per 1,000
        </Typography>
        <Button
                variant="text"
                style={{
                  fontSize: '14px',
                  color: '#7846FF',
                  fontWeight: 'normal',
                  marginTop:'10px',
                  padding:'0px 14px 0px 24px',
                  textTransform: 'none',

                }}
              >
                View
                <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
              </Button>
      </Box>

      <Box sx={{ width: '100%', height: 'auto', 
 }}>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#131D30',
            margin: '0px 0px 2px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          
          Buy Instagram Views
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            color: '#7846FF',
            padding: ' 0px opx 0px 36px',
            marginTop:'20px'

          }}
        >
Starting from $0.025 per 1,000   
   </Typography>
   <Button
                variant="text"
                style={{
                  fontSize: '14px',
                  color: '#7846FF',
                  fontWeight: 'normal',
                  marginTop:'10px',
                  padding:'0px 14px 0px 24px',
                  textTransform: 'none',

                }}
              >
                View
                <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
              </Button>
      </Box>
      <Box sx={{ width: '100%', height: 'auto'
 }}>
        <Typography
          sx={{
            fontSize: '16px',
            color: '#131D30',
            margin: '0px 0px 2px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          
          Buy Instagram Profile Visits
                  </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            color: '#7846FF',
            padding: ' 0px opx 0px 36px',
            marginTop:'20px'

          }}
        >
Starting from $0.80 per 1,000
  </Typography>
  <Button
                variant="text"
                style={{
                  fontSize: '14px',
                  color: '#7846FF',
                  fontWeight: 'normal',
                  marginTop:'10px',
                  padding:'0px 14px 0px 24px',
                  textTransform: 'none',

                }}
              >
                View
                <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
              </Button>
      </Box>
    </Stack>
  </Box>
 
  
 
</Container>
      {/* ----------------------------------------------------------- */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
       direction={{ xs: 'column', md: 'row' }} 
        sx={{
           
            width: '100%',
          height: 'auto',
          background: '#131d30',
          color: '#000000',
          margin: '84px 0px 0px',
          padding:'48px 0px 0px'
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
              height: '228px',
              color: '#000000',
              font: '16px',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                maxWidth: '320px',
                height: '84px',
                color: '#FFFFFF',
                fontSize: '56px',
                fontWeight: 'bold',
                marginLeft:'30px'
              }}
            >
40,000            </Typography>
            <Typography
              sx={{
                width: '100%',
                maxWidth: '360px',
                height: '56px',
                color: '#FFFFFF',
                fontSize: '28px',
                margin: '8px 0px 0px',
                marginLeft:'30px'


              }}
            >
             Registered Clients


            </Typography>
           
          </Box>
          <Box
            sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: '370px' },
              height: '228px',
              color: '#000000',
              font: '16px',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                maxWidth: '320px',
                height: '84px',
                color: '#FFFFFF',
                fontSize: '56px',
                fontWeight: 'bold',
                marginLeft:'10px'

              }}
            >
150,000
         </Typography>
            <Typography
              sx={{
                width: '100%',
                maxWidth: '360px',
                height: '56px',
                color: '#FFFFFF',
                fontSize: '28px',
                margin: '8px 0px 0px',
                marginLeft:'10px'


              }}
            >
Completed Orders



            </Typography>
           
          </Box>
          <Box
            sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: '370px' },
              height: '228px',
              color: '#000000',
              font: '16px',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                maxWidth: '320px',
                height: '84px',
                color: '#FFFFFF',
                fontSize: '56px',
                fontWeight: 'bold',
              }}
            >
7+
           </Typography>
            <Typography
              sx={{
                width: '100%',
                maxWidth: '360px',
                height: '56px',
                color: '#FFFFFF',
                fontSize: '28px',
                margin: '8px 0px 0px',

              }}
            >
Supported Services



            </Typography>
           
          </Box>
          <Box
            sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: '370px' },
              height: '228px',
              color: '#000000',
              font: '16px',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                maxWidth: '320px',
                height: '84px',
                color: '#FFFFFF',
                fontSize: '56px',
                fontWeight: 'bold',
              }}
            >
0.01 USD
          </Typography>
            <Typography
              sx={{
                width: '100%',
                maxWidth: '360px',
                height: '56px',
                color: '#FFFFFF',
                fontSize: '28px',
                margin: '8px 0px 0px',

              }}
            >
Average cost*



            </Typography>
            <Typography
              sx={{
                width: '100%',
                maxWidth: '293.4px',
                height: '56px',
                color: '#D5ADF9',
                fontSize: '16px',
                margin: '4px 0px 0px',

              }}
            >
*Per 1 000 Quantity's
</Typography>
           
          </Box>
        </Stack>
      </Box>
    </div>
    {/* ------------------------------------- */}
    <Container sx={{
  direction: { xs: 'column', md: 'row' },
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'space-between', // Center the buttons horizontally
  width: '100%',
  height: 'auto',
  flexGrow: 1,
  display: { xs: 'block', md: 'flex' },
  px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

}}>
        <Stack sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 },
     }}>
        <Typography
              sx={{
                fontSize: '36px',
                fontHeight: '72px',
                fontWeight: 'bold',
                color: '#131D30',
                width: '100%',
                height: 'auto',
                mr: 2,
                margin:'48px 0px 0px', 

                display: { xs: 'block', md: 'flex' },

              }}
              
            >
             Maximize Your
            </Typography>
            <Typography
              sx={{
                fontSize: '36px',
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
              Social Media Impact!
            </Typography>
            <Typography
              sx={{ fontSize: '18px', width: '100%',maxWidth:'483px', height: 'auto', margin: '12px 0px 0px' , mr: 2,

              display: { xs: 'block', md: 'flex' }, }}
            >
              Grow your online presence with our services! Boost your online exposure by buying followers, views, likes, and more with our customizable social media packages
            </Typography>
            <Box   sx={{ width: '100%', height: 'auto', marginTop: '20px', maxWidth:'407px',  }}>
               
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <ColorButton variant="contained"
              sx={{ 
                  textTransform: 'none',
                   bgcolor:'#FF4A4A', fontSize:'20px' ,
                   width: '100%', // Adjust the width for a larger button
                   height: '48px', // Adjust the height for a larger button
                   padding: '16px', // Adjust the padding if needed
                   '&:hover': {
                    backgroundColor: '#FF8181',// Change the background color on hover
                   
                  },}}>
                Unlock Your Social Media Potential
                <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
              </ColorButton>
            </Link> 
              </Box>
        </Stack>
        <Stack sx={{ mt: { xs: 3, md: 0 } , margin:'48px 0px 0px', marginRight:'30px'}}>
          <Box >
          <Card sx={{ width:'100% ', boxShadow:'none',
          borderRadius:'20px',
         transition: 'background-color 0.3s',
         '&:hover': {
          backgroundColor: '#7846FF',
          borderRadius: '20px',
          transform: 'scale(1.07)',
          '& .MuiCardContent-root': {
            '& .MuiTypography-root': {
              color: '#FFFFFF',
            },
          },
          '& .MuiSvgIcon-root': {
            color: '#FFFFFF', // Change the icon color on hover
          },
        },
      }}
    >
      <CardContent>
      <TrendingUpIcon style={{ fontSize: 32, color: '#364053', marginTop: '10px' }} />

        <Typography sx={{ mb: 1.5,  width:'100%',height:'auto', fontSize:'22px', color:'#131D30', }} >
         Grow your exposure
        </Typography>
        <Typography variant="body2" sx={{ maxWidth:'400px', width:'100%',height:'auto',fontSize:'16px', color:'#364053'}}>
         Social media is a great way to increase reach and awareness of your brand.
        </Typography>
      </CardContent>
     
    </Card>
          </Box>
        </Stack>
      </Container>
    {/* ------------------------------------------ */}
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
            color: '#000000',
            marginTop: '70px',
            width: '100%',
            height: '100%',
            borderRadius: '16px',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={8}
            sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
           <Card sx={{ width:'100% ', boxShadow:'none',
          borderRadius:'20px',
         transition: 'background-color 0.3s',
         '&:hover': {
          backgroundColor: '#7846FF',
          borderRadius: '20px',
          transform: 'scale(1.07)',
          '& .MuiCardContent-root': {
            '& .MuiTypography-root': {
              color: '#FFFFFF',
            },
          },
          '& .MuiSvgIcon-root': {
            color: '#FFFFFF', // Change the icon color on hover
          },
        },
      }}
    >
      <CardContent sx={{padding:'24px 20px'}}>
      <ContactMailIcon  style={{ fontSize: 32, color: '#364053', marginTop: '10px' }} />

        <Typography sx={{ mb: 1.5,  width:'100%',height:'auto', fontSize:'22px', color:'#131D30', }} >
        Increase engagement
        </Typography>
        <Typography variant="body2" sx={{ maxWidth:'400px', width:'100%',height:'auto',fontSize:'16px', color:'#364053'}}>
        Allows businesses and individuals to expand reach and connect with a high amount of audience, leading to increased traffic, sales, and growth.

</Typography>
      </CardContent>
     
    </Card>

    <Card sx={{ width:'100% ', boxShadow:'none',
          borderRadius:'20px',
         transition: 'background-color 0.3s',
         '&:hover': {
          backgroundColor: '#7846FF',
          borderRadius: '20px',
          transform: 'scale(1.07)',
          '& .MuiCardContent-root': {
            '& .MuiTypography-root': {
              color: '#FFFFFF',
            },
          },
          '& .MuiSvgIcon-root': {
            color: '#FFFFFF', // Change the icon color on hover
          },
        },
      }}
    >
      <CardContent  sx={{padding:'24px 20px'}}>
      <VisibilityIcon style={{ fontSize: 32, color: '#364053', marginTop: '10px' }} />

        <Typography sx={{ mb: 1.5,  width:'100%',height:'auto', fontSize:'22px', color:'#131D30', }} >
        Improve Credibility
        </Typography>
        <Typography variant="body2" sx={{ maxWidth:'400px', width:'100%',height:'auto',fontSize:'16px', color:'#364053'}}>
        Building trust with your audience is essential for success, and one of the best ways to do this is by increasing your online presence

</Typography>
      </CardContent>
     
    </Card>
    <Card sx={{ width:'100% ', boxShadow:'none',
          borderRadius:'20px',
         transition: 'background-color 0.3s',
         '&:hover': {
          backgroundColor: '#7846FF',
          borderRadius: '20px',
          transform: 'scale(1.07)',
          '& .MuiCardContent-root': {
            '& .MuiTypography-root': {
              color: '#FFFFFF',
            },
          },
          '& .MuiSvgIcon-root': {
            color: '#FFFFFF', // Change the icon color on hover
          },
        },
      }}
    >
      <CardContent  sx={{padding:'24px 20px'}}>
      <StarIcon style={{ fontSize: 32, color: '#364053', marginTop: '10px' }} />

        <Typography sx={{ mb: 1.5,  width:'100%',height:'auto', fontSize:'22px', color:'#131D30', }} >
        Influence
        </Typography>
        <Typography variant="body2" sx={{ maxWidth:'400px', width:'100%',height:'auto',fontSize:'16px', color:'#364053'}}>
        By leveraging your networkand creating meaningful relationships with key influencers, you can increase your reach and influence.

</Typography>
      </CardContent>
     
    </Card>
          </Stack>
        </Box>
       
        
       </Container>
    {/* --------------------------------------------- */}
    <Container sx={{
  direction: 'column',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center', // Center the buttons horizontally
  width: '100%',
  maxWidth:'948px',
  height: 'auto',
  flexGrow: 1,
  textAlign:'center',
  display: { xs: 'block', md: 'flex' },
  px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

}}>
    <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: '50px',
            fontSize: { xs: '30px', sm: '35px', md: '45px', lg: '50px', xl: '55px' },
           maxWidth:'800px',
           textAlign:'center'
          }}
        >
            
          <Typography sx={{ fontSize: '36px', color: '#131D30', fontWeight: 'bold', display: 'flex',
                      flexDirection: 'column',

          }}>
          Take advantage of our services to 

          <span style={{ color: '#7846FF' }}> generate a new income stream</span>        
             </Typography>
        </Box>
        </Container>
    {/* ------------------------------------------------------ */}
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
            color: '#000000',
            marginTop: '70px',
            width: '100%',
            height: '100%',
            borderRadius: '16px',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={8}
            sx={{ width: '100%', height: 'auto', mb: { xs: 3, md: 0 } }}>
           <Card sx={{ width:'100% ', boxShadow:'none',
          borderRadius:'20px',
         transition: 'background-color 0.3s',
         '&:hover': {
          backgroundColor: '#7846FF',
          borderRadius: '20px',
          transform: 'scale(1.07)',
          '& .MuiCardContent-root': {
            '& .MuiTypography-root': {
              color: '#FFFFFF',
            },
          },
          '& .MuiSvgIcon-root': {
            color: '#FFFFFF', // Change the icon color on hover
          },
        },
      }}
    >
      <CardContent sx={{padding:'24px 20px'}}>

        <Typography sx={{ mb: 1.5,  width:'100%',height:'auto', fontSize:'22px', color:'#131D30', }} >
        Verify Accounts
        </Typography>
        <Typography variant="body2" sx={{ maxWidth:'400px', width:'100%',height:'auto',fontSize:'16px', color:'#364053'}}>
        Use our   <span style={{ color: '#FF4A4A' }}>SMS Verification Service </span>to verify unlimited accounts worldwide.


</Typography>
      </CardContent>
     
    </Card>

    <Card sx={{ width:'100% ', boxShadow:'none',
          borderRadius:'20px',
         transition: 'background-color 0.3s',
         '&:hover': {
          backgroundColor: '#7846FF',
          borderRadius: '20px',
          transform: 'scale(1.07)',
          '& .MuiCardContent-root': {
            '& .MuiTypography-root': {
              color: '#FFFFFF',
            },
          },
          '& .MuiSvgIcon-root': {
            color: '#FFFFFF', // Change the icon color on hover
          },
        },
      }}
    >
      <CardContent  sx={{padding:'24px 20px'}}>

        <Typography sx={{ mb: 1.5,  width:'100%',height:'auto', fontSize:'22px', color:'#131D30',}} >
        Promote Account
        </Typography>
        <Typography variant="body2" sx={{ maxWidth:'400px', width:'100%',height:'auto',fontSize:'16px', color:'#364053'}}>
        Use our Social Media Marketing Service to promote the account with views, followers, likes, and more.


</Typography>
      </CardContent>
     
    </Card>
    <Card sx={{ width:'100% ', boxShadow:'none',
          borderRadius:'20px',
         transition: 'background-color 0.3s',
         '&:hover': {
          backgroundColor: '#7846FF',
          borderRadius: '20px',
          transform: 'scale(1.07)',
          '& .MuiCardContent-root': {
            '& .MuiTypography-root': {
              color: '#FFFFFF',
            },
          },
          '& .MuiSvgIcon-root': {
            color: '#FFFFFF', // Change the icon color on hover
          },
        },
      }}
    >
      <CardContent  sx={{padding:'24px 20px'}}>

        <Typography sx={{ mb: 1.5,  width:'100%',height:'auto', fontSize:'22px', color:'#131D30', }} >
        Sell the Accounts
        </Typography>
        <Typography variant="body2" sx={{ maxWidth:'400px', width:'100%',height:'auto',fontSize:'16px', color:'#364053'}}>
        Use our Digital Marketplace to sell the account and get paid!


</Typography>
      </CardContent>
     
    </Card>
          </Stack>
        </Box>
       
        
       </Container>
   
    {/* ------------------------------------------------------------- */}
    <Container sx={{
  direction: 'column',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'space-between', // Center the buttons horizontally
  width: '100%',
  maxWidth:'1250px',
  height: 'auto',
  flexGrow: 1,
  display: { xs: 'block', md: 'flex' },
  px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

}}>
    <Box
        sx={{
          width: '100%',
          maxWidth: '948px',
         textAlign:'center',
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
            border: 'none',
            boxShadow: 'none',
            
                   
          }}
        >
          <AccordionSummary
            expandIcon={<Icon icon={arrowDown} />}
            aria-controls="panel1-content"
            id="panel1-header"
           
          >
            What is Social Media Marketing (SMM)?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px', textAlign:'left'}}>
          Social Media Marketing (SMM) is a form of digital marketing that uses social media platforms to promote business, Influencers, and brands.By using SMM you will be able to reach far more audience, generate interest for potential customers.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: '100%',
            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            color: '#364053',
            border: 'none',
            boxShadow: 'none',
           
           
          }}
        >
          <AccordionSummary
            expandIcon={<Icon icon={arrowDown} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
           What social media platforms are supported?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px', textAlign:'left'}}>
          We are supporting every social media platform, including Facebook, Twitter, Instagram, Snapchat, YouTube, LinkedIn, Pinterest, TikTok and many more! Through our services, you can acquire followers, views, live views, comments, likes, retweets, shares, and many more tools to increase your online presence.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: '100%',
            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            border: 'none',
            boxShadow: 'none',
            color: '#364053',
          }}
        >
          <AccordionSummary
            expandIcon={<Icon icon={arrowDown} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Why do I need it and what are the advantages?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px', textAlign:'left'}}>
          Social media marketing can help you reach a wider audience and build brand awareness, engage with customers, increase website traffic, generate leads and boost sales. </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: '100%',
            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            border: 'none',
            boxShadow: 'none',
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
          <AccordionDetails sx={{ fontSize: '18px', textAlign:'left'}}>
            We offer three payment methods: Credit Cards, gift cards, and cryptocurrency. just
            choose the most convenient way for you in the checkout page. Learn more
          </AccordionDetails>
          </Accordion>
          <Accordion
          sx={{
            width: '100%',
            fontSize: '16px',
            margin: ' 0px 0px 12px ',
            padding: '10px 24px',
            border: 'none',
            boxShadow: 'none',
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
          <AccordionDetails sx={{ fontSize: '18px', textAlign:'left'}}>
          Client protection is an exclusive service offered by SMSVerification to protect its customers from paying for numbers that do not work or receive SMS. This means that if a customer purchases a number and does not receive the SMS, they will not be charged for that number and the balance will be automatically and instantly refunded. This protection ensures that customers only pay for numbers that are successful and can be used to verify accounts on online platforms.   </AccordionDetails>
          </Accordion>
          </Box>
          </Container>
    {/* ------------------------------------------ */}
    <Container sx={{
  direction: 'column',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'space-between', // Center the buttons horizontally
  width: '100%',
  maxWidth:'1250px',
  height: 'auto',
  flexGrow: 1,
  display: { xs: 'block', md: 'flex' },
  px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

}}>
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
            <ColorButton variant="text" sx={{width:'100%',fontSize:'15px',bgcolor:'#131d30', color:'#8659FF', textTransform:'none',
          marginLeft:'-25px',
          marginTop:'110px'
          }}>
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
      </Container>
      <Container> <Footer /></Container>
</div>

  )
}

export default SMM