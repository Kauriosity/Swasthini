import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Step 1: Import Link

const Main = () => {
  
   return (
  <div style={styles.page}>
    {/* ✅ Navbar: Top bar only */}
    <nav style={styles.navbar}>
      <div style={{ width: '150px' }} /> 
      <div style={styles.navButtons}>
        <Link to="/about" style={styles.link}><button style={styles.button}>About Us</button></Link>
        <Link to="/login" style={styles.link}><button style={styles.button}>Login</button></Link>
        <Link to="/contact" style={styles.link}><button style={styles.button}>Contact</button></Link>
      </div>
    </nav>

    {/* ✅ Hero Section (title + quote) */}
    <div style={styles.heroBlock}>
      <h1 style={styles.title}>Welcome to Swasthini</h1>
      <p style={styles.subtitle}>Empowering women through health, awareness & care.</p>
    </div>

    {/* ✅ Feature Cards Section */}
    <div style={styles.features}>
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Period Tracker</h2>
        <p style={styles.cardText}>Track your cycle, predict your next date.</p>
        <Link to="/period-tracker"><button style={styles.cardButton}>Track Now</button></Link>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>PCOS / PCOD Test</h2>
        <p style={styles.cardText}>Take our symptom checker and learn more.</p>
        <button style={styles.cardButton}>Start Test</button>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Gynecologist Support</h2>
        <p style={styles.cardText}>Find nearby doctors or consult online.</p>
        <button style={styles.cardButton}>Find Help</button>
      </div>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Breast & Cervical Health</h2>
        <p style={styles.cardText}>Get informed about women’s health concerns.</p>
        <button style={styles.cardButton}>Learn More</button>
      </div>
    </div>
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
  textAlign: 'center',
  marginTop: '20px',
  marginBottom: '30px',
},





title: {
  fontSize: '45px',
  color: '#c2185b',
  marginBottom: '4px',
},

subtitle: {
  fontSize: '20px',
  color: '#555',
   marginTop: '4px', 
  fontWeight: 'bold',
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
features: {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '25px',
  padding: '30px 40px 60px',
},


card: {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '16px',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  width: '230px',                // fix card width for consistency
  transition: 'transform 0.3s ease',
},


cardTitle: {
  fontSize: '20px',
  color: '#d63384',
  marginBottom: '10px',
},

cardText: {
  color: '#555',
  fontSize: '14px',
  marginBottom: '15px',
},

cardButton: {
  backgroundColor: '#d63384',
  color: '#fff',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  cursor: 'pointer',
}



};

export default Main;
