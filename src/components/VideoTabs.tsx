import React from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { CiMicrophoneOn } from 'react-icons/ci';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { CiChat1 } from 'react-icons/ci';
import { IoExitOutline } from 'react-icons/io5';

export const VideoTabs = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          paddingTop: '1rem',
          height: '8vh',
          marginLeft: '3rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginTop: '1rem',
          }}
        >
          <img
            src="https://cdn.britannica.com/80/203480-131-ACDB8EC0/Young-student-writing-in-notebook-in-school.jpg"
            alt=""
            style={{
              width: '220px',
              height: '150px',
              borderRadius: 20,
            }}
          />
          <img
            src="https://clark-blog.imgix.net/2019/05/shutterstock_388591585.jpg"
            alt=""
            style={{
              width: '220px',
              height: '150px',
              borderRadius: 20,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginTop: '2.5rem',
            width: '220px',
          }}
        >
          <div
            style={{
              fontSize: '1.5rem',
              backgroundColor: '#cee2ed',
              padding: '0.5rem',
              borderRadius: 10,
              margin: '0.5rem',
            }}
          >
            <IoVideocamOutline />
            <p>Cam</p>
          </div>
          <div
            style={{
              fontSize: '1.5rem',
              backgroundColor: '#cee2ed',
              padding: '0.5rem',
              borderRadius: 10,
              margin: '0.5rem',
            }}
          >
            <CiMicrophoneOn />
            <p>Mic</p>
          </div>
          <div
            style={{
              fontSize: '1.5rem',
              backgroundColor: '#cee2ed',
              padding: '0.5rem',
              borderRadius: 10,
              margin: '0.5rem',
            }}
          >
            <FaRegShareFromSquare />
            <p>Share</p>
          </div>
          <div
            style={{
              fontSize: '1.5rem',
              backgroundColor: '#cee2ed',
              padding: '0.5rem',
              borderRadius: 10,
              margin: '0.5rem',
            }}
          >
            <CiChat1 />
            <p>Chat</p>
          </div>
          <div
            style={{
              fontSize: '1.5rem',
              backgroundColor: '#38c7c2',
              padding: '0.5rem',
              borderRadius: 10,
              margin: '0.5rem',
            }}
          >
            <IoExitOutline />
            <p>Leave</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://img.freepik.com/premium-vector/youtube-web-video-player-template_248162-163.jpg"
          alt=""
          style={{
            marginLeft: '2rem',
            marginTop: '2rem',
            height: '550px',
            width: '1000px',
          }}
        />
      </div>
    </div>
  );
};
