import React from 'react';

const PhotoCard = ({ image, title, text, time }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt="card" style={styles.image} />
      <div style={styles.body}>
        <h5 style={styles.title}>{title}</h5>
        <p style={styles.text}>{text}</p>
        <div style={styles.actions}>
          <button
            style={styles.btn}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#ddd')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
          >
            View
          </button>
          <button
            style={styles.btn}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#ddd')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
          >
            Edit
          </button>
          <span style={styles.time}>{time}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '300px',
    margin: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  body: {
    padding: '1rem'
  },
  title: {
    margin: '0 0 0.5rem 0'
  },
  text: {
    fontSize: '0.9rem',
    color: '#555'
  },
  actions: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn: {
    padding: '6px 12px',
    border: '1px solid lightgray',
    backgroundColor: 'white',
    color: 'black',
    cursor: 'pointer',
    marginRight: '5px'
  },
  time: {
    fontSize: '0.8rem',
    color: '#888'
  }
};

export default PhotoCard;
