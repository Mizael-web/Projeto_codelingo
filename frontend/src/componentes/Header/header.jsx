
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">CodeLingo</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/perfil">Perfil</Link>
          <Link to="/trilhas">Trilhas</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
