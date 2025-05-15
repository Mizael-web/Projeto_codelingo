
// Header.jsx
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="CodeLingo Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <Link to="/">Início</Link>
        <Link to="/home">Projeto</Link>
        <Link to="/login">Entrar</Link>
      </nav>
    </header>
  );
}