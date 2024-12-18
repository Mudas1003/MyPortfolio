import React from 'react';

const FloatingNavbar = () => {
  const handleScroll = (event, id) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    navbar: {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the last value to control transparency (0 = fully transparent, 1 = fully opaque)
      padding: '13px 40px',
      borderRadius: '30px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 999,
      width: 'auto',
    },
    navbarLinks: {
      listStyle: 'none',
      margin: '0',
      padding: '0',
      display: 'flex',
      gap: '15px', // Increased gap between navbar items
    },
    navbarLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '23px',
      fontWeight: 'light',
      transition: 'color 0.3s',
      padding: '10px 20px',
      borderRadius: '10px',
    },
    navbarLinkHover: {
      color: '#f39c12',
    },
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <ul style={styles.navbarLinks}>
          <li>
            <a
              href="#background"
              style={styles.navbarLink}
              onClick={(e) => handleScroll(e, 'background')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#card"
              style={styles.navbarLink}
              onClick={(e) => handleScroll(e, 'card')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#achievements"
              style={styles.navbarLink}
              onClick={(e) => handleScroll(e, 'achievements')}
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={styles.navbarLink}
              onClick={(e) => handleScroll(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={styles.navbarLink}
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FloatingNavbar;
