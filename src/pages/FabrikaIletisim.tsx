import React from 'react';
import SEO from '../components/SEO';
import '../styles/FabrikaIletisim.css';

const FabrikaIletisim: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Fabrika İletişim - Döner Bank",
    "description": "Döner Bank fabrika iletişim bilgileri, departmanlar ve iletişim formu",
    "url": "https://donerbank.com/fabrika-iletisim",
    "mainEntity": {
      "@type": "Organization",
      "name": "Döner Bank",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "İkitelli Organize Sanayi Bölgesi Mutsan Mutfakçılar San. Sit. M1 Blok No: 4/6",
        "addressLocality": "Başakşehir",
        "addressRegion": "İstanbul",
        "addressCountry": "TR"
      },
      "telephone": "0212 508 62 74"
    }
  };

  return (
    <div className="fabrika-iletisim-page">
      <SEO 
        title="Fabrika İletişim"
        description="Döner Bank fabrika iletişim bilgileri, departmanlar ve randevu alma. İstanbul Başakşehir'deki fabrikamızla iletişime geçin."
        keywords="döner bank fabrika, fabrika iletişim, döner üretim tesisi, başakşehir fabrika, döner bank iletişim"
        url="https://donerbank.com/fabrika-iletisim"
        schemaData={schemaData}
      />
      <div className="container">
        <h1>Fabrika İletişim</h1>
        
        <section className="fabrika-intro">
          <h2>Sorularınız mı var ?</h2>
          <p>Topluluğumuzda altın standartlar koymanın gururunu yaşayan Döner Bank hakkındaki sorunuz için teşekkür ederiz. Konuklarımız, doğal olarak, sevgimizi katarak güler yüzle hazırladığımız en leziz yemekleri talep ediyor.</p>
        </section>
        
        <section className="contact-info">
          <div className="contact-details">
            <h2>İletişim Bilgilerimiz</h2>
            <div className="info-grid">
              <div className="info-item">
                <h3>Adres</h3>
                <p>İkitelli Organize Sanayi Bölgesi Mutsan Mutfakçılar San. Sit.</p>
                <p>M1 Blok No: 4/6</p>
                <p>Başakşehir / İSTANBUL</p>
                <div className="map-link">
                  <a href={`https://www.google.com/maps?q=41.098448,28.797302`} target="_blank" rel="noopener noreferrer" className="google-maps-btn">
                    🗺️ Google Haritada Göster
                  </a>
                </div>
              </div>
              <div className="info-item">
                <h3>Telefon</h3>
                <p>Tel: 0212 508 62 74</p>
                <p>Cep: 0507 540 44 96</p>
              </div>
              <div className="info-item">
                <h3>Çalışma Saatleri</h3>
                <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                <p>Cumartesi: 09:00 - 17:00</p>
                <p>Pazar: Kapalı</p>
              </div>

            </div>
          </div>
        </section>
        
        
        <section className="contact-departments">
          <h2>Departmanlarımız</h2>
          <div className="departments-grid">
            <div className="fabrika-department-card">
              <div className="fabrika-department-icon">
                <i className="fas fa-industry" aria-hidden="true">🏭</i>
              </div>
              <h3>Üretim Departmanı</h3>
              <p><i className="fas fa-phone" aria-hidden="true"></i> Tel: +90 282 123 45 69</p>
              <p><i className="fas fa-envelope" aria-hidden="true"></i> E-posta: uretim@donerbank.com</p>
            </div>
            <div className="fabrika-department-card">
              <div className="fabrika-department-icon">
                <i className="fas fa-check-circle" aria-hidden="true">✅</i>
              </div>
              <h3>Kalite Kontrol</h3>
              <p><i className="fas fa-phone" aria-hidden="true"></i> Tel: +90 282 123 45 70</p>
              <p><i className="fas fa-envelope" aria-hidden="true"></i> E-posta: kalite@donerbank.com</p>
            </div>
            <div className="fabrika-department-card">
              <div className="fabrika-department-icon">
                <i className="fas fa-shopping-cart" aria-hidden="true">🛒</i>
              </div>
              <h3>Satın Alma</h3>
              <p><i className="fas fa-phone" aria-hidden="true"></i> Tel: +90 282 123 45 71</p>
              <p><i className="fas fa-envelope" aria-hidden="true"></i> E-posta: satinalma@donerbank.com</p>
            </div>
            <div className="fabrika-department-card">
              <div className="fabrika-department-icon">
                <i className="fas fa-users" aria-hidden="true">👥</i>
              </div>
              <h3>İnsan Kaynakları</h3>
              <p><i className="fas fa-phone" aria-hidden="true"></i> Tel: +90 282 123 45 72</p>
              <p><i className="fas fa-envelope" aria-hidden="true"></i> E-posta: ik@donerbank.com</p>
            </div>
            <div className="fabrika-department-card">
              <div className="fabrika-department-icon">
                <i className="fas fa-truck" aria-hidden="true">🚛</i>
              </div>
              <h3>Lojistik</h3>
              <p><i className="fas fa-phone" aria-hidden="true"></i> Tel: +90 282 123 45 73</p>
              <p><i className="fas fa-envelope" aria-hidden="true"></i> E-posta: lojistik@donerbank.com</p>
            </div>
          </div>
        </section>
        
        <section className="factory-contact-form">
          <h2>İletişim Formu</h2>
          <p>Fabrikamız ile ilgili sorularınız için aşağıdaki formu doldurabilirsiniz.</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Ad Soyad</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="department">İlgili Departman</label>
              <select id="department" name="department" required>
                <option value="">Seçiniz</option>
                <option value="uretim">Üretim</option>
                <option value="kalite">Kalite Kontrol</option>
                <option value="satinalma">Satın Alma</option>
                <option value="ik">İnsan Kaynakları</option>
                <option value="lojistik">Lojistik</option>
                <option value="diger">Diğer</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Konu</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Gönder</button>
          </form>
        </section>
        
        <section className="factory-visit">
          <h2>Fabrika Ziyareti</h2>
          <p>Fabrikamızı ziyaret etmek isterseniz, lütfen önceden randevu alınız. Ziyaret talebinizi iletmek için yukarıdaki iletişim formunu kullanabilir veya doğrudan telefon ile bize ulaşabilirsiniz.</p>
        </section>
      </div>
    </div>
  );
};

export default FabrikaIletisim; 