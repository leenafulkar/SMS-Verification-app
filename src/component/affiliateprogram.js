import React from 'react'
import { Icon } from '@iconify/react';
import arrowRight from '@iconify-icons/fa-solid/arrow-right';
import Button from '@mui/material/Button';
import { Box, Stack,Card, Container, Typography } from '@mui/material'; // Replace with the actual icon you want to use
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import working2 from '../assets/working2.png'
import trophyLogo from '@iconify-icons/fa-solid/trophy';
import userAddPlus from '@iconify-icons/fa-solid/user-plus';
import investingIcon from '@iconify-icons/fa-solid/chart-line';
import chatBubbleTypingOval from '@iconify-icons/fa-solid/comment-dots';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import arrowDown from '@iconify-icons/fa-solid/arrow-down';
import Footer from './Service/footer';



const ColorButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF', // Set color to white
  backgroundColor: '#7846FF', // Set background color to #FFA800
  width: '300.41px', // Set width
  height: '48px', // Set height
  padding: '6px 24px', // Set padding
  fontSize: '20px',
  // Increase font size
  borderRadius:'20px',
  '&:hover': {
    backgroundColor: '#9D8BFF', // Set hover background color
  },
}));

const AffiliateProgram= () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
            color: '#131D30',
            width: '100%',
            height: 'auto',
            mr: 2,

            display: { xs: 'block', md: 'flex' },

          }}
          
        >
        Earn up to <span style={{color:'#7846FF'}}> 15%</span>
        </Typography>
        <Typography
          sx={{
            fontSize: '50px',
            fontHeight: '72px',
            fontWeight: 'bold',
            color: '#131D30',
            maXidth: '750.65px',
            width: '100%',
            height: 'auto',
            mr: 2,
            marginTop:'-10px',

            display: { xs: 'block', md: 'flex' },
          }}
        >
         on your referrals

          </Typography>
        <Typography
          sx={{ fontSize: '20px', width: '100%',maxWidth:'661.65px', height: 'auto', margin: '12px 0px 0px' , mr: 2,

          display: { xs: 'block', md: 'flex' }, }}
        >
          Partner through SMSVerification’s affiliate program to generate new revenue.





        </Typography>
        <Box   sx={{ width: '100%', height: 'auto', marginTop: '20px' }}>
           
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <ColorButton variant="contained" 
          style={{ 
              textTransform: 'none', // Set textTransform to 'none' to preserve the case
        }}>
           Become an affiliate now
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
           More details

            <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
          </Button>
          </Box>
    </Stack>
    <Stack sx={{ mt: { xs: 3, md: 0 } }}>
      <Box>
      <img src={working2} alt="Your Image Description" style={{ width: '400px', height: '400px' }} />
      </Box>
    </Stack>
    
  </Container>
  {/* ---------------------------------------------------------------- */}
  <Box> <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'32px', fontWeight:'bold', margin:'48px 0px 0px'}}
        >Refer more,  <span style={{ color: '#7846FF' }}>EARN</span> more.</Typography></Box>
        <Container
        sx={{
        direction: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center', // Center the buttons horizontally
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
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={6}>
          <Box display="flex" flexDirection="column"  justifyContent="flex-start" alignItems="center" >
            <Box>
              <Icon
                icon={trophyLogo}
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
           Bronze Tier - 7%


            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
        0-5 paid accounts




</Typography>
          </Box>

          <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" spacing={2}>
            <Box>
              <Icon
                icon={trophyLogo}
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
              Silver Tier - 9%


            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',

                
              }}
            >
            6-10 paid accounts






            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" spacing={2} >
            <Box>
              <Icon
                icon={trophyLogo}
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
           Gold Tier - 11%



            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
       11-25 paid accounts





       </Typography>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" spacing={2} >
            <Box>
              <Icon
                icon={trophyLogo}
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
          Platinum Tier - 13%




            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
       26-35 paid accounts







       </Typography>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" spacing={2} >
            <Box>
              <Icon
                icon={trophyLogo}
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
         Diamond Tier - 15%




            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
      36+ paid accounts







       </Typography>
          </Box>
         
        </Stack>
      </Box>
      </Container>
   {/* --------------------------------------- */}
   <Box> <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'32px', fontWeight:'bold', margin:'48px 0px 0px'}}
        >Create a new income stream in 3 easy steps</Typography></Box>
   
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
              Create an account, it's easy and free.
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
             Start referring

            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',

                
              }}
            >
              Receive a unique link you can share anywhere.


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
             Take earnings

            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
             Get rewards of up to 15% of your referrals transactions


            </Typography>
          </Box>
        </Stack>
      </Box>
      </Container>
      {/* ----------------------------------------------- */}
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
      <Box> <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'36px', fontWeight:'bold', margin:'48px 0px 0px', textAlign:'center'}}
        >Become an <span style={{color:'#7846FF'}}>SMSVerification affiliate</span> and start offering a wide range of services to your customers.</Typography></Box>
   </Container>
     {/* ------------------------------------------------- */}
     <Box
        sx={{
            width: '100%',
            height: 'auto',
            display: { xs: 'block', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin:'48px 0px 0px'
        }}
      >
                <Stack direction={{ xs: 'column', md: 'row' }} >


        {/* Row 1 */}
        <Stack direction="column" sx={{ display: { xs: 'block', md: 'flex' },
}}>
          <Card sx={{ width: '100%', height: 'auto', padding: '10px 10px',  boxShadow:'none',            display: { xs: 'block', md: 'flex' },
}}>
            <CardContent sx={{ width: '462px', height: 'autopx' }}>
              <Typography
                sx={{
                  fontSize: '28px',
                  width: '235px',
                  height: 'auto',
                  color: '#131D30',
                  fontWeight: 'bold',
                  margin: '0px 0px 16px',
                }}
                gutterBottom
              >
                Online and Rental Numbers
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  width: '350px',
                  height: 'auto',
                  color: '#364053',
                  margin: '0px 0px 16px',

                }}
              >
                Easy and secure way to verify accounts on various platforms across the globe.

              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  width: '350px',
                  height: 'auto',
                  color: '#364053',
                  margin: '0px 0px 16px',
                }}
              >
                Automated process that allows your referrals to rent a number for one time use or up to four weeks from different services with no limitation.

              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  width: '350px',
                  height: 'auto',
                  color: '#364053',
                  margin: '0px 0px 16px',
                }}
              >
               Unique and in increasing demand, for the past years, more and more platforms are requiring verification identity through SMS.

              </Typography>
            </CardContent>
          </Card>
         
          {/* ------------------------------------------ */}
          <Card sx={{ width: '100%', height: 'auto', padding: '10px 10px', boxShadow:'none',display: { xs: 'block', md: 'flex' },
}}>
            <CardContent sx={{ width: '462px', height: 'auto' }}>
              <Typography
                sx={{
                  fontSize: '28px',
                  width: '235px',
                  height: 'auto',
                  color: '#131D30',
                  fontWeight: 'bold',
                  margin: '0px 0px 10px',
                }}
                gutterBottom
              >
                SMS Blast

              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  width: '350px',
                  height: 'auto',
                  color: '#364053',
                  margin: '0px 0px 24px',
                }}
              >
                Allows users to send out large amounts of messages in a single click.

              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  width: '350px',
                  height: 'auto',
                  color: '#364053',
                  margin: '0px 0px 24px',
                }}
              >
                Ability to choose your sender name, create your own group contacts, message scheduling, number validation, and many more features!

              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  width: '350px',
                  height: 'auto',
                  color: '#364053',
                  margin: '0px 0px 24px',
                }}
              >
               It’s the ideal solution for businesses and individuals who need to send large amounts of messages quickly and easily.

              </Typography>
            </CardContent>
          </Card>
        </Stack>
        {/* ------------------------------------------------------------------- */}
        {/* Row 2 */}
        <Stack direction="column">
          <Card
          sx={{  width: '350px', height: 'auto', padding: '24px 40px 36px', bgcolor: '#7846FF',borderRadius:'20px'  }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: 28,
                  width: '382px',
                  height: '42px',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  margin: '0px 0px 10px',
                }}
                gutterBottom
              >
                Digital Marketplace

              </Typography>

              <Typography
                variant="body2"
                sx={{ fontSize: '16px', width: '100%', height: '196px', color: '#FFFFFF' }}
              >
                Offers a convenient and secure platform for buying and selling digital goods. Allows your referrals to activate, promote, and sell their digital goods in one place.


              </Typography>
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
          {/* --------------------------------------------- */}
          <Card
            sx={{ width: '350px', height: 'auto', padding: '24px 40px 36px ', bgcolor: '#1E80FE', borderRadius:'20px', marginTop:'40px' }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: 28,
                  width: '100%',
                  height: '42px',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  margin: '0px 0px 10px',
                }}
              >
                Social Media Marketing

              </Typography>

              <Typography
                sx={{ fontSize: '16px', width: '100%', height: '196px', color: '#FFFFFF' }}
              >
                Offers referrals the ability to purchase likes, followers, comments, and views on popular social media platforms such as Instagram, YouTube, and TikTok. Fast, effective, and easy to use.

</Typography>
            </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Box>
      {/* ----------------------------- */}
      {/* ----------------------------------- */}
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
            What is SMSVerification’s Affiliate Program?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px', textAlign:'left'}}>
          The SMSVerification Affiliate Program allows you to earn commission by referring customers to the service by using your unique affiliate link. This can be done through sharing your link on emails, blog posts, videos, forums, webinars and more. By joining the program, you can offer additional value to your audience and generate new revenue streams for your business.          </AccordionDetails>
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
          Does it cost anything to be an affiliate?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px', textAlign:'left'}}>
          Nope! Signing up and participating as a SMSVerification affiliate is completely free. Plus, there are no minimum sales required to earn commission.
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
           Do I need to be a regular customer?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px', textAlign:'left'}}>
          We would love it if you used SMSVerification yourself, but you are not required to be a SMSVerification customer in order to be a part of the SMSVerification Affiliate Program.
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
           How can I contact if I still have more questions?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px', textAlign:'left'}}>
          If you have any additional questions or need further assistance with the SMSVerification Affiliate Program, you can contact us through various means. You can reach out to us through our online live chat, Discord or by email. Our customer support team is available to assist you with any inquiries you may have. Alternatively, you can also check our Help-Desk page to see if your question has already been answered.
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
            How can I withdraw funds?
          </AccordionSummary>
          <AccordionDetails sx={{ fontSize: '18px', textAlign:'left'}}>
          To withdraw your balance from the SMSVerification Affiliate Program, you have two options: bank wire transfer or cryptocurrencies. The minimum amount you can withdraw is 5$. To initiate a withdrawal, simply follow the instructions provided in your account dashboard or contact our customer support team for any assistance.

       </AccordionDetails>
          </Accordion>
          </Box>
          </Container>
          {/* ----------------------------------------
          ----------------------------------------- */}
          <Container
        sx={{
        direction: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center', // Center the buttons horizontally
        width: '100%',
        height: 'auto',
        flexGrow: 1,
        display: { xs: 'block', md: 'flex' },
        px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

      }}>
      <Box> <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'18px', fontWeight:'bold', margin:'48px 0px 0px', textAlign:'center'}}
        >Have more questions? We'd love to help!
        </Typography>
        
        <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'18px',  textAlign:'center', marginTop:'10px'}}
        >Please contact us at <span style={{color:'#7846FF'}}>care@smsverification.xyz</span> 
        </Typography></Box>
   </Container>
   {/* ----------------------------------
   ----------------------------------- */}
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
      spacing={14}
    >
      <Box
        sx={{
          width: '100%',
          height: 'auto',
        }}
      >
        <Typography
          sx={{
            width: '100%',
            maxWidth:'600px',
            height: 'auto',
            color: '#FFFFFF',
            fontSize: '28px',
            fontWeight: 'bold',
          }}
        >
         Become an SMSVerification Advocate today
        </Typography>
        <Typography
          sx={{
            width: '428.38px',
            height: 'auto',
            fontSize: '16px',
            color: '#D1ECFC',
          }}
        >
         Tell your friends, get paid.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth:'150px',
          height: '36px',
          textAlign:'right',
          height:'auto'

        }}
      >
        <ColorButton
          variant="text"
          sx={{
            width: '100%',
            maxWidth:'150px',
            height: 'auto',
            borderRadius: '20px',
            bgcolor: '#FFFFFF',
            color: '#7846FF',
            fontSize: '14px',
            padding: '4px 24px',
            marginTop:'20px',
            textTransform:'none',
            '&:hover': {
              backgroundColor: '#9D8BFF',
            },
          }}
        >
          Join Now
          <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
        </ColorButton>
      </Box>
    </Box>
    <Footer/>
  </div>
  )
}

export default AffiliateProgram