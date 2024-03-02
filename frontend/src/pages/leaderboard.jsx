import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import mask from '../assets/mask.png';
import { useState } from 'react';
import UserRanking from '../components/UserRanking';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png';

const Leaderboard = () => {
  const [option, setOption] = useState('Friends');
  const fname = ['louisnguyen', '_neuro__', 'toritots', 'jackson.w', 'kj4c'];
  const fscore = [104, 52, 22, 21, 18];
  const gname = ['_.kaniee', 'louisnguyen', 'nhatnguyen', 'lowkey', 'chaechae_19', 'jenaissante', 'swaggertron6782', 'shrekyyy3', 'dxvis_', 'wilson.wuu'];
  const gscore = [105, 104, 103, 102, 101, 101, 99, 95, 93, 93];

  return (
    <>
      <Box sx={{ pt: 2, px: 2, textAlign: 'center' }}>
        <img src={logo} alt='' style={{ width: '50%', height: 'auto', display: 'block', margin: 'auto', marginBottom: '1rem' }} />
        <Box sx={{ p: 2 }}>
          <Typography variant='h4' sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
            TOP DAREDEVILS <img src={mask} alt='' style={{ width: '40px', height: '40px', position: 'relative', top: 7 }} />
          </Typography>
        </Box>
        <br />
        <br />
        <Box sx={{ border: 2, borderColor: 'rgb(121, 19, 168)', borderRadius: '5px', p: 2, overflowY: 'auto', height: 370, pt: 0}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', position: 'sticky', top: 0, backgroundColor: '#111111', pt:2, zIndex: 2 }}>
            {option === 'Friends' ? (
              <Button key={Math.random()} variant='text' size='large'>
                <Typography variant='h5' sx={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '10px' }}>
                  Friends
                </Typography>
              </Button>
            ) : (
              <Button key={Math.random()} variant='text' size='large' onClick={() => setOption('Friends')}>
                <Typography variant='h5' sx={{ color: 'white' }}>
                  Friends
                </Typography>
              </Button>
            )}
            {option === 'Global' ? (
              <Button key={Math.random()} variant='text' size='large'>
                <Typography variant='h5' sx={{ color: 'white', textDecoration: 'underline', textUnderlineOffset: '10px' }}>
                  Global
                </Typography>
              </Button>
            ) : (
              <Button key={Math.random()} variant='text' size='large' onClick={() => setOption('Global')}>
                <Typography variant='h5' sx={{ color: 'white' }}>
                  Global
                </Typography>
              </Button>
            )}
          </Box>
          {option === 'Friends'
            ? fname.map((name, index) => {
                return <UserRanking rank={index + 1} username={name} point={fscore[index]} key={index} />;
              })
            : gname.map((name, index) => {
                return <UserRanking rank={index + 1} username={name} point={gscore[index]} key={index} />;
              })}
        </Box>
      </Box>
    </>
  );
};

export default Leaderboard;
