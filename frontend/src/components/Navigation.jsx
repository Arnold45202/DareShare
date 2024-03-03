import '../styleSheets/home.css';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import DevilIcon from '../assets/mask.png';
import SearchIcon from '@mui/icons-material/Search';
import LeaderboardIcon from '@mui/icons-material/EmojiEventsOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div>
        <Link to='/home' className='navigation-btn'>
          <SettingsIcon sx={{ color: 'white', height: '40px', width: '40px', borderRadius: '12px' }} />
        </Link>
      </div>
      <div>
        <Link to='/submit' className='navigation-btn'>
          <img src={DevilIcon} alt='' style={{ height: '40px', width: '40px', borderRadius: '12px' }} />
        </Link>
      </div>
      <div>
        <Link to='/discover' className='navigation-btn'>
          <SearchIcon sx={{ color: 'white', height: '40px', width: '40px', borderRadius: '12px' }} />
        </Link>
      </div>
      <div>
        <Link to='/leaderboard' className='navigation-btn'>
          <LeaderboardIcon sx={{ color: 'white', height: '40px', width: '40px', borderRadius: '12px' }} />
        </Link>
      </div>
      <div>
        <Link to='/home' className='navigation-btn'>
          <PersonIcon sx={{ color: 'white', height: '40px', width: '40px', borderRadius: '12px' }} />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
