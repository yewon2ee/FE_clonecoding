// @ts-nocheck
import React from 'react';
import PhotoCard from '../components/PhotoCard';
import testImage from '../assets/image.png';

const AlbumPage = () => {
  const cards = Array(9).fill(0); 

  return (
    <main style={styles.container}>
      <div style={styles.top}>
        <h1>Album example</h1>
        <p>Something short and leading about the collection below—its contents, the creator, etc.</p>
        <div>
          <button style={styles.btnPrimary}>main call to action</button>
          <button style={styles.btnSecondary}>secondary action</button>
        </div>
      </div>

      <div style={styles.grid}>
        {cards.map((_, idx) => (
          <PhotoCard
            key={idx}
            image={testImage}
            title="This is a wider card"
            text="This content is a little bit longer."
            time="9 mins"
          />
        ))}
      </div>
    </main>
  );
};

const styles = {
  container: {
    marginTop: '100px',
    padding: '2rem'
  },
  top: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
 grid: {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', 
  gap: '1.5rem',
  justifyItems: 'center'
}
,
  btnPrimary: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    marginRight: '1rem',
    cursor: 'pointer'
  },
  btnSecondary: {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer'
  }
};

export default AlbumPage;
