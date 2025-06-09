import React from 'react';
import SEO from '../components/SEO';
import '../styles/LegalPages.css';

const GizlilikPolitikasi: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Gizlilik Politikası - Döner Bank",
    "description": "Döner Bank Gizlilik Politikası ve Kişisel Verilerin Korunması Kanunu Aydınlatma Metni",
    "url": "https://donerbank.com/gizlilik-politikasi"
  };

  return (
    <div className="legal-page">
      <SEO 
        title="Gizlilik Politikası"
        description="Döner Bank Gizlilik Politikası ve Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni."
        keywords="gizlilik politikası, kvkk, kişisel verilerin korunması, döner bank"
        url="https://donerbank.com/gizlilik-politikasi"
        schemaData={schemaData}
      />
      
      <div className="container">
        <div className="legal-content">
          <h1>Gizlilik Politikası</h1>
          
          <section className="legal-section">
            <h2>DÖNER BANK 6698 SAYILI KİŞİSEL VERİLERİN KORUNMASI KANUNU GEREĞİNCE AYDINLATMA METNİ</h2>
            
            <p>DönerBank bünyesindeki kişisel veriler, DönerBank'ın koruması altındadır. DönerBank 6698 sayılı Kişisel Verilerin Korunması Kanunu çerçevesinde kişisel verilerin güvenli şekilde saklanması ve hukuka uygun olarak işlenmesini sağlamak için teknolojik ve alt yapısal imkanlarını kullanarak, gerekli teknik ve idari tedbirleri almaktadır.</p>
            
            <p>Kişisel veri olarak kabul edilen veriler DönerBank tarafından aşağıda belirtilen haller ve bunlarla sınırlı olmaksızın Kanuna ve ilgili mevzuata uygun olarak işlenebilmektedir. Kanun kapsamında kişisel verileri işlenen gerçek kişiler, aşağıdaki metni inceleyerek, DönerBank tarafından veri sorumlusu sıfatıyla işlenebilecek olan kişisel veriler ve bunların işlenme amaçları, aktarılabileceği kişiler, toplanma yöntemi ve hukuki sebebi ile söz konusu kişisel verilere ilişkin hakları hakkında bilgi edinebilir.</p>
          </section>

          <section className="legal-section">
            <h3>Kişisel Veriler</h3>
            <p>Kişisel veriler, kimliğinizi belirleyen ya da belirlenebilir kılan bilgiler anlamına gelmektedir. Şirketimiz tarafından işlenebilecek kişisel verileriniz, bunlarla sınırlı olmamak üzere, aşağıda belirtilmiştir:</p>
            
            <ul>
              <li><strong>Kimlik ve İletişim Bilgileri:</strong> TCKN, ad, soyad, doğum yeri ve tarihi, medeni durum, cinsiyet, kimlik belgesi örneği ve bunlar gibi kimlik bilgileriniz ile kimliğinizi belirli kılabilecek sair bilgiler; adres, telefon/faks numarası, e-posta adresi gibi iletişim bilgileriniz</li>
              <li><strong>Cari Hesap Bilgileri ve Satış Kanal Bilgileriniz:</strong> Ürün ve hizmetlerin kullanılmasına ve tarafınızla irtibat kurulması için alınan bilgileriniz, vergi ve TC Kimlik numaralarınız, adresleriniz, telefon numaralarınız, e-postalarınız, mektup ve sair çağrı merkezi standartları gereği tutulan sesli görüşme kayıtlarınız satış kanallarındaki talep ve işlem bilgileri gibi satış aracılığı ile elde edilen verileriniz</li>
              <li><strong>Site üzerinden alınan bilgileriniz</strong></li>
              <li><strong>Ödeme, Banka ve Risk Bilgileri:</strong> Cari hesap açılması için gereken risk değerlendirilmesine esas banka bilgileriniz, kredi notu bilgileri ile banka ve kredi kart bilgileriniz, geçmiş dönem bilgileriniz</li>
              <li>Fabrika, restoran, depo, dış ofis ziyaretlerinizde ziyaretçi sistemimize yapılan kayıtlardan, misafirlerimizin kullanımına sunduğumuz Wi-Fi altyapısından hizmet alabilmek için giriş yaptığınız ara yüzümüzden, kamera kayıt sistemlerimizden toplanabilmektedir ve işlenebilmektedir.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>1- Veri Sorumlusu Hakkında</h3>
            <p>KVK Kanunu uyarınca, DönerBank olarak, Veri Sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında; hukuka ve dürüstlük kurallarına uygun bir şekilde işleyebilecek, kaydedebilecek, saklayabilecek, sınıflandırabilecek, güncelleyebilecek ve mevzuatın izin verdiği hallerde ve/veya işlendikleri amaçla sınırlı olarak 3. kişilere veya yurt dışına açıklayabilecek/aktarabilecektir.</p>
          </section>

          <section className="legal-section">
            <h3>2- Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları</h3>
            <p>Kişisel verileriniz, Şirketimiz tarafından sağlanan hizmet ve Şirketimizin ticari faaliyetlerine bağlı olarak değişkenlik gösterebilmekle birlikte; otomatik ya da otomatik olmayan yöntemlerle, onay ve/veya imzanızla tanzim edilen işlemlere ilişkin tüm sözleşmeler/bilgilendirme formları ve sair belgelerle, Şirketimiz birimleri ve bölümleri, internet sitesi, sosyal medya mecraları, mobil uygulamalar ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilecektir.</p>
            
            <p>Toplanan kişisel verileriniz, KVK Kanunu tarafından öngörülen temel ilkelere uygun olarak ve KVK Kanunu'nun 5. ve 6. maddelerinde belirtilen Kişisel Veri İşleme şartları ve amaçları dahilinde, DönerBank tarafından aşağıda yer alan amaçlarla işlenebilmektedir:</p>
            
            <ul>
              <li>Şirketin insan kaynakları politikaları ve süreçlerinin planlanması ve icra edilmesi</li>
              <li>Şirket tarafından sunulan ürün ve hizmetlerden ilgili kişileri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması ve ilgili iş süreçlerinin yürütülmesi</li>
              <li>Şirket tarafından sunulan ürün ve hizmetlerin ilgili kişilerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek ilgili kişilere önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması ve icrası</li>
              <li>Şirket tarafından yürütülen ticari faaliyetlerin gerçekleştirilmesi için ilgili iş birimlerimiz tarafından gerekli çalışmaların yapılması ve buna bağlı iş süreçlerinin yürütülmesi</li>
              <li>Şirketin ticari ve/veya iş stratejilerinin planlanması ve icrası</li>
              <li>Şirketin ve Şirketle iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini</li>
              <li>Ürün ve hizmetlerin tanıtım ve pazarlaması, bunlara ilişkin sizinle iletişime geçilmesi, kampanya, indirim, fayda, koşul, ücretlendirme gibi hususlardan haberdar edilmeniz</li>
              <li>Ürün ve hizmetlerin sunulması, ücretlendirilmesi ve faturalandırılması</li>
              <li>Size teklif, hediye ve promosyon sunulması, hedefli tanıtım yapılması</li>
              <li>Gerekli durumlarda kimlik bilgi ve belgelerinizin teyit edilmesi</li>
              <li>Ürün ve hizmetlerin geliştirilmesi, denetimi ve analizi ile çalışanların eğitimi gibi dahili amaçlar için kullanılması</li>
              <li>Düzenleyici ve denetleyici kurumlarla, yasal düzenlemelerin gerektirdiği veya zorunlu kıldığı hukuki yükümlülüklerin yerine getirilmesi</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>3- İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h3>
            <p>DönerBank tarafından toplanan kişisel verileriniz; 6698 sayılı KVK Kanunu'nun 5. ve 6. maddelerinde belirtilen Kişisel Veri İşleme şartları kapsamında ve işbu dokümanda belirtilmiş amaçlarla sınırlı olarak, KVK Kanunu'nun 8. ve 9. maddelerine uygun olmak suretiyle 3. kişi ve kurumlara aktarılabilecektir.</p>
            
            <h4>Yurtdışına Veri Aktarımı:</h4>
            <p>DönerBank tarafından kişisel verileriniz, KVK Kanunun 4(2) maddesindeki öngörülen ilkeler ışığında açık rıza temini suretiyle veya 5(2) ve 6(3) maddelerinde öngörülen durumların varlığı halinde, açık rıza temin edilmeksizin ve kanunun 9. maddesindeki kurallar uyarınca, Kişisel Verileri Koruma Kurulu tarafından tespit edilecek yeterli korumaya sahip yabancı ülkeler ilan edildikten sonra sadece bu ülkelerde yerleşik kişi ve kuruluşlara aktarılabilecektir.</p>
          </section>

          <section className="legal-section">
            <h3>4- Kişisel Verilerinizi Toplamamızın Yöntemi ve Hukuki Sebebi</h3>
            <p>Kişisel verileriniz, her türlü sözlü, yazılı ya da elektronik ortamda, yukarıda yer verilen amaçlar doğrultusunda hizmetlerimizin sunulabilmesi ve bu kapsamda DönerBank'ın sözleşme ve yasadan doğan mesuliyetlerini eksiksiz ve doğru bir şekilde yerine getirebilmesi gayesi ile edinilir.</p>
          </section>

          <section className="legal-section">
            <h3>5- Veri Sahibi Olarak KVK Kanunu'nun 11. Maddesinde Sayılan Haklarınız</h3>
            <p>Kişisel verisi işlenen gerçek kişilerin KVK Kanunu'nun 11. maddesi uyarınca sahip olduğu haklar aşağıdaki gibidir:</p>
            
            <ul>
              <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVK Kanunu ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>Başvuru Yöntemi</h3>
            <p>Yukarıda sıralanan haklarınıza yönelik başvurularınızı kimliğinizi tespit edici gerekli bilgiler ile KVK Kanunu'nun 11. maddesinde belirtilen haklardan kullanmayı talep ettiğiniz hakkınıza yönelik açıklamalarınızı içeren talebinizi;</p>
            
            <p><strong>Adres:</strong> Döner Bank İkitelli Organize Sanayi Bölgesi Mutsan Mutfakçılar San. Sit. M1 Blok No: 4/6 Başakşehir / İSTANBUL adresine kimliğinizi tespit edici belgeler ile bizzat elden iletebilir, noter kanalıyla veya KVK Kanunu'nda belirtilen diğer yöntemler ile gönderebilir veya <strong>info@donerbank.com.tr</strong> adresine güvenli elektronik imzalı olarak iletebilirsiniz.</p>
            
            <p>Şirketimiz, talebin niteliğine göre talebi en kısa sürede ve en geç otuz (30) gün içinde ücretsiz olarak sonuçlandıracaktır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde, tarafımızca Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınacaktır.</p>
          </section>

          <section className="legal-section">
            <h3>İletişim Bilgileri</h3>
            <div className="contact-info">
              <p><strong>DönerBank</strong></p>
              <p><strong>Fabrika:</strong> İkitelli Organize Sanayi Bölgesi Mutsan Mutfakçılar San. Sit. M1 Blok No: 4/6 Başakşehir / İSTANBUL</p>
              <p><strong>Telefon:</strong> 0212 508 62 74</p>
              <p><strong>E-posta:</strong> info@donerbank.com.tr</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GizlilikPolitikasi; 