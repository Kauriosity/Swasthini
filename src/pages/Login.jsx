import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in:', email, password);
  };

  return (
    <div style={styles.page}>
       <div style={styles.fullScreenText}>Empower • Educate • Embrace</div>

      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome to Swasthini</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  boxSizing: 'border-box',
},
fullScreenText: {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '36px',
  fontWeight: '600',
  color: '#d63384',
  opacity: 0.08,
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  zIndex: 0,
  width: '100%',
  pointerEvents: 'none',
},



  card: {
    backgroundColor: '#FFC0CB', // softer pink
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 10px white',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    
    color: '#fff',
    fontSize: '35px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#ffffff',  
    color: '#333'
  },
  button: {
    backgroundColor: '#E37383',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Login;
