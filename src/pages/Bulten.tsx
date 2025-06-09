import React from 'react';
import '../styles/Bulten.css';
import SEO from '../components/SEO';

const Bulten: React.FC = () => {
  const bulletinSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Döner Bank Bülten",
    "description": "Döner Bank'ın medyada yer alan haberleri, videolar ve basın bültenleri.",
    "url": "https://donerbank.com/bulten"
  };

  return (
    <div className="bulten-page">
      <SEO 
        title="Bülten"
        description="Döner Bank bülten sayfası - Medyada yer alan haberlerimiz, videolarımız ve basın bültenlerimiz. Döner Bank'ın güncel gelişmeleri."
        keywords="döner bank haberler, medya, basın bülteni, döner bank videolar, haberler"
        url="https://donerbank.com/bulten"
        schemaData={bulletinSchema}
      />
      <div className="container">
        <section className="bulletin-intro">
          <h1>Haber Bülteni</h1>
          <h2>Medyada nasıl mı görünüyoruz ?</h2>
        </section>
        
        <section className="media-content">
          <div className="youtube-videos">
            <h3>📺 Video Haberler</h3>
            <div className="videos-grid">
              <div className="video-item">
                <div className="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/qiIO8F7rJu8" 
                    title="Döner Bank Video 1"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h4>Döner Bank Haberi</h4>
                  <a href="https://www.youtube.com/watch?v=qiIO8F7rJu8" target="_blank" rel="noopener noreferrer" className="video-link">
                    🔗 YouTube'da İzle
                  </a>
                </div>
              </div>

              <div className="video-item">
                <div className="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/UFevRqJ04qU" 
                    title="Döner Bank Video 2"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h4>Döner Bank Medya Haberi</h4>
                  <a href="https://www.youtube.com/watch?v=UFevRqJ04qU" target="_blank" rel="noopener noreferrer" className="video-link">
                    🔗 YouTube'da İzle
                  </a>
                </div>
              </div>

              <div className="video-item">
                <div className="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/UnUeAFLivhs" 
                    title="Döner Bank Video 3"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h4>Döner Bank Röportajı</h4>
                  <a href="https://www.youtube.com/watch?v=UnUeAFLivhs&pp=ygULZMO2bmVyIGJhbms%3D" target="_blank" rel="noopener noreferrer" className="video-link">
                    🔗 YouTube'da İzle
                  </a>
                </div>
              </div>

              <div className="video-item">
                <div className="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/JJddEtgna9M" 
                    title="Döner Bank Short Video 1"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h4>Döner Bank Kısa Video</h4>
                  <a href="https://www.youtube.com/shorts/JJddEtgna9M" target="_blank" rel="noopener noreferrer" className="video-link">
                    🔗 YouTube'da İzle
                  </a>
                </div>
              </div>

              <div className="video-item">
                <div className="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/Bx0BMEM7gyU" 
                    title="Döner Bank Short Video 2"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h4>Döner Bank Shorts</h4>
                  <a href="https://www.youtube.com/shorts/Bx0BMEM7gyU" target="_blank" rel="noopener noreferrer" className="video-link">
                    🔗 YouTube'da İzle
                  </a>
                </div>
              </div>

              <div className="video-item">
                <div className="video-wrapper">
                  <iframe 
                    src="https://www.youtube.com/embed/-3PN4x5BcL4" 
                    title="Döner Bank Video 4"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-info">
                  <h4>Döner Bank Medya Haberi</h4>
                  <a href="https://www.youtube.com/watch?v=-3PN4x5BcL4" target="_blank" rel="noopener noreferrer" className="video-link">
                    🔗 YouTube'da İzle
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="news-articles">
            <h3>📰 Basın Haberleri</h3>
            <div className="article-item">
              <div className="article-content">
                <h4>Kapalıçarşı'nın En Harbi Lezzet Mekanları</h4>
                <p className="article-excerpt">
                  "Bölgede yiyebileceğiniz en iyi dönercilerden Döner Bank. Döneri ince kesim ve oldukça lezzetli. 
                  Fiyat performans olarak gayet tatminkar. Etinin lezzeti lavaş dürüm ile daha da lezzetli oluyor."
                </p>
                <div className="article-details">
                  <span className="source">📍 Kaynak: Harbi Yiyorum</span>
                  <span className="address">📍 Adres: Mollafenari, Hüseyin Ağa Cami Sk. No:1, 34126 Fatih/İstanbul</span>
                  <span className="phone">📞 Telefon: (0212) 508 62 74</span>
                </div>
                <a 
                  href="https://harbiyiyorum.com/kapalicarsinin-en-harbi-lezzet-mekanlari/?fbclid=IwAR3CTgVJ5e-7FzgORswTCSBKEoudP8lM02weG0ac4YxHu628t0UT7qJFe5c" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="article-link"
                >
                  🔗 Haberin Tamamını Oku
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bulten; 