import React from 'react';
import '../styles/Fabrikamiz.css';
import SEO from '../components/SEO';

// Fabrika görselleri
import uretimtesisi from '../images/fabrikamiz/uretimtesisi.png';
import paketleme from '../images/fabrikamiz/paketleme.png';
import sogukhava from '../images/fabrikamiz/sogukhava.png';
import labora from '../images/fabrikamiz/labora.png';

const Fabrikamiz: React.FC = () => {
  const factorySchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Döner Bank Üretim Tesisi",
    "description": "Modern teknoloji ile geleneksel lezzetlerin buluştuğu üretim tesisimiz. ISO 22000 ve HACCP sertifikalı.",
    "url": "https://donerbank.com/fabrikamiz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Küçük Sanayi Sitesi D-Blok No: 35",
      "addressLocality": "Tekirdağ",
      "addressCountry": "TR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Döner Üretim Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Günlük 10+ Ton Döner Üretimi"
          }
        }
      ]
    }
  };

  return (
    <div className="fabrikamiz-page">
      <SEO 
        title="Fabrikamız"
        description="Döner Bank üretim tesisi - Modern teknoloji ile geleneksel lezzetlerin buluştuğu fabrikamız. ISO 22000 ve HACCP sertifikalı, günlük 10+ ton üretim kapasitesi."
        keywords="döner fabrikası, döner üretim tesisi, ISO 22000, HACCP, döner üretimi, tekirdağ fabrika"
        url="https://donerbank.com/fabrikamiz"
        schemaData={factorySchema}
      />
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Fabrikamız</h1>
            <p>Modern teknoloji ile geleneksel lezzetlerin buluştuğu üretim tesisimiz</p>
          </div>
        </div>
      </section>
      
      <section className="factory-intro">
        <div className="container">
          <div className="intro-content">
            <div className="section-badge">Döner Bank Üretim Tesisi</div>
            <h2>Sektörün En İleri Teknolojik Altyapısı</h2>
            <p className="intro-text">Döner Bank olarak, modern teknoloji ile geleneksel lezzetleri buluşturduğumuz üretim tesislerimiz, sektörün en ileri teknolojik altyapısına sahiptir. Hijyen ve kalite standartlarından ödün vermeden, her gün binlerce müşterimize hizmet vermekteyiz.</p>
            <div className="intro-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-text">Ton Günlük Üretim</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5000+</span>
                <span className="stat-text">m² Üretim Alanı</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-text">Uzman Personel</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="factory-features">
        <div className="container">
          <div className="section-header">
            <h2>Üretim Tesislerimiz</h2>
            <p>En yüksek standartlarda üretim yapan modern tesislerimiz</p>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon hygiene"></div>
              <h3>Hijyen Standartları</h3>
              <p>ISO 22000 ve HACCP sertifikalarına sahip tesislerimizde, gıda güvenliği en üst seviyede sağlanmaktadır.</p>
            </div>
            <div className="feature">
              <div className="feature-icon capacity"></div>
              <h3>Üretim Kapasitesi</h3>
              <p>Günlük 10 ton üretim kapasitesi ile Türkiye'nin en büyük döner üretim tesislerinden birine sahibiz.</p>
            </div>
            <div className="feature">
              <div className="feature-icon quality"></div>
              <h3>Kalite Kontrol</h3>
              <p>Hammaddenin kabulünden ürünün sevkiyatına kadar her aşamada sıkı kalite kontrol süreçleri uygulanmaktadır.</p>
            </div>
            <div className="feature">
              <div className="feature-icon research"></div>
              <h3>Ar-Ge Çalışmaları</h3>
              <p>Sürekli gelişim için Ar-Ge laboratuvarlarımızda yeni ürün ve üretim teknikleri geliştirmekteyiz.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="production-process">
        <div className="container">
          <div className="section-header">
            <h2>Üretim Sürecimiz</h2>
            <p>Hammaddeden sofraya kadar titizlikle uygulanan üretim aşamaları</p>
          </div>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">01</div>
              <div className="timeline-content">
                <h3>Hammadde Seçimi</h3>
                <p>Anlaşmalı çiftliklerden temin edilen en kaliteli etler kullanılmaktadır. Her parti hammadde, laboratuvarlarımızda detaylı analizlerden geçirilmektedir.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">02</div>
              <div className="timeline-content">
                <h3>Marinasyon</h3>
                <p>Özel baharatlar ve geleneksel tariflerle etler marine edilmektedir. Özel formüle edilmiş karışımlarımız, etin lezzetini ve yumuşaklığını artırmaktadır.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">03</div>
              <div className="timeline-content">
                <h3>Şişleme</h3>
                <p>Uzman ustalarımız tarafından özel tekniklerle şişleme işlemi yapılmaktadır. Modern ekipmanlar ve geleneksel ustalık bir arada kullanılmaktadır.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">04</div>
              <div className="timeline-content">
                <h3>Pişirme ve Soğutma</h3>
                <p>Modern pişirme teknikleri ile pişirilen ürünler, özel soğutma odalarında şoklanmaktadır. Bu sayede ürünlerin tazeliği ve lezzeti korunmaktadır.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">05</div>
              <div className="timeline-content">
                <h3>Paketleme ve Sevkiyat</h3>
                <p>Hijyenik koşullarda paketlenen ürünler, soğuk zincir bozulmadan müşterilerimize ulaştırılmaktadır. Özel tasarlanmış araçlarımız ile sevkiyat yapılmaktadır.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="factory-gallery">
        <div className="container">
          <div className="section-header">
            <h2>Fabrika Galerimiz</h2>
            <p>Modern üretim tesislerimizden görüntüler</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image">
                <img src={uretimtesisi} alt="Üretim Tesisi" />
              </div>
              <div className="gallery-caption">Üretim Tesisi</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <img src={labora} alt="Kalite Kontrol Laboratuvarı" />
              </div>
              <div className="gallery-caption">Kalite Kontrol Laboratuvarı</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <img src={paketleme} alt="Paketleme Ünitesi" />
              </div>
              <div className="gallery-caption">Paketleme Ünitesi</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">
                <img src={sogukhava} alt="Soğuk Hava Depoları" />
              </div>
              <div className="gallery-caption">Soğuk Hava Depoları</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="certifications">
        <div className="container">
          <div className="section-header">
            <h2>Kalite Sertifikalarımız</h2>
            <p>Uluslararası standartlarda üretim kalitemizin belgeleri</p>
          </div>
          <div className="certifications-grid">
            <div className="certification-item">
              <div className="certification-icon iso"></div>
              <h3>ISO 22000</h3>
              <p>Gıda Güvenliği Yönetim Sistemi</p>
            </div>
            <div className="certification-item">
              <div className="certification-icon haccp"></div>
              <h3>HACCP</h3>
              <p>Tehlike Analizi ve Kritik Kontrol Noktaları</p>
            </div>
            <div className="certification-item">
              <div className="certification-icon helal"></div>
              <h3>Helal Gıda</h3>
              <p>İslami Standartlara Uygunluk Belgesi</p>
            </div>
            <div className="certification-item">
              <div className="certification-icon iso9001"></div>
              <h3>ISO 9001</h3>
              <p>Kalite Yönetim Sistemi</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Fabrikamızı Ziyaret Etmek İster misiniz?</h2>
            <p>Üretim tesislerimizi yakından görmek için randevu alabilirsiniz.</p>
            <a href="/fabrika-iletisim" className="btn btn-primary">Ziyaret Randevusu Al</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fabrikamiz; 