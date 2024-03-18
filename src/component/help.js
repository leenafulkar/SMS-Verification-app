import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import arrowRight from '@iconify-icons/fa-solid/arrow-right';
import { Star as StarIcon } from '@mui/icons-material';

import { Box, Typography,InputAdornment, TextField , IconButton, Container, Stack, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Lottie from 'react-lottie';
import SecureJson from '../Lottiefiles/Secure.json'
import callJson from '../Lottiefiles/call.json'
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';


const HelpDesk = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: SecureJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const lottieOptions2 = {
    loop: true,
    autoplay: true,
    animationData: callJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
      <><Box
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '100%',
        height: 'auto',
        background: '#131d30',
        color: '#000000',
        margin: '48px 0px 0px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >


      <Typography
        sx={{
          width: '100%',
          height: 'auto',
          maxWidth: '320px',
          color: '#FFFFFF',
          fontSize: '28px',
          margin: '0px 0px 12px',
          fontWeight: 'bold',
          margin: '48px 0px 0px',
          textAlign: 'center',
          display: 'flex'
        }}
      >
        How can we help you?
      </Typography>

      <TextField
        sx={{
          width: '100%',
          bgcolor: '#FFFFFF',
          fontSize: '18px',
          margin: '35px auto',
          maxWidth: '450px',
          borderRadius: '10px'
        }}
        variant="outlined"
        placeholder="Search our help center..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon sx={{ color: '#757575' }} />
              </IconButton>
            </InputAdornment>
          ),
        }} />
    </Box>
      {/* //  ---------------------------------------------
    
      
      //  --------------------------------------------- */}
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
        
        sx={{fontSize:'32px', fontWeight:'bold', margin:'48px 0px 0px', textAlign:'center',
      color:'#1C293B'}}
        >  <StarIcon sx={{ marginRight: '8px' }} /> Featured Articles</Typography></Box>
   </Container>

{/* ------------------------------------------------------- */}

    <Container direction={{ xs: 'column', md: 'column' }} spacing={2} sx={{justifyContent:'space-evenly', alignContent:'space-evenly', alignItems:'flex-start', textAlign:'left', display:'flex',}}>
      
    <Stack direction={{ xs: 'column', md: 'column' }} spacing={2} sx={{justifyContent:'space-evenly', alignContent:'space-evenly', alignItems:'flex-start', textAlign:'left', display:'flex',margin:'48px 0px 0px'}}>
          <Link to="" style={{ textDecoration: 'none' }}>

          <Box sx={{width:'100%', maxWidth:'600px', bgcolor:'#FFFFFF', padding:'10px 22px 12px 24px',
        color:'#1C293B', fontSize:'15px', fontWeight:'bold', height:'40px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', // Align items along the main axis with space between
        textAlign: 'left', marginRight:'50px'
        }}>
          How can I add funds using Gift Card
          <Icon icon={arrowRight}  />
          </Box>
          </Link>
          <Link to="" style={{ textDecoration: 'none' }}>

         <Box sx={{width:'100%', maxWidth:'500px', bgcolor:'#FFFFFF', padding:'10px 22px 12px 24px',
      color:'#1C293B', fontSize:'15px', fontWeight:'bold', height:'40px', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between', // Align items along the main axis with space between
        textAlign: 'left', marginRight:'58px'

       }}>
     What are Online & Rental numbers
      <Icon icon={arrowRight}  />
         </Box>
        </Link>
          <Link to="" style={{ textDecoration: 'none' }}>

          <Box sx={{width:'100%', maxWidth:'500px', bgcolor:'#FFFFFF', padding:'10px 22px 12px 24px',
        color:'#1C293B', fontSize:'15px', fontWeight:'bold', height:'40px', display:'flex',
        alignItems: 'center', justifyContent: 'space-between', // Align items along the main axis with space between
        textAlign: 'left', marginRight:'20px'
        }}>
          I'm not receiving SMS, What should I do
          <Icon icon={arrowRight} />
          </Box>
          </Link>
          <Link to="" style={{ textDecoration: 'none' }}>

         <Box sx={{width:'100%', maxWidth:'500px', bgcolor:'#FFFFFF', padding:'10px 22px 12px 24px',
      color:'#1C293B', fontSize:'15px', fontWeight:'bold', height:'40px', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between', // Align items along the main axis with space between
        textAlign: 'left', marginRight:'98px'

       }}>
     Is there any Client Protection
      <Icon icon={arrowRight} />
         </Box>
        </Link>
          <Link to="" style={{ textDecoration: 'none' }}>

          <Box sx={{width:'100%', maxWidth:'500px', bgcolor:'#FFFFFF', padding:'10px 22px 12px 24px',
        color:'#1C293B', fontSize:'15px', fontWeight:'bold', height:'40px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', // Align items along the main axis with space between
        textAlign: 'left', marginRight:'30px'
        }}>
         How can I add funds using Credit Card
          <Icon icon={arrowRight} />
          </Box>
          </Link>
          <Link to="" style={{ textDecoration: 'none' }}>

         <Box sx={{width:'100%', maxWidth:'500px', bgcolor:'#FFFFFF', padding:'10px 22px 12px 24px',
      color:'#1C293B', fontSize:'15px', fontWeight:'bold', height:'40px', display: 'flex',
      alignItems: 'center', justifyContent: 'space-between', // Align items along the main axis with space between
        textAlign: 'left',

       }}>
      How can I add funds using Cryptocurrency
      <Icon icon={arrowRight} />
         </Box>
        </Link>
          </Stack>
         
          </Container>
          {/* ---------------------------------------------- */}
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
        
        sx={{fontSize:'32px', fontWeight:'bold', margin:'48px 0px 0px', textAlign:'center',
      color:'#1C293B'}}
        > Browse All Categories</Typography></Box>
   </Container>
   {/* ------------------------------------------- */}
   <Container
        sx={{
          
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center', // Center the buttons horizontally
        width: '100%',
        height: 'auto',
        flexGrow: 1,
        display: { xs: 'block', md: 'flex' },
        px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Adjust padding based on breakpoints

      }}>
      <Box >
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{alignContent:'center', alignItems:'center',justifyContent:'space-between', display: { xs: 'flex', md: 'flex' },spacing:'30px', height:'auto',margin:'48px 0px 0px',width:'100%' }} >
          <Box sx={{margin:'0px 38px 0px 0px', flex: '0 0 auto'}}>
        <Lottie options={lottieOptions} width={100} height={100} />
      </Box>
      <Stack direction="column" spacing={2} sx={{textAlign:'left', alignContent:'flex-start', alignItems:'flex-start', flex: '1 1 auto'}}>

      <Button variant="outlined" sx={{height:'32px', fontSize:'15px', textTransform:'none',fontWeight:'bold', color:'#FFFFFF', bgcolor:'#4469A2','&:hover': {
      backgroundColor: '#6C8CC9', // Set hover background color
    },}}>Payments</Button>
      <Button variant="text" sx={{height:'32px',margin:'0px 42px 0px 0px', fontSize:'14px', color:'#1C293B', textTransform:'none'}}>Easy and Secure</Button>
      </Stack>
      </Stack>
      
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{alignContent:'center', alignItems:'center',justifyContent:'space-between', display: { xs: 'flex', md: 'flex' },spacing:'30px', height:'auto',margin:'48px 0px 0px'}} >
          <Box sx={{margin:'0px 38px 0px 0px', flex: '0 0 auto'}}>
        <Lottie options={lottieOptions2} width={100} height={100} />
      </Box>
      <Stack direction="column" spacing={2} sx={{textAlign:'left', alignContent:'flex-start', alignItems:'flex-start', flex: '1 1 auto'}}>

      <Button variant="outlined" sx={{height:'32px',margin:'0px 42px 0px 0px', fontSize:'15px', textTransform:'none',fontWeight:'bold', color:'#FFFFFF', bgcolor:'#4469A2','&:hover': {
      backgroundColor: '#6C8CC9', // Set hover background color
    },}}>Global eSIM</Button>
      <Button variant="text" sx={{height:'32px',margin:'0px 42px 0px 0px', fontSize:'14px', color:'#1C293B', textTransform:'none'}}>eSIMs for global solutions</Button>
       </Stack>
      </Stack>


      <Stack direction={{ xs: 'column', md: 'row' }} sx={{alignContent:'center', alignItems:'center',justifyContent:'space-between', display: { xs: 'flex', md: 'flex' },spacing:'30px', height:'auto',margin:'48px 0px 0px'}} >
          <Box sx={{margin:'0px 38px 0px 0px', flex: '0 0 auto'}}>
        <Lottie options={lottieOptions} width={100} height={100} />
      </Box>
      <Stack direction="column" spacing={2} sx={{textAlign:'left', alignContent:'flex-start', alignItems:'flex-start', flex: '1 1 auto'}}>

      <Button variant="outlined" sx={{height:'32px',margin:'0px 42px 0px 0px', fontSize:'15px', textTransform:'none',fontWeight:'bold', color:'#FFFFFF', bgcolor:'#4469A2','&:hover': {
      backgroundColor: '#6C8CC9', // Set hover background color
    },}}>Account Basics</Button>
      <Button variant="text" sx={{height:'32px',margin:'0px 42px 0px 0px', fontSize:'14px', color:'#1C293B', textTransform:'none'}}>It's basic</Button>
      </Stack>
      </Stack>


      
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{alignContent:'center', alignItems:'center',justifyContent:'space-between', display: { xs: 'flex', md: 'flex' },spacing:'30px', height:'auto',margin:'48px 0px 0px'}} >
          <Box sx={{margin:'0px 38px 0px 0px', flex: '0 0 auto'}}>
        <Lottie options={lottieOptions} width={100} height={100} />
      </Box>
      <Stack direction="column" spacing={2} sx={{textAlign:'left', alignContent:'flex-start', alignItems:'flex-start', flex: '1 1 auto'}}>

      <Button variant="outlined" sx={{height:'32px',margin:'0px 42px 0px 0px', fontSize:'15px', textTransform:'none',fontWeight:'bold', color:'#FFFFFF', bgcolor:'#4469A2','&:hover': {
      backgroundColor: '#6C8CC9', // Set hover background color
    },}}>Online Numbers</Button>
      <Button variant="text" sx={{height:'32px',margin:'0px 42px 0px 0px', fontSize:'14px', color:'#1C293B', textTransform:'none'}}>We covering it all !</Button>
      </Stack>
      </Stack>



      
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{alignContent:'center', alignItems:'center',justifyContent:'space-between', display: { xs: 'flex', md: 'flex' },spacing:'30px', height:'auto',margin:'48px 0px 0px'}} >
          <Box sx={{margin:'0px 38px 0px 0px', flex: '0 0 auto'}}>
        <Lottie options={lottieOptions} width={100} height={100} />
      </Box>
      <Stack direction="column" spacing={2} sx={{textAlign:'left', alignContent:'flex-start', alignItems:'flex-start', flex: '1 1 auto' }}>
    <Button variant="outlined" sx={{ height: '32px', fontSize: '15px', textTransform: 'none', fontWeight: 'bold', color: '#FFFFFF', bgcolor: '#4469A2', '&:hover': { backgroundColor: '#6C8CC9' } }}>VIP & Affiliate Program</Button>
    <Button variant="text" sx={{ height: '32px', fontSize: '14px', color: '#1C293B', textTransform: 'none' }}>Excellent is a habit</Button>
  </Stack>
      </Stack>
      </Box>
     
     
   </Container>
   {/* -------------------------------------------------- */}
   <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Stack direction={{ xs: 'column', md: 'row' }} sx={{ alignContent: 'center', alignItems: 'center', justifyContent: 'space-evenly', display: { xs: 'flex', md: 'flex' }, spacing: '30px', height: 'auto', margin: '48px 0px 0px', width: '100%' }}>
    <Box sx={{ margin: '0px 38px 0px 0px', flex: '0 0 auto', textAlign: 'left', alignContent: 'flex-start', alignItems: 'flex-start', }}>
      <Typography sx={{fontSize:'20px', fontWeight:'bold', color:"#1C293B", }}>Not finding what you are looking for?</Typography>
      <Typography sx={{fontSize:'15px', color:"#37516C", margin:'14px 0px 0px'}}>Chat with us or send us an email.</Typography>
    </Box>
    
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ textAlign: 'center', alignContent: 'flex-start', alignItems: 'flex-start', flex: '1 1 auto', marginLeft: '120px' }}>
      <Button variant="outlined" sx={{ height: '32px', fontSize: '15px', textTransform: 'none', fontWeight: 'bold', color: '#FFFFFF', bgcolor: '#4469A2', '&:hover': { backgroundColor: '#6C8CC9' } , padding:'0px 25px 0px 20px', margin:'0px 5px '}}>
     <ChatIcon />Chat with us</Button>
      <Button variant="outlined" sx={{ height: '32px', fontSize: '15px', textTransform: 'none', fontWeight: 'bold', color: '#FFFFFF', bgcolor: '#4469A2', '&:hover': { backgroundColor: '#6C8CC9' }  , padding:'0px 25px 0px 20px', margin:'0px 5px '}}>
     <EmailIcon />Send us an email</Button>
    </Stack>
  </Stack>
</Container>

    
          </>
        
        
      
     
  )
}

export default HelpDesk