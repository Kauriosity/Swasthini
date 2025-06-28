import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Step 1: Import Link

const Main = () => {
  return (
    <div style={styles.page}>
  <nav style={styles.navbar}>
    {/* 👇 Left side block with Swasthini + hero text */}
    <div style={styles.heroBlock}>
      <div style={styles.logo}>Swasthini</div>
      <h1 style={styles.title}>Welcome to Swasthini</h1>
      <p style={styles.subtitle}>
        Empowering women through health, awareness & care.
      </p>
    </div>

    {/* 👇 Right side navigation buttons */}
    <div style={styles.navButtons}>
      <button style={styles.button}>About Us</button>
      <Link to="/login" style={styles.link}>
        <button style={styles.button}>Login</button>
      </Link>
      <button style={styles.button}>Contact</button>
    </div>
  </nav>
</div>

  );
};

const styles = {
 page: {
  background: 'linear-gradient(to right, #ffe0ec, #fad0c4)',
  minHeight: '100vh',
  width: '100vw',
  fontFamily: '"Segoe UI", sans-serif',
  color: '#333',
  display: 'flex',
  flexDirection: 'column',
},

navbar: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '30px 40px',
},

heroBlock: {
  display: 'flex',
  flexDirection: 'column',
},

logo: {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#d63384',
  marginBottom: '8px',
},

title: {
  fontSize: '22px',
  color: '#c2185b',
  marginBottom: '5px',
},

subtitle: {
  fontSize: '16px',
  color: '#555',
},

navButtons: {
  display: 'flex',
  gap: '15px',
},

button: {
  padding: '8px 16px',
  fontSize: '15px',
  border: '1px solid #d63384',
  backgroundColor: '#fff',
  color: '#d63384',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
},

link: {
  textDecoration: 'none',
},

};

export default Main;
