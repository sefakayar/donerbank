import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logoImg from '../images/db_logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src={logoImg} alt="Döner Bank Logo" className="logo-image" />
            </Link>
          </div>
          
          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/kurumsal" className="nav-link">KURUMSAL</Link>
              </li>
              <li className="nav-item">
                <Link to="/fabrikamiz" className="nav-link">FABRİKAMIZ</Link>
              </li>
              <li className="nav-item">
                <Link to="/subelerimiz" className="nav-link">ŞUBELERİMİZ</Link>
              </li>
              <li className="nav-item">
                <Link to="/franchising" className="nav-link">FRANCHISING</Link>
              </li>
              <li className="nav-item">
                <Link to="/fabrika-iletisim" className="nav-link">FABRİKA İLETİŞİM</Link>
              </li>
              <li className="nav-item">
                <Link to="/bolge-temsilcileri" className="nav-link">BÖLGE TEMSİLCİLERİ</Link>
              </li>
              <li className="nav-item">
                <Link to="/bulten" className="nav-link">BÜLTEN</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 