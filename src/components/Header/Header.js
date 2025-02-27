import React, { useState, useEffect } from "react"; 
import { useLocation, Link } from "react-router-dom";
import { menuItems } from "./menuConfig";

const Header = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarRelative, setIsNavbarRelative] = useState(false); 

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const smoothScrollLinks = document.querySelectorAll('.smooth-anchor');

    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  },);

  // Gestion du dark mode (modifié)
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) { 
      body.classList.add('odd');
    } else {
      body.classList.remove('odd');
    }
  }, [isDarkMode]); 

  useEffect(() => {
    const handleScroll = () => {
      if (!isNavbarRelative) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavbarRelative]); 


  return (
    <header id="header">
      <nav className={`navbar navbar-expand ${isScrolled ? "scrolled" : ""} ${isNavbarRelative ? "relative" : ""}`}> 
        <div className="container header">
          <div className="magnetic">
            <Link to="/" className="navbar-brand">
              STEL'R.
            </Link>
          </div>
          <div className="ms-auto"></div>

          <ul className="navbar-nav items d-none d-md-block">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  to={item.href}
                  className={`nav-link ${location.pathname === item.href ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav icons d-flex align-items-center">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? "Change to light theme" : "Change to dark theme"}
              >
                <span className="icon material-symbols-outlined">
                  {isDarkMode ? "light_mode" : "dark_mode"}
                </span>
              </a>
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
      <div className={`offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasRight">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
          <button type="button" className="btn-close" onClick={toggleMenu} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link to={item.href} className="nav-link" onClick={toggleMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;