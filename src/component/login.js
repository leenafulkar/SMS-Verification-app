import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Stack, Container, Typography, Box, TextField, Button } from '@mui/material';
import Footer from './Service/footer';

const Login = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Container
        sx={{
          width: '100%',
          height: 'auto',
          padding: '0px 20px',
          display: 'flex',
          maxWidth: '1286px',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Stack
          sx={{
            width: '100%',
            maxWidth: '640px',
            height: 'auto',
            padding: '36px 52px 36px 36px',
            display: 'flex',
          }}
        >
          <Typography
            sx={{
              width: '100%',
              height: 'auto',
              fontSize: '20px',
              color: '#131D30',
              margin: '0px 0px 2px',
            }}
          >
            Sign In
          </Typography>
          <Typography
            sx={{
              width: '100%',
              maxWidth: '552px',
              height: 'auto',
              fontSize: '16px',
              color: '#364053',
              margin: '0px 0px 2px',
            }}
          >
            Log in and start taking advantage of our products including online numbers, rental numbers, social media marketing, and digital marketplace.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '552px',
                margin: '24px 0px 0px ',
                height: 'auto',
              }}
            >
              <label htmlFor="outlined-basic-username">
                <Typography sx={{ margin: '0px 0px 8px' }}>Username</Typography>
              </label>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Username is required',
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Username must not exceed 20 characters',
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_-]+$/,
                    message: 'Invalid username format',
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <TextField {...field} id="outlined-basic-username" label="Username" variant="outlined" fullWidth />
                    {fieldState.error && (
                      <Typography sx={{ color: 'red' }}>{fieldState?.error.message}</Typography>
                    )}
                  </>
                )}
              />
              <label htmlFor="outlined-basic-password">
                <Typography sx={{ margin: '0px 0px 8px' }}>Password</Typography>
              </label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Password must not exceed 30 characters',
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{6,}$/,
                    message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
                  },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <TextField {...field} type="password" id="outlined-basic-password" label="Password" variant="outlined" fullWidth />
                    {fieldState.error && (
                      <Typography sx={{ color: 'red' }}>{fieldState?.error.message}</Typography>
                    )}
                  </>
                )}
              />
              <br /><br />
              <Button type="submit" variant="contained" fullWidth sx={{ margin: '0px 0px 8px' }}>
                Login
              </Button>
              <Button variant="contained" fullWidth sx={{ bgcolor: '#000000' }}>
                Sign in with Google
              </Button>
            </Box>
          </form>
          <Box
            sx={{
              width: '100%',
              maxWidth: '552px',
              height: 'auto',
              direction: 'row',
              display: 'flex',
              margin: '24px 0px 0px ',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#98A1AE',
              fontSize: '16px',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                maxWidth: '179px',
                height: 'auto',
                textAlign: 'left',
                marginTop: '-15px',
              }}
            >
              Don't have an account?<br />
              <Button>Sign Up</Button>
            </Typography>
            <Typography
              sx={{
                width: '100%',
                maxWidth: '168.38px',
                height: 'auto',
                textAlign: 'right',
              }}
            >
              Forgot a password? <Button
                sx={{
                  width: '100%',
                  maxWidth: '168.38px',
                  height: 'auto',
                  textAlign: 'right',
                  fontSize: '13px',
                }}
              >Restore your account</Button>
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            width: '100%',
            maxWidth: '440px',
            padding: '48px 36px',
            display: 'flex'
          }}
        >
          <Box
            sx={{
              bgcolor: '#131d30',
              padding: '36px 52px 36px 36px',
              borderRadius: '20px',
              maxWidth: '336px',
              height: 'auto',
              direction: { xs: 'column', md: 'row' }
            }}
          >
            <Typography sx={{ color: '#FFFFFF', fontSize: '32px', textAlign: 'center', margin: '0px 0px 72px' }}>
              Join the thousands of satisfied customers
            </Typography>
            <Typography sx={{ color: '#FFFFFF', fontSize: '16px', maxWidth: '336px' }}>
              150 different services covering almost every platform in 196 countries across the globe.
            </Typography><br />
            <Typography sx={{ color: '#FFFFFF', fontSize: '16px', maxWidth: '336px' }}>
              Best prices in the market, special discounts and benefits to VIP members.
            </Typography><br />
            <Typography sx={{ color: '#FFFFFF', fontSize: '16px', maxWidth: '336px' }}>
              The only platform that offers a wide range of products from Online and Rental numbers to Social Media Marketing and a Digital Marketplace.
            </Typography>
          </Box>
        </Stack>
      </Container>
      <Container> <Footer /></Container>
     
    </div>
  );
};

export default Login;
