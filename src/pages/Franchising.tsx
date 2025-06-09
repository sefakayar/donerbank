import React from 'react';
import '../styles/Franchising.css';
import SEO from '../components/SEO';

const Franchising: React.FC = () => {
  const franchiseSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Döner Bank Franchising",
    "description": "Döner Bank franchise fırsatları - Güçlü marka, kaliteli ürün ve tam destek ile kendi işinizin sahibi olun.",
    "provider": {
      "@type": "Organization",
      "name": "Döner Bank"
    },
    "areaServed": "TR",
    "serviceType": "Franchise",
    "url": "https://donerbank.com/franchising"
  };

  return (
    <div className="franchising-page">
      <SEO 
        title="Franchising"
        description="Döner Bank franchise fırsatları - 30+ yıllık deneyim, güçlü marka değeri ve tam destek ile kendi döner işletmenizi açın. Uygun yatırım maliyeti ve hızlı geri dönüş."
        keywords="döner bank franchise, franchising fırsatları, döner franchise, iş ortaklığı, yatırım fırsatları, döner işletmesi"
        url="https://donerbank.com/franchising"
        schemaData={franchiseSchema}
      />
      <div className="container">
        <h1>Franchising</h1>
        
        <section className="franchising-intro">
          <p>Dönerbankımız tüm halkımıza kendine has olan döneri sunma düşüncesiyle "kazandır-kazan" prensibiyle yatırımcıları franchising ağımıza katılmaya davet ediyoruz. Yatırımcılarımızdan Franchise talebi için ön bilgi almak amacı ile bir form hazırladık.</p>
          <p>* Bu form ile birlikte sizlere mail yada telefon yoluyla en fazla bir hafta içerisinde geri dönüş sağlanacaktır.</p>
          <p>* Değerlendirmeye müteakip şirket genel merkezimizde birebir görüşmeler yapılacaktır.</p>
        </section>
        
        <section className="why-franchise">
          <h2>Neden Döner Bank Franchising?</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <h3>Güçlü Marka</h3>
              <p>Sektörde tanınmış ve güven duyulan bir marka ile iş yapma avantajı.</p>
            </div>
            <div className="advantage-card">
              <h3>Kaliteli Ürün</h3>
              <p>Kendi üretim tesislerimizden tedarik edilen, standart ve yüksek kaliteli ürünler.</p>
            </div>
            <div className="advantage-card">
              <h3>Eğitim Desteği</h3>
              <p>İşletme yönetimi ve döner ustası yetiştirme konusunda kapsamlı eğitim programları.</p>
            </div>
            <div className="advantage-card">
              <h3>Pazarlama Desteği</h3>
              <p>Ulusal ve yerel pazarlama kampanyaları ile sürekli destek.</p>
            </div>
            <div className="advantage-card">
              <h3>Operasyonel Destek</h3>
              <p>İşletme kurulumundan günlük operasyonlara kadar her aşamada profesyonel destek.</p>
            </div>
            <div className="advantage-card">
              <h3>Uygun Yatırım Maliyeti</h3>
              <p>Sektör ortalamasının altında başlangıç yatırımı ve hızlı geri dönüş.</p>
            </div>
          </div>
        </section>
        
        <section className="franchise-process">
          <h2>Franchising Süreci</h2>
          <ol className="process-steps">
            <li>
              <h3>Başvuru</h3>
              <p>Web sitemiz üzerinden ön başvuru formunu doldurarak süreci başlatabilirsiniz.</p>
            </li>
            <li>
              <h3>Değerlendirme</h3>
              <p>Başvurunuz ekibimiz tarafından değerlendirilir ve sizinle iletişime geçilir.</p>
            </li>
            <li>
              <h3>Tanışma Toplantısı</h3>
              <p>Karşılıklı beklentilerin ve iş modelinin detaylı olarak görüşüldüğü toplantı.</p>
            </li>
            <li>
              <h3>Lokasyon Seçimi</h3>
              <p>Uzman ekibimiz ile birlikte işletmeniz için en uygun lokasyonu belirleme.</p>
            </li>
            <li>
              <h3>Anlaşma</h3>
              <p>Franchising anlaşmasının imzalanması ve sürecin resmi olarak başlaması.</p>
            </li>
            <li>
              <h3>Eğitim</h3>
              <p>İşletme sahibi ve personel için kapsamlı eğitim programı.</p>
            </li>
            <li>
              <h3>Açılış</h3>
              <p>İşletmenizin açılışı ve Döner Bank ailesine katılımınız.</p>
            </li>
          </ol>
        </section>
        

        
        <section className="application-form">
          <h2>Franchise Başvuru Formu</h2>
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
              <label htmlFor="city">Düşünülen Şehir/İlçe</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="investment">Yatırım Bütçeniz</label>
              <select id="investment" name="investment" required>
                <option value="">Seçiniz</option>
                <option value="300-500">300.000 TL - 500.000 TL</option>
                <option value="500-750">500.000 TL - 750.000 TL</option>
                <option value="750+">750.000 TL ve üzeri</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea id="message" name="message" rows={4}></textarea>
            </div>
            <button type="submit" className="submit-btn">Başvuru Yap</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Franchising; 