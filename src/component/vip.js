import React from 'react'
import { Icon } from '@iconify/react';
import arrowRight from '@iconify-icons/fa-solid/arrow-right';
import Button from '@mui/material/Button';
import { Box, Stack, Container, Typography } from '@mui/material'; // Replace with the actual icon you want to use
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import userAddPlus from '@iconify-icons/fa-solid/user-plus';
import investingIcon from '@iconify-icons/fa-solid/chart-line';
import chatBubbleTypingOval from '@iconify-icons/fa-solid/comment-dots';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import working from '../assets/working.png'
import Checkbox from '@mui/material/Checkbox';
import Footer from './Service/footer';

const ColorButton = styled(Button)(({ theme }) => ({
    color: '#FFFFFF', // Set color to white
    backgroundColor: '#1A80FE', // Set background color to #FFA800
    width: '180.41px', // Set width
    height: '48px', // Set height
    padding: '6px 24px', // Set padding
    fontSize: '20px',
    // Increase font size
    borderRadius:'20px',
    '&:hover': {
      backgroundColor: '#3A94FF', // Set hover background color
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

  const rows = [
    createData('Discounted Prices', '3%','5%', '10%'),
    createData('Deals', <Checkbox defaultChecked />, <Checkbox defaultChecked />, <Checkbox defaultChecked /> ),
    createData('Cashback', '-', '3%', '5%'),
    createData('Daily Chests', '-','-',<Checkbox defaultChecked />),
    createData('SMS Blast Contacts','500', '700', '900'),
  ];


const VIP = () => {

    


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
                color: '#131D30',
                width: '100%',
                height: 'auto',
                mr: 2,

                display: { xs: 'block', md: 'flex' },

              }}
              
            >
            Our VIP Members
            </Typography>
            <Typography
              sx={{
                fontSize: '50px',
                fontHeight: '72px',
                fontWeight: 'bold',
                color: '#1A80FE',
                maXidth: '750.65px',
                width: '100%',
                height: 'auto',
                mr: 2,
                marginTop:'-10px',

                display: { xs: 'block', md: 'flex' },
              }}
            >
             earn more
              </Typography>
            <Typography
              sx={{ fontSize: '20px', width: '100%',maxWidth:'661.65px', height: 'auto', margin: '12px 0px 0px' , mr: 2,

              display: { xs: 'block', md: 'flex' }, }}
            >
              Become a VIP member and earn special discounts, rewards, and benefits on all our services.



            </Typography>
            <Box   sx={{ width: '100%', height: 'auto', marginTop: '20px' }}>
               
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <ColorButton variant="contained" 
              style={{ 
                  textTransform: 'none', // Set textTransform to 'none' to preserve the case
            }}>
               Join Now
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
                See Benefits 

                <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
              </Button>
              </Box>
        </Stack>
        <Stack sx={{ mt: { xs: 3, md: 0 } }}>
          <Box>
          <img src={working} alt="Your Image Description" style={{ width: '400px', height: '400px' }} />
          </Box>
        </Stack>
        
      </Container>
      {/* ------------------------------------------------------------- */}
      <Box> <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'32px', fontWeight:'bold', margin:'48px 0px 0px'}}
        ><span style={{ color: '#1A80FE' }}>Benefits</span> of our VIP Club</Typography></Box>
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
          width:'100%'
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" spacing={14} >
          <Box direction="column" justifyContent="flex-start" alignItems="center" >
            <Box >
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
           Special Discounts
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
          Enjoy up to 10% discount on all our products and services as a VIP member.

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
              Cashback

            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',

                
              }}
            >
              Earn up to 5% cashback to your balance on every deposit you make.


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
             Premium Support

            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
         Exclusive 24/7 support team and Priority Customer Service for our VIP Members.

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
             Special Offers

            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
        Get access to our special offers that include discounts on many services and platforms.

       </Typography>
          </Box>
        </Stack>
      </Box>
      </Container>
      {/* ----------------------------- */}
      <Box> <Typography
        direction={{ xs: 'column', md: 'column' }}
        sx={{fontSize:'32px', fontWeight:'bold', margin:'48px 0px 0px'}}
        >Unlock <span style={{ color: '#1A80FE' }}>exclusive</span> perks with our VIP tiers!</Typography></Box>
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
          maxWidth:'1250px'
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
           VIP Bronze - 20$

            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
         20$ monthly deposit


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
              VIP Silver - 50$

            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',

                
              }}
            >
             50$ monthly deposit




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
            VIP Gold - 100$


            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#364053',
                margin: ' 0px 0px 2px',
              }}
            >
         100$ monthly deposit



       </Typography>
          </Box>
         
        </Stack>
      </Box>
      </Container>
      {/* -------------------------------------------------------------- */}
      <Container
        sx={{
            direction: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between', // Center the buttons horizontally
            width: '100%',
            height: 'auto',
            flexGrow: 1,
            margin:'48px 0px 0px',
            display: { xs: 'block', md: 'flex'},
                     px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

        }}
      >
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
       
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontSize: '18px' }}>
                {row.name}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: '16px' }}>{row.calories}</TableCell>
              <TableCell align="center" sx={{ fontSize: '16px' }}>{row.fat}</TableCell>
              <TableCell align="center" sx={{ fontSize: '16px' }}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>
      <Box   sx={{ width: '100%', height: 'auto', textAlign:'center', margin:'48px 0px 0px'}}>
               
               <Link to="/register" style={{ textDecoration: 'none' }}>
                 <ColorButton variant="contained" 
                 style={{ 
                     textTransform: 'none', // Set textTransform to 'none' to preserve the case
               }}>
                  Join Now
                   <Icon icon={arrowRight} style={{ marginLeft: '8px' }} />
                 </ColorButton>
               </Link></Box>
            <Footer />
</div>
  )
}

export default VIP