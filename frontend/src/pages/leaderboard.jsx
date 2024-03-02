import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import mask from '../assets/mask.png';
import { useState } from 'react';
import UserRanking from '../components/UserRanking';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png';
import ava1 from '../assets/ava1.png';
import ava2 from '../assets/ava2.png';
import ava3 from '../assets/ava3.png';
import ava4 from '../assets/ava4.png';
import ava5 from '../assets/ava5.png';
import ava6 from '../assets/ava6.png';
import ava7 from '../assets/ava7.png';
import ava8 from '../assets/ava8.png';
import ava9 from '../assets/ava9.png';
import ava10 from '../assets/ava10.png';
import ava11 from '../assets/ava11.png';
import ava12 from '../assets/ava12.png';
import ava13 from '../assets/ava13.png';

const Leaderboard = () => {
  const [option, setOption] = useState('Friends');
  const fava = [ava1, ava2, ava3, ava4, ava5];
  const fname = ['louisnguyen', '_neuro__', 'toritots', 'jackson.w', 'kj4c'];
  const fscore = [104, 52, 22, 21, 18];
  const gname = ['_.kaniee', 'louisnguyen', 'nhatnguyen', 'lowkey', 'chaechae_19', 'jenaissante', 'swaggertron6782', 'shrekyyy3', 'dxvis_', 'wilson.wuu'];
  const gscore = [105, 104, 103, 102, 101, 101, 99, 95, 93, 93];
  const gava = [ava6, ava1, ava7, ava8, ava9, ava10, ava11, ava12, ava13, ava5];
  return (
    <>
      <Box sx={{ pt: 2, px: 2, textAlign: 'center' }}>
        <img src={logo} alt='' style={{ width: '45%', height: 'auto', display: 'block', margin: 'auto', marginBottom: '1rem' }} />
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
                return <UserRanking rank={index + 1} username={name} point={fscore[index]} key={index} img={fava[index]}/>;
              })
            : gname.map((name, index) => {
                return <UserRanking rank={index + 1} username={name} point={gscore[index]} key={index} img={gava[index]}/>;
              })}
        </Box>
      </Box>
    </>
  );
};

export default Leaderboard;
