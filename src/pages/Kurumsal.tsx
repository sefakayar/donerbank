import React, { useState } from 'react';
import '../styles/Kurumsal.css';
import SEO from '../components/SEO';
import kurumsal from '../images/kurumsal.png';

// Belge görselleri
import isletmeonay from '../images/belge/isletmeonay.webp';
import isletmeonay2 from '../images/belge/isletmeonay2.webp';
import isletmeonay3 from '../images/belge/isletmeonay3.webp';
import isletmeonay4 from '../images/belge/isletmeonay4.webp';
import isletmeonay5 from '../images/belge/isletmeonay5.webp';
import isletmeonay6 from '../images/belge/isletmeonay6.webp';
import isletmeonay7 from '../images/belge/isletmeonay7.webp';
import markatescil from '../images/belge/markatescil.webp';
import markatescil2 from '../images/belge/markatescil2.webp';
import sanayisicil from '../images/belge/sanayisicil.webp';

const Kurumsal: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', title: '' });
  
  const belgeler = [
    { src: isletmeonay, title: "İşletme Onayı" },
    { src: isletmeonay2, title: "İşletme Onayı 2" },
    { src: isletmeonay3, title: "İşletme Onayı 3" },
    { src: isletmeonay4, title: "İşletme Onayı 4" },
    { src: isletmeonay5, title: "İşletme Onayı 5" },
    { src: isletmeonay6, title: "İşletme Onayı 6" },
    { src: isletmeonay7, title: "İşletme Onayı 7" },
    { src: markatescil, title: "Marka Tescil" },
    { src: markatescil2, title: "Marka Tescil 2" },
    { src: sanayisicil, title: "Sanayi Sicil" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % belgeler.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + belgeler.length) % belgeler.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openModal = (belge: { src: string; title: string }) => {
    setModalImage(belge);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Scroll'u engelle
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage({ src: '', title: '' });
    document.body.style.overflow = 'unset'; // Scroll'u geri aç
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Döner Bank Hakkında",
    "description": "Döner Bank'ın kurumsal değerleri, vizyonu, misyonu ve 1992'den günümüze uzanan başarı hikayesi.",
    "url": "https://donerbank.com/kurumsal",
    "mainEntity": {
      "@type": "Organization",
      "name": "Döner Bank",
      "foundingDate": "1992",
      "foundingLocation": "Laleli, İstanbul",
      "description": "Kalitede süreklilik, güven, uygun fiyat, disiplinli çalışma prensiplerine dayanan döner üretim şirketi"
    }
  };

  return (
    <div className="kurumsal-page">
      <SEO 
        title="Kurumsal"
        description="Döner Bank hakkında bilgi edinin. 1992'den beri kalitede süreklilik, güven ve uygun fiyat prensiplerimizle hizmet veriyoruz. Kurumsal değerlerimiz, vizyonumuz ve misyonumuz."
        keywords="döner bank hakkında, kurumsal değerler, döner bank tarihi, vizyon misyon, kalite standartları"
        url="https://donerbank.com/kurumsal"
        schemaData={aboutPageSchema}
      />
      <section className="kurumsal-hero">
        <div className="kurumsal-hero-overlay"></div>
        <div className="container">
          <div className="kurumsal-hero-content">
            <h1>Kurumsal</h1>
            <p>Döner Bank'ın kurumsal değerleri, vizyonu ve misyonu</p>
          </div>
        </div>
      </section>
      
      <div className="container">
        <section className="kurumsal-about">
          <div className="kurumsal-about-grid">
            <div className="kurumsal-about-image">
              <img src={kurumsal} alt="Döner Bank Kurumsal" className="kurumsal-image" />
            </div>
            <div className="kurumsal-about-content">
              <h2>Hakkımızda</h2>
              <p>DÖNERBANK; KALİTEDE SÜREKLİLİK, GÜVEN, UYGUN FİYAT, DİSİPLİNLİ ÇALIŞMA, İŞ BÖLÜMÜ, KURUM KÜLTÜRÜ, HİJYEN, SAĞLIK KAVRAMLARINI BÜNYESİNDE İÇSELLEŞTİRMİŞTİR.</p>
              <p>1992 yılında Laleli'de mütevazı satış noktası ile başlayan hizmet maceramız; 1997 yılında Kapalı Çarşı'da açılan şubemizle tat olgusunu tüketiciye sunmuştur. Gelen talepler doğrultusunda 2006 yılında Mercan bölgesinde faaliyet gösteren şubemizle, halkımıza geleneksel lezzetimizi sunmaya devam ettik.</p>
              <p>Dönerbank'ımız tüm halkımıza kendine has olan döneri sunma düşüncesiyle modern üretim tesisini hizmete açtı. Kaliteli hammaddeyi modern tesislerimizde temizlik, hijyen ve insan sağlığını ön planda tutarak, eğitimli ve profesyonel kadromuzla güvenli ve sistemli bir çalışma ile işleyerek tüketicinin lezzet olgusuna hitap etmekteyiz.</p>
              <p>Koruduğumuz istikrarlı çizgiyi muhafaza ederek müşteri memnuniyetini sürekli hale getirme çizgisinde olmayı sürdürmekteyiz. Hızla değişen dünyamızda gıda kaynaklı sağlık problemlerinin artması sebebiyle insan sağlığına ve yaşamına katkıyı ön planda tutmaktayız.</p>
            </div>
          </div>
        </section>
        
        <section className="kurumsal-vision-mission">
          <div className="kurumsal-mission">
            <h2>MİSYONUMUZ</h2>
            <p>Kalitede süreklilik, güven, uygun fiyat, disiplinli çalışma, iş bölümü, kurum kültürü, hijyen, sağlık kavramlarını bünyesinde içselleştirmek.</p>
          </div>
          
          <div className="kurumsal-vision">
            <h2>VİZYONUMUZ</h2>
            <p>25 yıllık birikimiyle bünyesinde barındırdığı lezzetli ve kaliteli ürünleri Türkiye'nin her bölgesine ulaştırmak ve ülkemizin en büyük döner tedarikçisi olmak.</p>
          </div>
        </section>
        
        <section className="kurumsal-company-history">
          <h2>Şirket Tarihçemiz</h2>
          <div className="kurumsal-timeline">
            <div className="kurumsal-timeline-item">
              <h3>1992</h3>
              <p>Laleli'de mütevazı satış noktası ile başlayan hizmet maceramız başladı.</p>
            </div>
            <div className="kurumsal-timeline-item">
              <h3>1997</h3>
              <p>Kapalı Çarşı'da açılan şubemizle tat olgusunu tüketiciye sunmaya başladık.</p>
            </div>
            <div className="kurumsal-timeline-item">
              <h3>2006</h3>
              <p>Mercan bölgesinde faaliyet gösteren şubemizle, halkımıza geleneksel lezzetimizi sunmaya devam ettik.</p>
            </div>
            <div className="kurumsal-timeline-item">
              <h3>Günümüz</h3>
              <p>Modern üretim tesisimizle tüm halkımıza kendine has olan döneri sunma düşüncesiyle hizmet vermeye devam ediyoruz.</p>
            </div>
          </div>
        </section>
        
        <section className="kurumsal-quality">
          <h2>Kalite Politikamız</h2>
          <p>"Kurumsal Mükemmellik Politikamız" ışığında "Önce İnsan Sağlığı" yaklaşımı ile ürün ve hizmetlerimizin, müşteri beklentilerini karşılaması; helal, güvenli, kaliteli ve lezzetli olmasını sağlamak için:</p>
          <ul>
            <li>Üretim ve hizmet sunumunun her aşamasında modern üretim teknikleri, etkin hijyen uygulamaları, uygun çevre ve emniyet şartlarını sağlamayı</li>
            <li>Ürün ve hizmetlerimizde gıda güvenliği şartlarını dikkate alarak riskleri kaynağında önlemeyi</li>
            <li>Tanımlanmış ve ölçülebilir gıda güvenlik şartlarına uygun; fiziksel, kimyasal veya mikrobiyolojik açıdan herhangi bir bulaşma olmamasını</li>
            <li>Gıda güvenliği ile ilgili konularda; gıda zincirinde yer alan tedarikçi, müşteri ve ilgili birimler arasında etkin sürdürülebilir bir iletişim ağı kurmayı</li>
            <li>Tüm ürün ve hizmetlerimizi ulusal ve uluslararası gıda güvenliği standartlarına uygun olarak sağlamayı ve geliştirmeyi taahhüt ederiz</li>
          </ul>
        </section>
        
        <section className="kurumsal-values">
          <h2>Değerlerimiz</h2>
          <ul>
            <li>Kalitede süreklilik</li>
            <li>Güven</li>
            <li>Uygun fiyat</li>
            <li>Disiplinli çalışma</li>
            <li>İş bölümü</li>
            <li>Kurum kültürü</li>
            <li>Hijyen</li>
            <li>Sağlık</li>
          </ul>
        </section>

        <section className="kurumsal-documents">
          <h2>Belgelerimiz ve Sertifikalarımız</h2>
          <p>Döner Bank olarak sahip olduğumuz resmi belgeler ve kalite sertifikalarımız</p>
          
          <div className="documents-slider">
            <div className="slider-container">
              <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {belgeler.map((belge, index) => (
                  <div key={index} className="slide">
                    <div className="document-card" onClick={() => openModal(belge)}>
                      <img src={belge.src} alt={belge.title} className="document-image" />
                      <div className="document-overlay">
                        <span className="zoom-icon">🔍</span>
                        <span className="zoom-text">Büyütmek için tıklayın</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="slider-btn prev-btn" onClick={prevSlide}>
              <span>‹</span>
            </button>
            <button className="slider-btn next-btn" onClick={nextSlide}>
              <span>›</span>
            </button>
            
            <div className="slider-dots">
              {belgeler.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <img src={modalImage.src} alt={modalImage.title} className="modal-image" />
            <div className="modal-title">{modalImage.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kurumsal; 