
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegBell } from 'react-icons/fa';
import { TfiTimer } from 'react-icons/tfi';
import { BiTask } from 'react-icons/bi';
import { GoEye } from 'react-icons/go';
import { FaUserFriends } from 'react-icons/fa';
import { FaChartSimple } from 'react-icons/fa6';
import { FaFaceSmileWink } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa6';
import { TopBar } from './TopBar';

export const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '3vw',
          backgroundColor: '#cee2ed',
          padding: '0 1rem',
          height: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2.5rem',
            paddingTop: '2rem',
          }}
        >
          <FaReact
            style={{
              fontSize: '2rem',
              color: '#2b7bcc',
            }}
          />
          <GiHamburgerMenu
            style={{
              fontSize: '20px',
            }}
          />
          <FaRegBell
            style={{
              fontSize: '20px',
            }}
          />
          <TfiTimer
            style={{
              fontSize: '20px',
            }}
          />
          <BiTask
            style={{
              fontSize: '20px',
            }}
          />
          <GoEye
            style={{
              fontSize: '20px',
            }}
          />
          <FaUserFriends
            style={{
              fontSize: '20px',
            }}
          />
          <FaChartSimple
            style={{
              fontSize: '20px',
            }}
          />
        </div>
        <FaFaceSmileWink
          style={{
            fontSize: '3rem',
            color: '#1b99b3',
            paddingBottom: '4rem',
          }}
        />
      </div>
      <TopBar />
    </div>
  );
};
