
import { SiGoogleclassroom } from 'react-icons/si';
import { IoClipboardOutline } from 'react-icons/io5';
import { CiYoutube } from 'react-icons/ci';
import { RiSlideshow2Line } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdOutlineDocumentScanner } from 'react-icons/md';

export const MidBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '0.5rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingBottom: '0.5rem',
        height: '5vh',
        marginLeft: '3rem',
        backgroundColor: '#cee2ed',
        borderRadius: 30,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <SiGoogleclassroom
          style={{
            fontSize: '1.5rem',
            color: '#1b99b3',
          }}
        />
        <p> Classroom </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <IoClipboardOutline
          style={{
            fontSize: '1.5rem',
            color: '#1b99b3',
          }}
        />
        <p> Whiteboard </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <CiYoutube
          style={{
            fontSize: '1.5rem',
            color: '#1b99b3',
          }}
        />
        <p> Videos </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <RiSlideshow2Line
          style={{
            fontSize: '1.5rem',
            color: '#1b99b3',
          }}
        />
        <p> Slide Show </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <IoDocumentTextOutline
          style={{
            fontSize: '1.5rem',
            color: '#1b99b3',
          }}
        />
        <p> Documents </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <MdOutlineDocumentScanner
          style={{
            fontSize: '1.5rem',
            color: '#1b99b3',
          }}
        />
        <p> Doc.cam </p>
      </div>
    </div>
  );
};
