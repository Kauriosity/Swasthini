import React from 'react';

const About = () => {
  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <h1 style={styles.heading}>About Swasthini</h1>
          <p style={styles.text}>
  <strong>Swasthini</strong> — derived from Sanskrit, meaning “a healthy woman” — is more than just a digital platform; it is a safe space, a companion, and a voice for women's health and well-being. <br /><br />

  Developed with empathy and purpose, <strong>Swasthini</strong> is a holistic web application created to support women in managing their reproductive and overall health. From tracking menstrual cycles to understanding symptoms of conditions like PCOS and PCOD, Swasthini offers tools that are informative, private, and easy to use. <br /><br />

  We believe that awareness is the first step to empowerment. That’s why our platform also provides educational resources on breast and cervical health, helping women stay informed about early signs, self-checks, and prevention. <br /><br />

  Whether it's finding a local gynecologist, scheduling an online consultation, or simply reading relatable, evidence-based health blogs — Swasthini is here to stand beside every woman in her journey to wellness. <br />

   <br />

  Together, let’s embrace health, celebrate womanhood, and build a future where care is just a click away. 💖
</p>
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
  },
  wrapper: {
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '800px',
    width: '100%',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  heading: {
    fontSize: '32px',
    color: '#c2185b',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.7',
  },
};

export default About;
