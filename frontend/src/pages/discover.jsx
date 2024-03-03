import Box from '@mui/material/Box';
import '../styleSheets/home.css';
import logo from '../assets/logo.png';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { inputLabelClasses } from '@mui/material/InputLabel';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Navigation from '../components/Navigation';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: 'https://i.postimg.cc/Gtn9WTc6/pic10.avif',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/W1xVYLpH/pic1.avif',
    title: 'Burger',
  },
  {
    img: 'https://i.postimg.cc/tCSpPnKy/pic2.avif',
    title: 'Camera',
  },
  {
    img: 'https://i.postimg.cc/7hXDK5b3/pic3.avif',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/brqp0xYY/pic4.avif',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/bJxq2ChF/pic5.avif',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/jS2qk4HL/pic6.avif',
    title: 'Basketball',
  },
  {
    img: 'https://i.postimg.cc/mrFLTZ64/pic7.avif',
    title: 'Fern',
  },
  {
    img: 'https://i.postimg.cc/T2cRd4QK/pic8.avif',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.postimg.cc/KvvmRDsJ/pic9.avif',
    title: 'Tomato basil',
  },
  {
    img: 'https://i.postimg.cc/Gtn9WTc6/pic10.avif',
    title: 'Sea star',
  },
  {
    img: 'https://i.postimg.cc/tCSpPnKy/pic2.avif',
    title: 'Bike',
    cols: 2,
  },
];

const Discover = () => {
  const [daretext, setDaretext] = useState('');
  return (
    <>
      <Box sx={{ pt: 2, px: 2, textAlign: 'center' }}>
        <img src={logo} alt='' style={{ width: '45%', height: 'auto', display: 'block', margin: 'auto' }} />
        <Typography variant='h4' sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          GO ON A DAREVENTURE
        </Typography>
        <br />
        <TextField
          id='outlined-dare'
          size='large'
          label='Find other Daredevils!'
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
        />
        <br />
        <br />
        <Typography variant='h6' sx={{ color: 'white', textAlign: 'center' }}>
          MOST LIKED DARES THIS WEEKS
        </Typography>
        <ImageList sx={{ width: '100%', height: 230 }} variant='quilted' cols={4} rowHeight={121}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading='lazy' />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Navigation />
    </>
  );
};

export default Discover;
