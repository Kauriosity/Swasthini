import React from 'react';

const Contact = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Get in Touch with Us!</h1>

        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" rows="5" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>

        <div style={styles.contactInfo}>
          <p>Email: swasthini.team@gmail.com</p>
          <p>Location: Punjab, India</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: 'linear-gradient(to right, #ffe0ec, #fad0c4)',
    minHeight: '100vh',
    width:'100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Segoe UI", sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    color: '#c2185b',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '20px',
  },
  input: {
  padding: '12px',
  backgroundColor: '#ffffff',   
  color: '#333',                
  border: '1px solid #d63384',  
  borderRadius: '8px',
  fontSize: '16px',
},

  textarea: {
    padding: '12px',
    border: '1px solid #ffc0cb',
    borderRadius: '8px',
    backgroundColor: '#ffffff',   
    color: '#333',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#d63384',
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  contactInfo: {
    fontSize: '16px',
    color: '#555',
    marginTop: '20px',
    textAlign: 'left',
  },
};

export default Contact;
