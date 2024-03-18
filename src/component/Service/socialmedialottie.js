import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Lottie from 'react-lottie';

import { Box, Stack, Typography } from '@mui/material';

import AnimationSMJson from '../../Lottiefiles/AnimationSM.json';

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: AnimationSMJson,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const SocialMedia = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CssBaseline />
      <Container
        sx={{
          direction: 'column',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: 'auto',
          flexGrow: 1,
          display: { xs: 'block', md: 'flex' },
          px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignContent="center"
          alignItems="center"
          padding={{ xs: '24px 0px 12px 0px', md: '36px 0px 36px 42px' }}
        >
          <Stack spacing={2} textAlign={{ xs: 'center', md: 'left' }}>
            <Box>
              <Typography
                sx={{
                  height: '96px',
                  width: '249.19px',
                  fontSize: '86px',
                  fontWeight: 'bold',
                  color: '#7846FF',
                }}
              >
                400+
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ height: '96px', width: '249.19px', fontSize: '20px' }}>
                services already available
              </Typography>
            </Box>
          </Stack>
          <Stack sx={{ mt: { xs: 3, md: 0 } }}>
            <Lottie options={lottieOptions} height={200} width={600} />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default SocialMedia;
