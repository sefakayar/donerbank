import React from 'react';
import SEO from '../components/SEO';
import '../styles/LegalPages.css';

const KullanimKosullari: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kullanım Koşulları - Döner Bank",
    "description": "Döner Bank web sitesi kullanım koşulları ve şartları",
    "url": "https://donerbank.com/kullanim-kosullari"
  };

  return (
    <div className="legal-page">
      <SEO 
        title="Kullanım Koşulları"
        description="Döner Bank web sitesi kullanım koşulları, şartları ve kullanıcı yükümlülükleri."
        keywords="kullanım koşulları, şartlar, döner bank, web sitesi kullanımı"
        url="https://donerbank.com/kullanim-kosullari"
        schemaData={schemaData}
      />
      
      <div className="container">
        <div className="legal-content">
          <h1>Kullanım Koşulları</h1>
          
          <section className="legal-section">
            <h2>Genel Hükümler</h2>
            <p>Bu kullanım koşulları, DönerBank'a ait www.donerbank.com.tr internet sitesinin kullanımına ilişkin şartları düzenlemektedir. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız.</p>
          </section>

          <section className="legal-section">
            <h3>1. Tanımlar</h3>
            <ul>
              <li><strong>Site:</strong> www.donerbank.com.tr internet sitesi</li>
              <li><strong>Şirket:</strong> DönerBank</li>
              <li><strong>Kullanıcı:</strong> Siteyi ziyaret eden ve/veya kullanan gerçek veya tüzel kişiler</li>
              <li><strong>İçerik:</strong> Sitede yer alan tüm metin, görsel, ses, video ve diğer materyaller</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>2. Sitenin Kullanımı</h3>
            <p>Bu site, DönerBank'ın ürün ve hizmetleri hakkında bilgi vermek, franchising fırsatları sunmak ve müşterilerle iletişim kurmak amacıyla oluşturulmuştur.</p>
            
            <h4>Kullanıcı Yükümlülükleri:</h4>
            <ul>
              <li>Siteyi yalnızca yasal amaçlar için kullanmak</li>
              <li>Sitenin güvenliğini tehlikeye atacak eylemlerden kaçınmak</li>
              <li>Başkalarının haklarını ihlal edecek davranışlarda bulunmamak</li>
              <li>Yanıltıcı veya yanlış bilgi vermemek</li>
              <li>Spam, virüs veya zararlı yazılım göndermemek</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>3. Fikri Mülkiyet Hakları</h3>
            <p>Sitede yer alan tüm içerik, tasarım, logo, marka, metin, görsel ve diğer materyaller DönerBank'ın fikri mülkiyeti olup, telif hakları ve diğer fikri mülkiyet hakları ile korunmaktadır.</p>
            
            <p>Bu içeriklerin DönerBank'ın yazılı izni olmaksızın kopyalanması, çoğaltılması, dağıtılması, değiştirilmesi veya ticari amaçlarla kullanılması yasaktır.</p>
          </section>

          <section className="legal-section">
            <h3>4. Gizlilik ve Kişisel Veriler</h3>
            <p>Kişisel verilerinizin işlenmesi ve korunması hakkında detaylı bilgi için <a href="/gizlilik-politikasi">Gizlilik Politikamızı</a> inceleyiniz.</p>
            
            <p>Site kullanımı sırasında toplanan veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında işlenmektedir.</p>
          </section>

          <section className="legal-section">
            <h3>5. Çerezler (Cookies)</h3>
            <p>Sitemizde kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanılmaktadır. Çerez kullanımı hakkında detaylı bilgi için <a href="/cerez-politikasi">Çerez Politikamızı</a> inceleyiniz.</p>
          </section>

          <section className="legal-section">
            <h3>6. Üçüncü Taraf Bağlantıları</h3>
            <p>Sitemizde üçüncü taraf web sitelerine bağlantılar bulunabilir. Bu bağlantılar yalnızca kullanıcı kolaylığı için sağlanmış olup, DönerBank bu sitelerin içeriğinden sorumlu değildir.</p>
          </section>

          <section className="legal-section">
            <h3>7. Sorumluluk Sınırlaması</h3>
            <p>DönerBank, sitenin kesintisiz ve hatasız çalışacağını garanti etmez. Teknik arızalar, bakım çalışmaları veya diğer nedenlerle sitede kesintiler yaşanabilir.</p>
            
            <p>Site kullanımından doğabilecek doğrudan veya dolaylı zararlardan DönerBank sorumlu tutulamaz.</p>
          </section>

          <section className="legal-section">
            <h3>8. Franchising ve İş Ortaklığı</h3>
            <p>Sitede yer alan franchising bilgileri genel bilgilendirme amaçlıdır. Kesin şartlar ve koşullar için DönerBank ile doğrudan iletişime geçilmelidir.</p>
            
            <p>Franchising başvuruları değerlendirme sürecindedir ve DönerBank başvuruları kabul etme veya reddetme hakkını saklı tutar.</p>
          </section>

          <section className="legal-section">
            <h3>9. Ürün ve Hizmet Bilgileri</h3>
            <p>Sitede yer alan ürün ve hizmet bilgileri güncel tutulmaya çalışılmakla birlikte, değişiklik gösterebilir. Kesin bilgiler için DönerBank ile iletişime geçiniz.</p>
            
            <p>Fiyat bilgileri değişiklik gösterebilir ve bağlayıcı değildir.</p>
          </section>

          <section className="legal-section">
            <h3>10. Değişiklikler</h3>
            <p>DönerBank, bu kullanım koşullarını önceden haber vermeksizin değiştirme hakkını saklı tutar. Güncel koşullar sitede yayınlanacaktır.</p>
            
            <p>Değişikliklerden sonra siteyi kullanmaya devam etmeniz, yeni koşulları kabul ettiğiniz anlamına gelir.</p>
          </section>

          <section className="legal-section">
            <h3>11. Uygulanacak Hukuk ve Yetki</h3>
            <p>Bu kullanım koşulları Türkiye Cumhuriyeti hukukuna tabidir. Bu koşullardan doğacak uyuşmazlıklarda İstanbul mahkemeleri ve icra müdürlükleri yetkilidir.</p>
          </section>

          <section className="legal-section">
            <h3>12. İletişim</h3>
            <p>Bu kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz:</p>
            
            <div className="contact-info">
              <p><strong>DönerBank</strong></p>
              <p><strong>Adres:</strong> İkitelli Organize Sanayi Bölgesi Mutsan Mutfakçılar San. Sit. M1 Blok No: 4/6 Başakşehir / İSTANBUL</p>
              <p><strong>Telefon:</strong> 0212 508 62 74</p>
              <p><strong>E-posta:</strong> info@donerbank.com.tr</p>
            </div>
          </section>

          <section className="legal-section">
            <p><strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default KullanimKosullari; 