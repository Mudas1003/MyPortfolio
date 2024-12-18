import React from 'react';

const SocialButtons = () => {
  return (
    <div style={styles.buttonContainer}>
      <a
        href="https://github.com"
        style={{ ...styles.btn, backgroundColor: '#24292f' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" style={styles.icon}></i>
      </a>
      <a
        href="https://linkedin.com"
        style={{ ...styles.btn, backgroundColor: '#0077b5' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in" style={styles.icon}></i>
      </a>
      <a
        href="https://discord.com"
        style={{ ...styles.btn, backgroundColor: '#7289da' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-discord" style={styles.icon}></i>
      </a>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    gap: '15px',
  },
  btn: {
    display: 'grid',
    placeItems: 'center',
    padding: '1.4em',
    borderRadius: '50%',
    boxShadow: '6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7)',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'transform 0.5s',
    textDecoration: 'none',
    color: 'black',
  },
  icon: {
    color: 'white',
    fontSize: '24px',
  },
};

export default SocialButtons;
