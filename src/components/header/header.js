/** @jsx jsx */
import { jsx, Container, Flex, Button,Text } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import LogoWhite from 'assets/logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import { getRequest, getUser } from 'api/request';
import Modal from 'react-modal/lib/components/Modal';
import Dilog from 'sections/dilog';
import Dialog from 'sections/Dialog';
import Brochure from "assets/Brochure.png";
import Website from "assets/Website.png";



export default function Header({ className }) {
  const customStyles = {
  
    content: {
      height: 200,
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo sx={styles.logo} src={className === 'sticky' ? LogoDark : LogoWhite}
           />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          <Button
        onClick={openModal}
          
        
          
            className="donate__btn"
            variant="secondary"
            aria-label="Get Started"
          >
    
            Get Started
          </Button>
         
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles.content} 
            contentLabel="Example Modal"
          >
            <Container style={{display:'flex',justifyContent:'right',}} >
            <Button  onClick={closeModal}>close</Button>
            </Container>
           <h2 style={{textAlign:"center"
          }}>Scan QR-Code</h2>
        
            <Container style={styles.card}>
             <Container style={styles.qr1}>
                        
                       
                        <Logo sx={styles.qrLogo} src={ Website}
                        />
           <h2 >Visit Website</h2>
           </Container>
                         <Container style={styles.qr2}>
                        
                       
                        <Logo sx={styles.qrLogo} src={ Brochure}
                        />
                         <h2 >Download Brochure</h2>
                         </Container>
                         </Container>
               
          
       
        
      
          </Modal>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    height: '12vh',
    color: 'white',
    fontWeight: 'normal',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,



    backgroundColor: 'transparent',
    transition: 'all 0.5s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
      '.donate__btn': {
        borderColor: 'primary',
        color: 'primary',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white',
        },
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  card: {
    alignItems: 'center',
    display: 'flex',
     },
  qr1:{
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
   flexDirection: 'column',
  },
  qr2:{
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
  logo: {
   width: [null, null, null, null, 50],
    height: [null, null, null, null, 50],
    
  },
  qrLogo: {
    width: [null, null, null, null, "60%"],
     height: [null, null, null, null, "60%"],
     
   },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: '16px',
      fontWeight: '400',
      px: 25,
      cursor: 'pointer',
      lineHeight: '1.2',
      '&.active': {
        color: 'secondary',
      },
    },
  },
};
