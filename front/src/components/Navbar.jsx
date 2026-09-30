import { Link } from 'react-router-dom';

export default function Navbar() {
  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '15px 30px',
    backgroundColor: '#282c34',
    color: 'white',
    alignItems: 'center',
  };

  const linkStyle = {
    color: '#61dafb',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <h3 style={{ margin: 0, marginRight: 'auto' }}>Meu Projeto Fullstack</h3>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/sobre" style={linkStyle}>Sobre</Link>
    </nav>
  );
}