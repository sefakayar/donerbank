import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logoImg from '../images/db_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src={logoImg} alt="Döner Bank Logo" className="footer-logo-image" />
            </Link>
            <p>Kurumsal Döner Ticareti Uzmanı</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Kurumsal</h3>
              <ul>
                <li><Link to="/kurumsal">Hakkımızda</Link></li>
                <li><Link to="/fabrikamiz">Fabrikamız</Link></li>
                <li><Link to="/subelerimiz">Şubelerimiz</Link></li>
                <li><Link to="/bulten">Bülten</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Hizmetlerimiz</h3>
              <ul>
                <li><Link to="/franchising">Franchising</Link></li>
                <li><Link to="/bolge-temsilcileri">Bölge Temsilcileri</Link></li>
                <li><Link to="/fabrika-iletisim">Toptan Satış</Link></li>
                <li><Link to="/fabrika-iletisim">Eğitim</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>İletişim</h3>
              <ul>
                <li><Link to="/fabrika-iletisim">Fabrika İletişim</Link></li>
                <li><Link to="/fabrika-iletisim">Genel Merkez</Link></li>
                <li><Link to="/fabrika-iletisim">Kariyer</Link></li>
                <li><Link to="/fabrika-iletisim">Öneri ve Şikayet</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-contact">
            <h3>Bize Ulaşın</h3>
            <p><strong>Telefon:</strong> 0212 508 62 74</p>
            <p><strong>E-posta:</strong> info@donerbank.com.tr</p>
            <p><strong>Adres:</strong> İkitelli Organize Sanayi Bölgesi Mutsan Mutfakçılar San. Sit. M1 Blok No: 4/6<br />Başakşehir / İSTANBUL</p>
            
            <div className="social-links">
              <a href="https://www.facebook.com/donerbankk/" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
              <a href="https://www.instagram.com/donerbank/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://www.youtube.com/@donerbank8609" target="_blank" rel="noopener noreferrer" className="social-link">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Döner Bank. Tüm hakları <a href="https://etki360.com" target="_blank" rel="noopener noreferrer" className="etki360-link">etki360</a> tarafından saklıdır.</p>
          <div className="footer-bottom-links">
            <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link to="/kullanim-kosullari">Kullanım Koşulları</Link>
            <Link to="/cerez-politikasi">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 