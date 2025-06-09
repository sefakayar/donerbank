import React from 'react';
import SEO from '../components/SEO';
import '../styles/LegalPages.css';

const CerezPolitikasi: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Çerez Politikası - Döner Bank",
    "description": "Döner Bank web sitesi çerez (cookie) kullanım politikası",
    "url": "https://donerbank.com/cerez-politikasi"
  };

  return (
    <div className="legal-page">
      <SEO 
        title="Çerez Politikası"
        description="Döner Bank web sitesi çerez (cookie) kullanım politikası ve çerez yönetimi."
        keywords="çerez politikası, cookie, döner bank, web sitesi çerezleri"
        url="https://donerbank.com/cerez-politikasi"
        schemaData={schemaData}
      />
      
      <div className="container">
        <div className="legal-content">
          <h1>Çerez Politikası</h1>
          
          <section className="legal-section">
            <p>Bu Çerez Politikası, DönerBank tarafından hazırlanmıştır ve internet sitemiz www.donerbank.com.tr'de hangi çerezlerin kullanıldığını açıklamak amacıyla hazırlanmıştır. Bu politika, Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metnimizin ekini oluşturmaktadır.</p>
          </section>

          <section className="legal-section">
            <h2>Çerez Nedir?</h2>
            <p>Çerezler, tarayıcınız tarafından bilgisayarınızın sabit diskinde saklanan küçük bilgilerdir. Genellikle ziyaret ettiğiniz internet sitesini kullanmanız sırasında size kişiselleştirilmiş bir deneyim sunmak, sunulan hizmetleri geliştirmek ve deneyiminizi iyileştirmek için kullanılır ve bir internet sitesinde gezinirken kullanım kolaylığına katkıda bulunabilir.</p>
          </section>

          <section className="legal-section">
            <h2>Çerez Türleri Nelerdir?</h2>
            <p>Çerezler kullanım ömrü, kullanım amacı ve çerezin sahibi veya çerez yerleştiren tarafa göre çeşitli ayrımlara tabi tutulurlar.</p>

            <h3>Kullanım Ömrüne Göre</h3>
            <ul>
              <li><strong>Oturum Çerezleri:</strong> Bir internet sitesini ziyaret ettiğiniz esnada oluşturulan ve ziyaret süreniz boyunca kullanılan, tarayıcı penceresi kapatılana kadar geçerli olan çerezlerdir. Bu tür çerezlerin amacı, ziyaretinizin sürekliliğini ve güvenliliğini sağlamaktır.</li>
              <li><strong>Kalıcı Çerezler:</strong> Bir internet sitesini ilk ziyaretinizde oluşturulur, kullanım ömrüne bağlı olarak veya siz silinceye kadar sabit diskinizde kalır. Bu tür çerezlerin amacı, ziyaretçilere daha hızlı ve iyi bir hizmet sunarak site işlevselliğini arttırmaktır.</li>
            </ul>

            <h3>Kullanım Amacına Göre Çerezler</h3>
            
            <h4>Zorunlu/Teknik Çerezler</h4>
            <p>Ziyaret ettiğiniz internet sitesinin düzgün şekilde çalışabilmesi için zorunlu çerezlerdir. Bu tür çerezlerin amacı, sitenin çalışmasını sağlamak yoluyla gerekli hizmet sunmaktır. Örneğin, internet sitesinin güvenli bölümlerine erişmeye, özelliklerini kullanabilmeye, üzerinde gezinti yapabilmeye olanak verir.</p>

            <h4>Analitik Çerezler</h4>
            <p>İnternet sitesinin kullanım şekli, ziyaret sıklığı ve sayısı hakkında bilgi toplayan ve ziyaretçilerin siteye nasıl geçtiğini gösterirler. Bu tür çerezlerin kullanım amacı, sitenin işleyiş biçimini iyileştirerek performans arttırmak ve genel eğilim yönünü belirlemektir. Ziyaretçi kimliklerinin tespitini sağlayabilecek verileri içermezler.</p>

            <h4>İşlevsel/Fonksiyonel Çerezler</h4>
            <p>Ziyaretçinin site içerisinde yaptığı seçimleri kaydederek bir sonraki ziyarette hatırlar. Bu tür çerezlerin amacı ziyaretçilere kullanım kolaylığı sağlamaktır. Örneğin, site kullanıcısının ziyaret ettiği her bir sayfada kullanıcı şifresini tekrar girmesini önler.</p>

            <h4>Hedefleme/Reklam Çerezleri</h4>
            <p>Ziyaretçilere sunulan reklamların etkinliğinin ölçülmesi ve kaç kere izlendiğinin hesaplanmasını sağlarlar. Bu tür çerezlerin amacı, ziyaretçilerin ilgi alanlarına özelleştirilmiş reklamların sunulmasıdır.</p>

            <h3>Çerezin Sahibi veya Çerez Yerleştiren Tarafa Göre Çerezler</h3>
            <ul>
              <li><strong>Birinci Parti Çerezler:</strong> Ziyaretçisi olunan internet sitesi tarafından tanımlanan ve sadece bu site tarafından okunabilen çerezlerdir.</li>
              <li><strong>Üçüncü Parti Çerezler:</strong> Ziyaretçisi olunan internet sitesi dışındaki organizasyonlarla tanımlanan ve tanımlandığı hizmete dair siteye raporlama yapılmasını sağlayan çerezlerdir.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>İnternet Sitemizde Kullanılan Çerezler</h2>
            <p>Sitelerimizin kullandığı zorunlu, fonksiyonel ve analitik çerezler:</p>
            <ul>
              <li>İnternet sitesi arayüzünün ve özelliklerinin arzu edildiği gibi kullanılması için zorunludur</li>
              <li>Gelecekte bulunacağınız ziyaretler sırasındaki faaliyetleri hızlandırmanızı sağlar</li>
              <li>İnternet sitesinin ziyaretçiler tarafından nasıl kullanıldığını anlamamızı sağlayarak, istatistiki verileri bir araya getirmemize ve bu veriler doğrultusunda içerik geliştirmemize yardımcı olur</li>
              <li>Hiçbir koşulda kimliğinizi tanımlayabileceğimiz verileri toplamaz, saklamaz ve işlememizi sağlamaz, kişisel veri niteliği taşımaz</li>
              <li>Bilgisayarınıza zarar vermez ve virüs içermez</li>
            </ul>
            
            <p>Hedefleme ve reklamcılık çerezleri ise reklamları kişiselleştirmek ve site trafiğini analiz etmek amacıyla, temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatlerimiz kapsamında ve gerekli hukuki taahhütleri alınmış olarak kullanılmaktadır.</p>
          </section>

          <section className="legal-section">
            <h2>Çerez Tercihleri Nasıl Yönetilir?</h2>
            <p>Çerezlerin kullanımına ilişkin tercihlerinizi değiştirmek ya da çerezleri engellemek veya silmek için tarayıcınızın ayarlarını değiştirmeniz yeterlidir.</p>
            
            <p>Birçok tarayıcı çerezleri kontrol edebilmeniz için size çerezleri kabul etme veya reddetme, yalnızca belirli türdeki çerezleri kabul etme ya da bir internet sitesinin cihazınıza çerez depolamayı talep ettiğinde tarayıcı tarafından uyarılma seçeneği sunar.</p>
            
            <p>Aynı zamanda, daha önce tarayıcınıza kaydedilmiş çerezlerin silinmesi de mümkündür.</p>
            
            <p><strong>Önemli Not:</strong> Çerezleri devre dışı bırakır veya ret ederseniz, bazı tercihleri manuel olarak ayarlamanız gerekebilir, hesabınızı tanıyamayacağımız ve ilişkilendiremeyeceğimiz için internet sitesindeki bazı özellikler ve hizmetler düzgün çalışmayabilir.</p>
          </section>

          <section className="legal-section">
            <h2>Tarayıcı Ayarları</h2>
            <p>Tarayıcınızın ayarlarını aşağıdaki linklerden değiştirebilirsiniz:</p>
            
            <div className="browser-links">
              <ul>
                <li><strong>Google Chrome:</strong> <a href="http://www.google.com/support/chrome/bin/answer.py?hl=en&answer=95647" target="_blank" rel="noopener noreferrer">Chrome Çerez Ayarları</a></li>
                <li><strong>Internet Explorer:</strong> <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">IE Çerez Ayarları</a></li>
                <li><strong>Mozilla Firefox:</strong> <a href="http://support.mozilla.com/en-US/kb/Cookies" target="_blank" rel="noopener noreferrer">Firefox Çerez Ayarları</a></li>
                <li><strong>Opera:</strong> <a href="http://www.opera.com/browser/tutorials/security/privacy/" target="_blank" rel="noopener noreferrer">Opera Çerez Ayarları</a></li>
                <li><strong>Safari:</strong> <a href="https://support.apple.com/kb/ph19214" target="_blank" rel="noopener noreferrer">Safari Çerez Ayarları</a></li>
                <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Edge Çerez Ayarları</a></li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2>Daha Fazla Bilgi</h2>
            <p>Çerezlerin nasıl yerleştirildiği, nasıl görüleceği ve nasıl yönetilip silineceği dahil olmak üzere çerezler hakkında daha fazla bilgi almak için aşağıdaki siteleri ziyaret edebilirsiniz:</p>
            <ul>
              <li><a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a></li>
              <li><a href="http://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a></li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>İletişim</h2>
            <p>Bu Çerez Politikası ile ilgili tüm soru ve görüşlerinizi bize iletmek için aşağıdaki iletişim bilgilerini kullanabilirsiniz:</p>
            
            <div className="contact-info">
              <p><strong>DönerBank</strong></p>
              <p><strong>Adres:</strong> İkitelli Organize Sanayi Bölgesi Mutsan Mutfakçılar San. Sit. M1 Blok No: 4/6 Başakşehir / İSTANBUL</p>
              <p><strong>Telefon:</strong> 0212 508 62 74</p>
              <p><strong>E-posta:</strong> info@donerbank.com.tr</p>
            </div>
          </section>

          <section className="legal-section">
            <p>KVK Kanunu kapsamında "Veri Sorumlusu" sıfatıyla bildiririz.</p>
            <p><strong>Son Güncelleme:</strong> {new Date().toLocaleDateString('tr-TR')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CerezPolitikasi; 