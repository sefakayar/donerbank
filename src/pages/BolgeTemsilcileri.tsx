import React from 'react';
import SEO from '../components/SEO';
import '../styles/BolgeTemsilcileri.css';

const BolgeTemsilcileri: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bölge Temsilcileri - Döner Bank",
    "description": "Döner Bank bölge temsilcileri iletişim bilgileri ve yetki alanları",
    "url": "https://donerbank.com/bolge-temsilcileri",
    "mainEntity": {
      "@type": "Organization",
      "name": "Döner Bank",
      "employee": [
        {
          "@type": "Person",
          "name": "Abdullah Karataş",
          "jobTitle": "Genel Koordinatör",
          "telephone": "0539 897 10 15"
        }
      ]
    }
  };

  // Bölge temsilcileri verileri
  const representatives = [
    {
      id: 1,
      name: 'Nihat Bingöl',
      region: 'Şişli, Beyoğlu, Beşiktaş, Kağıthane',
      phone1: '0532 310 65 18',
      phone2: '0535 451 89 68'
    },
    {
      id: 2,
      name: 'Mehmet Tutuş',
      region: 'Zeytinburnu, Bakırköy, Esenler, Bayrampaşa, Fatih, Eyüp',
      phone1: '0531 316 43 31',
      phone2: ''
    },
    {
      id: 3,
      name: 'Musa Bozan',
      region: 'Güngören, Bakırköy, Bahçelievler, Bağcılar, Esenler',
      phone1: '0532 281 88 92',
      phone2: ''
    },
    {
      id: 4,
      name: 'Veysi Bingöl',
      region: 'Başakşehir, Esenler, Bağcılar, Avcılar, Arnavutköy, Sultangazi',
      phone1: '0554 537 31 25',
      phone2: '0533 638 16 52'
    },
    {
      id: 5,
      name: 'Mustafa Tahta',
      region: 'Bakırköy, Zeytinburnu, Bayrampaşa, Eyüp, Fatih',
      phone1: '0541 311 89 59',
      phone2: ''
    },
    {
      id: 6,
      name: 'İsmail Tutuş',
      region: 'Küçükçekmece, Bağcılar, Bakırköy, Avcılar, Başakşehir',
      phone1: '0534 736 57 86',
      phone2: ''
    },
    {
      id: 7,
      name: 'Abdullah Karataş',
      region: 'Genel Koordinatör',
      phone1: '0539 897 10 15',
      phone2: ''
    },
    {
      id: 8,
      name: 'Erol Yıldız',
      region: 'Beykoz, Çekmeköy, Üsküdar, Şile',
      phone1: '0533 330 86 26',
      phone2: ''
    },
    {
      id: 9,
      name: 'Osman Karataş',
      region: 'Sultangazi, Gaziosmanpaşa, Bayrampaşa, Eyüp, Esenler',
      phone1: '0539 593 18 76',
      phone2: '0554 537 31 26'
    }
  ];

  return (
    <div className="bolge-temsilcileri-page">
      <SEO 
        title="Bölge Temsilcileri"
        description="Döner Bank bölge temsilcileri iletişim bilgileri. İstanbul'un tüm ilçelerinde hizmet veren temsilcilerimizle iletişime geçin."
        keywords="döner bank temsilci, bölge temsilcisi, istanbul temsilci, döner bank satış temsilcisi"
        url="https://donerbank.com/bolge-temsilcileri"
        schemaData={schemaData}
      />
      <div className="container">
        <h1>Bölge Temsilcilerimiz</h1>
        
        <section className="representatives-intro">
          <p>Döner Bank olarak Türkiye'nin tüm bölgelerinde hizmet vermekteyiz. Aşağıda bölge temsilcilerimizin iletişim bilgilerini bulabilirsiniz.</p>
        </section>
        
        
        <section className="representatives-list">
          <h2>Temsilcilerimiz</h2>
          <div className="representatives-grid">
            {representatives.map(rep => (
              <div key={rep.id} className="representative-card">
                <h3>👤 {rep.name}</h3>
                <div className="representative-info">
                  <p><strong>📍 Yetki Bölgesi:</strong> {rep.region}</p>
                  <p><strong>📞 Telefon 1:</strong> {rep.phone1}</p>
                  {rep.phone2 && <p><strong>📞 Telefon 2:</strong> {rep.phone2}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="contact-representative">
          <h2>Temsilcilerimizle İletişim</h2>
          <p>Bölge temsilcilerimizle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.</p>
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
              <label htmlFor="representative">Temsilci</label>
              <select id="representative" name="representative" required>
                <option value="">Seçiniz</option>
                {representatives.map(rep => (
                  <option key={rep.id} value={rep.name}>{rep.name} - {rep.region}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Konu</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Gönder</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BolgeTemsilcileri; 