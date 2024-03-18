import * as React from 'react';
import { Icon } from '@iconify/react';
import arrowRight from '@iconify-icons/fa-solid/arrow-right';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box, Card, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#7846FF', // Set color to white
  backgroundColor: '#FFFFFF', // Set background color to #FFA800
  width: '160.2px', // Set width
  height: '35px', // Set height
  padding: '6px 24px', // Set padding
  fontSize: '16px', // Increase font size
  borderRadius: '25px',
  '&:hover': {
    backgroundColor: '#BDA5FF', // Set hover background color
  },
}));

export default function CarD() {
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


        {/* Row 1 */}
        <Stack direction="column" sx={{ marginBottom: '20px' }}>
          <Card sx={{ width: '100%', height: 'auto', padding: '10px 10px', marginTop:'40px', boxShadow:'none'}}>
            <CardContent sx={{ width: '462px', height: '464px' }}>
              <Typography
                sx={{
                  fontSize: '28px',
                  width: '235px',
                  height: '84px',
                  color: '#131D30',
                  fontWeight: 'bold',
                  margin: '0px 0px 10px',
                }}
                gutterBottom
              >
                Online and Rental Numbers
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  width: '350px',
                  height: '84px',
                  color: '#364053',
                  margin: '0px 0px 24px',
                }}
              >
                Online numbers can be used to verify accounts on various platforms by receiving SMS
                messages
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  width: '350px',
                  height: '84px',
                  color: '#364053',
                  margin: '0px 0px 24px',
                }}
              >
                Our rental service allows users to rent a virtual number for up to 4 weeks and
                receive unlimited SMS from multiple platforms.
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  width: '350px',
                  height: '84px',
                  color: '#364053',
                  margin: '0px 0px 24px',
                }}
              >
                Automated and simple process, allowing users to get their online number and receive
                SMS through our platform within minutes.
              </Typography>
            </CardContent>
          </Card>
         
          {/* ------------------------------------------ */}
          <Card
            sx={{ width: '462px', height: '334px', padding: '24px 40px 36px', bgcolor: '#1E80FE', marginTop:'40px',borderRadius:'20px' }}
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
              >
                Digital Marketplace
              </Typography>

              <Typography
                sx={{ fontSize: '16px', width: '360px', height: '196px', color: '#FFFFFF' }}
              >
                Offers a convenient and secure platform for buying and selling digital goods.
                Whether you&apos;re looking for a basic verified account or a high-tier one, we make
                it easy, quick, and reliable to find the perfect account for your needs.
              </Typography>
            </CardContent>
            <CardActions>
              <ColorButton
                variant="contained"
                sx={{
                  color: '#258FFE',
                  margin: '-80px 0px 0px',
                  padding: '6px 24px ',
                  fontSize: '16px',
                  textTransform:'none',
                  '&:hover': {
                    backgroundColor: '#AED7FF',
                  },
                  
                }}
              >
                Try now
                <Icon icon={arrowRight} style={{ marginLeft: '14px' }} />
              </ColorButton>
            </CardActions>
          </Card>
        </Stack>
        {/* ------------------------------------------------------------------- */}
        {/* Row 2 */}
        <Stack direction="column">
          <Card
          sx={{ width: '100%', height: 'auto', padding: '24px 40px 36px', bgcolor: '#7846FF', marginTop:'40px',borderRadius:'20px'  }}
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
                Social Media Marketing
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontSize: '16px', width: '360px', height: '196px', color: '#FFFFFF' }}
              >
                Offers users to buy likes, followers, comments, and views on popular social media
                platforms such as Instagram, YouTube, TikTok, and many more. Fast, effective, and
                easy to use, making it a great choice for anyone looking to boost and improve their
                social media presence and gain a competitive edge.
              </Typography>
            </CardContent>
            <CardActions>
              <ColorButton variant="contained" sx={{textTransform:'none'}}>
                Read more
                <Icon icon={arrowRight} style={{ marginLeft: '14px' }} />
              </ColorButton>
            </CardActions>
          </Card>
          {/* --------------------------------------------- */}
          <Card sx={{ width: '100%', height: 'auto', padding: '24px 40px ', marginTop:'40px' , boxShadow:'none'}}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: '28px',
                  height: '42px',
                  width: '382px',
                  fontWeight: 'bold',
                  color: '#131D30',
                  margin: ' 0px 0px 24px',
                }}
              >
                SMS Blast
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  height: '56px',
                  width: '350px',
                  color: '#360453',
                  margin: ' 0px 0px 24px',
                }}
              >
                Allows users to send out large amounts of messages in a single click.
              </Typography>

              <Typography
                sx={{ fontSize: '16px', height: '112px', width: '350px', color: '#360453' }}
              >
                Ability to choose your sender name, create your own group contacts, message
                scheduling, number validation, and many more features!{' '}
              </Typography>

              <Typography
                sx={{ fontSize: '16px', height: '84px', width: '350px', color: '#360453' }}
              >
                It’s the ideal solution for businesses and individuals who need to send large
                amounts of messages quickly and easily.{' '}
              </Typography>
            </CardContent>
          </Card>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
