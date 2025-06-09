import React, { useState } from 'react';
import kurumsal from '../images/kurumsal.png';
import banner from '../images/banner.png';
import ctaBackground from '../images/cta-section.png';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      content: "Döner Bank ile franchise ortaklığımız başladığından beri işlerimiz %40 büyüdü. Sundukları destek ve ürün kalitesi gerçekten mükemmel. Franchise anlaşması çok adil ve şeffaf.",
      author: "Mehmet Yılmaz",
      position: "Kadıköy Franchise Ortağı",
      location: "İstanbul"
    },
    {
      content: "25 yıldır döner sektöründeyim ama Döner Bank'ın iş ortaklığı modeli gerçekten başka. Kalite standartları yüksek, kar marjları makul ve sürekli destek alıyoruz.",
      author: "Ahmet Özkan", 
      position: "Beşiktaş Franchise Ortağı",
      location: "İstanbul"
    },
    {
      content: "Döner Bank franchise sistemi çok profesyonel. Eğitimlerden pazarlama desteğine kadar her konuda yanımızdalar. İlk yılda yatırımımızı çıkardık.",
      author: "Fatma Demir",
      position: "Üsküdar Franchise Ortağı", 
      location: "İstanbul"
    },
    {
      content: "Franchise anlaşmasındaki şartlar çok net ve adil. Ürün kalitesi hiç değişmiyor, müşteri memnuniyeti yüksek. Döner Bank ile çalışmak gerçekten karlı.",
      author: "Osman Kaya",
      position: "Şişli Franchise Ortağı",
      location: "İstanbul"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Döner Bank",
    "description": "Kurumsal Döner Ticareti Uzmanı - Franchising ve Toptan Döner Satışı",
    "url": "https://donerbank.com",
    "logo": "https://donerbank.com/images/db_logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Küçük Sanayi Sitesi D-Blok No: 35",
      "addressLocality": "Tekirdağ",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-850-255-36-63",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://www.facebook.com/donerbankk/",
      "https://www.instagram.com/donerbank/",
      "https://www.youtube.com/@donerbank8609"
    ],
    "foundingDate": "1992",
    "numberOfEmployees": "100+",
    "industry": "Food Service",
    "keywords": "döner, franchising, döner üretimi, kurumsal döner, tekirdağ döner"
  };

  return (
    <div className="home-page">
      <SEO 
        title="Ana Sayfa"
        description="Döner Bank - Kurumsal Döner Ticareti Uzmanı. 1992'den beri kaliteli döner üretimi, franchising fırsatları ve toptan satış hizmetleri. Tekirdağ merkezli, Türkiye geneli hizmet."
        keywords="döner bank, döner franchising, döner üretimi, kurumsal döner, tekirdağ döner, döner fabrikası, franchise fırsatları"
        url="https://donerbank.com"
        schemaData={organizationSchema}
      />
      <section className="hero-section">
        <div className="hero-overlay">
          <img src={banner} alt="Döner Bank Banner" className="hero-banner" />
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1>DÖNER BANK</h1>
            <p className="tagline">Geleneksel Lezzetin Kurumsal Adresi</p>
            <div className="hero-buttons">
              <a href="/franchising" className="btn btn-primary">Franchising Fırsatları</a>
              <a href="/fabrikamiz" className="btn btn-outline">Fabrikamızı Keşfedin</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon feature-franchise">
                <i></i>
              </div>
              <h3>FRANCHISE OLANAKLARI</h3>
              <p>Siz de kendi şubelerinizi bugün kurabilirsiniz</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon feature-economic">
                <i></i>
              </div>
              <h3>EKONOMİK VE KALİTELİ</h3>
              <p>Fiyat - Kalite oranı en uygun Döner üreticisi</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon feature-delivery">
                <i></i>
              </div>
              <h3>ANINDA TESLİMAT</h3>
              <p>Hizmetinizdeki 50+ araç ile hızlı teslimat</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon feature-discount">
                <i></i>
              </div>
              <h3>GÜNLÜK İNDİRİMLER</h3>
              <p>Şubelerimizde %50'ye varan indirim fırsatları</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={kurumsal} alt="Döner Bank Kurumsal" className="about-image-real" />
            </div>
            <div className="about-content">
              <h2>Hakkımızda</h2>
              <p className="about-subtitle">Kalitede süreklilik, güven, uygun fiyat, disiplinli çalışma</p>
              <p>DÖNERBANK; KALİTEDE SÜREKLİLİK, GÜVEN, UYGUN FİYAT, DİSİPLİNLİ ÇALIŞMA, İŞ BÖLÜMÜ, KURUM KÜLTÜRÜ, HİJYEN, SAĞLIK KAVRAMLARINI BÜNYESİNDE İÇSELLEŞTİRMİŞTİR.</p>
              <p>1992 yılında Laleli'de mütevazı satış noktası ile başlayan hizmet maceramız; 1997 yılında Kapalı Çarşı'da açılan şubemizle tat olgusunu tüketiciye sunmuştur. Gelen talepler doğrultusunda 2006 yılında Mercan bölgesinde faaliyet gösteren şubemizle, halkımıza geleneksel lezzetimizi sunmaya devam ettik.</p>
              <a href="/kurumsal" className="btn btn-text">Daha Fazla Bilgi <span className="arrow-right">→</span></a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Hizmetlerimiz</h2>
            <p>Döner Bank olarak müşterilerimize ve iş ortaklarımıza sunduğumuz hizmetler</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon wholesale"></div>
              <h3>Toptan Döner Satışı</h3>
              <p>Restoran ve işletmeler için toptan döner tedariği sağlıyoruz.</p>
              <a href="/fabrika-iletisim" className="service-link">Detaylı Bilgi <span className="arrow-right">→</span></a>
            </div>
            <div className="service-card">
              <div className="service-icon franchise"></div>
              <h3>Franchising</h3>
              <p>Döner Bank markası altında kendi işletmenizi açma fırsatı.</p>
              <a href="/franchising" className="service-link">Detaylı Bilgi <span className="arrow-right">→</span></a>
            </div>
            <div className="service-card">
              <div className="service-icon corporate"></div>
              <h3>Kurumsal</h3>
              <p>Döner Bank'ın kurumsal değerleri, vizyonu ve misyonu hakkında bilgi edinin.</p>
              <a href="/kurumsal" className="service-link">Detaylı Bilgi <span className="arrow-right">→</span></a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>İş Ortaklarımız Ne Diyor?</h2>
            <p>Franchise ortaklarımızın Döner Bank deneyimleri</p>
          </div>
          <div className="testimonials-slider">
            <div className="slider-container">
              <button className="slider-btn prev-btn" onClick={prevTestimonial}>
                <span>‹</span>
              </button>
              
              <div className="testimonial-item active">
                <div className="testimonial-content">
                  <p>"{testimonials[currentTestimonial].content}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h4>{testimonials[currentTestimonial].author}</h4>
                    <p>{testimonials[currentTestimonial].position}</p>
                    <span className="location">{testimonials[currentTestimonial].location}</span>
                  </div>
                </div>
              </div>
              
              <button className="slider-btn next-btn" onClick={nextTestimonial}>
                <span>›</span>
              </button>
            </div>
            
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="cta-background">
          <img src={ctaBackground} alt="Döner Bank CTA" className="cta-image" />
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Döner Bank Ailesine Katılın</h2>
            <p>Franchising fırsatlarımız hakkında detaylı bilgi almak için hemen başvurun.</p>
            <a href="/franchising" className="btn btn-large">Franchising Başvurusu Yap</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 