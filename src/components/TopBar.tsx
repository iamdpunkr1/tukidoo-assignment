import React from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { FaSquarePhone } from 'react-icons/fa6';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { MidBar } from './MidBar';
import { VideoTabs } from './VideoTabs';

export const TopBar = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: '1rem',
          height: '8vh',
          marginLeft: '3rem',
        }}
      >
        <IoChevronBack
          style={{
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#cee2ed',
            padding: '0 1rem',
            height: '6vh',
            borderRadius: 12,
            marginRight: '0.5rem',
          }}
        />
        <p
          style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
          }}
        >
          Basic Mathematics 101
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '60vw',
            alignItems: 'center',
            gap: '0.5rem',
            marginRight: '3rem',
          }}
        >
          <FaSquarePhone
            style={{
              color: 'green',
              fontSize: '2rem',
              borderRadius: 12,
            }}
          />
          <p>Call Teacher</p>
          <MdOutlineSupportAgent
            style={{
              fontSize: '2rem',
              color: 'brown',
              marginLeft: '2rem',
            }}
          />
          <p>Support</p>
        </div>
      </div>
      <MidBar />
      <VideoTabs />
    </div>
  );
};
