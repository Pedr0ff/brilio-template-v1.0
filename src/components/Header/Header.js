// src/components/Header/Header.js (version corrigée)
import React, { useState, useEffect } from 'react'; // useRef supprimé
import { NavLink, useLocation } from 'react-router-dom';
import { menuItems } from "./menuConfig";

const Header = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Supprimé : const [isNavbarRelative, setIsNavbarRelative] = useState(false);

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Simplifié
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Tableau de dépendances vide

    useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('odd');
    } else {
      body.classList.remove('odd');
    }
  }, [isDarkMode]);

  return (
    <header id="header">
      <nav className={`navbar navbar-expand ${isScrolled ? "scrolled" : ""}`}> {/* isNavbarRelative supprimé */}
        <div className="container header">
          <div className="magnetic">
            <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
              STEL'R.
            </NavLink>
          </div>
          <div className="ms-auto"></div>

          <ul className="navbar-nav items d-none d-md-block">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.href}
                  className={`nav-link ${location.pathname === item.href ? "active" : ""}`}
                    onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav icons d-flex align-items-center">
            <li className="nav-item">
              {/* Utilisez un BUTTON, pas un lien */}
              <button
                type="button"
                className="nav-link"
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? "Change to light theme" : "Change to dark theme"}
              >
                <span className="icon material-symbols-outlined">
                  {isDarkMode ? "light_mode" : "dark_mode"}
                </span>
              </button>
            </li>
          </ul>

          <div
            className={`navbar-toggler ${isScrolled ? "scrolled" : ""}`}
            onClick={toggleMenu}
          >
            <div className="navbar-header">
              <div className="content">
                <div className="toggler-icon"></div>
                <span className="title">Menu</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
        {/* ... (le reste de votre code pour le offcanvas, inchangé) ... */}
        <div className={`offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasRight">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
                <button type="button" className="btn-close" onClick={toggleMenu} aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav">
                    {menuItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <NavLink to={item.href} className="nav-link" onClick={closeMenu}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
      </div>
    </header>
  );
};

export default Header;