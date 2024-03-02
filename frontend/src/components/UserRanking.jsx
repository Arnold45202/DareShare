/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import mask from '../assets/mask.png';

const UserRanking = (props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: 1, borderColor: 'rgb(121, 19, 168)', p: 1 }}>
      <Typography variant='h6' sx={{ color: 'white' }}>
        {props.rank}. <img src={props.img} alt='' style={{ borderRadius: '100px', height: '25px', width: '25px', position: 'relative', top: 7, marginLeft: 5, marginRight: 5 }} /> {props.username}
      </Typography>
      <Typography variant='h6' sx={{ color: 'white' }}>
        {props.point} <img src={mask} alt='' style={{ width: '30px', height: '30px', position: 'relative', top: 7 }} />
      </Typography>
    </Box>
  );
};

export default UserRanking;
