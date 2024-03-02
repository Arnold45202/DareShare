import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import mask from '../assets/mask.png';
import UserRanking from '../components/UserRanking';
const Leaderboard = () => {
  return (
    <>
      <Box sx={{ pt: 2, px: 2, textAlign: 'center' }}>
        <Box sx={{ border: 2, borderColor: 'rgb(121, 19, 168)', borderRadius: '5px', p: 2 }}>
          <Typography variant='h4' sx={{ color: 'white', textAlign: 'center' }}>
            TOP DAREDEVILS <img src={mask} alt='' style={{ width: '40px', height: '40px', position: 'relative', top: 7 }} />
          </Typography>
        </Box>
        <br />
        <br />
        <Box sx={{ border: 2, borderColor: 'rgb(121, 19, 168)', borderRadius: '5px', p: 2 }}>
          <UserRanking rank={1} username={'Louis'} point={1000}/>
        </Box>
      </Box>
    </>
  );
};

export default Leaderboard;
