import { useState } from 'react';
import logoText from '../../assets/logo-text.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

  return (
    <header className="navbar">
      <nav className="nav container">
        <div className="nav-left">
          <button
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <div className="brand">
            <img src={logoText} alt="DevStack logo" className="brand-logo" />
          </div>
        </div>

        <div className={`nav-center ${menuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={item === 'Home' ? 'nav-link nav-link-home' : 'nav-link'}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <button className="nav-signin">Sign In</button>
          <button className="nav-signup">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
