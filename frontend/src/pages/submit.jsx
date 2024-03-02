import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import logo from '../assets/logo.png';
import { inputLabelClasses } from '@mui/material/InputLabel';

function Submit() {
  const navigate = useNavigate();

  const [daretext, setDaretext] = useState('');
  const [time, setTime] = useState(dayjs());

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/home');
  }

  return (
    <>
      <Box sx={{ pt: 2, px: 5, textAlign: 'center' }}>
        <img src={logo} style={{ width: '45%', height: 'auto', display: 'block', margin: 'auto', marginBottom: '1rem' }} />
        <Box sx={{ textAlign: 'center', p: 1 }}>
          <Typography variant='h4' color={'white'} sx={{ fontWeight: 'bold' }}>
            SUBMIT A DARE
          </Typography>
        </Box>

        <Box sx={{ mx: 0, textAlign: 'center', my: '2rem' }}>
          <TextField
            id='outlined-dare'
            size='large'
            label='Enter your dare!'
            variant='outlined'
            value={daretext}
            onChange={(e) => setDaretext(e.target.value)}
            InputLabelProps={{
              sx: {
                // set the color of the label when not shrinked
                color: 'white',
                [`&.${inputLabelClasses.shrink}`]: {
                  // set the color of the label when shrinked (usually when the TextField is focused)
                  color: 'white',
                },
              },
            }}
            sx={{
              '& .MuiInputBase-root': {
                backgroundColor: '#272334',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgb(121, 19, 168)', // Default border color
                },
                '&:hover fieldset': {
                  borderColor: 'rgb(121, 19, 168)', // Border color on hover (You can adjust this color)
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', // Border color when focused
                },
                '& .MuiInputLabel-root': {
                  // Targeting the label
                  color: 'white', // Label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  // Specifically targeting the focused state label
                  color: 'white', // Label color when the TextField is focused
                },
                width: '19rem',
              },
            }}
          />
        </Box>
        <Box sx={{ mx: 0, textAlign: 'center', my: '2rem' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label='Choose Time For Your Dare'
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: '#272334',
                  color: 'white', // Set input text color to white
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgb(121, 19, 168)', // Default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgb(121, 19, 168)', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgb(121, 19, 168)', // Border color when focused
                  },
                  width: '19rem',
                },
                '& .MuiInputLabel-root': {
                  // Target the label
                  color: 'white', // Set label color to white
                },
                '& .Mui-focused': {
                  color: 'white', // Ensure the label color remains white when focused
                },
              }}
              value={time}
              onAccept={(newValue) => setTime(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>

        <Box sx={{ mt: '3rem', mx: 0 }}>
          {/* <IconButton aria-label='delete' size='large' sx={{ color: 'white', p: 3 }} >
          <HighlightOffIcon sx={{ fontSize: '8rem', color: 'red' }} />
        </IconButton>
        <IconButton aria-label='check' size='large' sx={{ color: 'white', p: 3 }} onClick={handleSubmit}>
          <CheckCircleOutlineIcon sx={{ fontSize: '8rem', color: 'green' }} />
        </IconButton> */}
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            onClick={handleSubmit}
            sx={{
              backgroundColor: 'rgb(121, 19, 168)', // Button color
              color: 'white', // Text color
              '&:hover': {
                backgroundColor: 'rgb(100, 19, 168)', // Button hover color
              },
              px: '9rem',
              py: 2,
              borderRadius: '10px',
            }}>
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Submit;
