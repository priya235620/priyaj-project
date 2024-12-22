import React from 'react';

function TravelWebsite() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Explore the World</h1>
        <nav style={styles.navbar}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#destinations" style={styles.navLink}>Destinations</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <a href="#contact" style={styles.navLink}>sign in</a>
          <a href="#contact" style={styles.navLink}>register</a>
        </nav>
      </header>

      <section id="home" style={styles.section}>
        <h2>Welcome to Our Travel Website</h2>
        <p>Discover amazing destinations and create unforgettable memories.</p>
      </section>

      <section id="destinations" style={styles.section}>
        <h2>Popular Destinations</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <img
              src="8.jpg"
              alt="Destination 1"
              style={styles.cardImage}
            />
            <h3>Paris</h3>
            <p>The city of love and lights.</p>
          </div>
          <div style={styles.card}>
            <img
              src="3.jpg"
              alt="Destination 2"
              style={styles.cardImage}
            />
            <h3>Bali</h3>
            <p>A tropical paradise awaits.</p>
          </div>
          <div style={styles.card}>
            <img
              src="10.jpg"
              alt="Destination 3"
              style={styles.cardImage}
            />
            <h3>New York</h3>
            <p>The city that never sleeps.</p>
          </div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <h2>About Us</h2>
        <p>We are passionate about travel and helping you explore the world.</p>
      </section>

      <section id="contact" style={styles.section}>
        <h2>Contact Us</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Name</label>
            <input type="text" name="name" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input type="email" name="email" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label>Message</label>
            <textarea name="message" required style={styles.textarea}></textarea>
          </div>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </section>
      <section id="signin" style={styles.section}>
        <h2>sign in our tourist website</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label>Email</label>
            <input type="email" name="email" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label>password</label>
            <input type="password" name="password" required style={styles.input} />
          </div>
          <button type="signin" style={styles.button}>signin</button>
        </form>
      </section>
      <section id="registration form " style={styles.section}>
        <h2>register our tourist website</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label>name</label>
            <input type="name" name="name" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label>email address</label>
            <input type="email address" name="email address" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label>country</label>
            <input type="country" name="country" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label>phone </label>
            <input type="phone" name="phone" required style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label>password</label>
            <input type="password" name="password" required style={styles.input} />
          </div>
          <button type="Create Account" style={styles.button}>Create Account</button>
        </form>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2024 Travel Website. All rights reserved.</p>
      </footer>
    </div>
    
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '-100',
    backgroundImage: 'url(travell.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'black',
  },
  header: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
  },
  navbar: {
    marginTop: '1rem',
  },
  navLink: {
    margin: '0 1rem',
    color: '#fff',
    textDecoration: 'none',
  },
  section: {
    padding: '2rem',
    textAlign: 'center',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    width: '250px',
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    borderRadius: '8px',
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'left',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    resize: 'none',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#007bff',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
  },
};


export default TravelWebsite;