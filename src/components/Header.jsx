import React from 'react';

// 상단에 고정되는 헤더
const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        📷 <strong>Album</strong>
      </div>
      <div style={styles.right}>
        <button style={styles.button}>≡</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100vw',
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000
  },
  left: {
    fontSize: '1.2rem'
  },
  right: {},
  button: {
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer'
  }
};

export default Header;
