import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import '../styles/Subelerimiz.css';
import SEO from '../components/SEO';

// Leaflet marker icon fix
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Özel marker icon'u (kırmızı)
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Ana şube için özel marker (altın rengi)
const mainIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// İstanbul Şube verileri (CSV dosyasından alınan gerçek veriler)
const subeler = [
  {
    id: 1,
    name: "Altınşehir Şubesi",
    address: "Altınşehir Mah. Osmanlı Cad. No:37/D, Başakşehir/İstanbul",
    phone: "0212 223 36 36",
    phone2: "0212 223 36 37",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Başakşehir",
    lat: 41.068928,
    lng: 28.752905,
    isMain: true
  },
  {
    id: 2,
    name: "Beylikdüzü Şubesi",
    address: "Adnan Kahveci Mah. Anadolu Cad. No:19/3, Beylikdüzü/İstanbul",
    phone: "0212 883 00 23",
    phone2: "0533 581 59 23",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Beylikdüzü",
    lat: 41.003136,
    lng: 28.630497
  },
  {
    id: 3,
    name: "Cerrahpaşa Şubesi",
    address: "Cerrahpaşa Mah. Koca Mustafapaşa Cad. No:78, Fatih/İstanbul",
    phone: "0533 463 66 37",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Fatih",
    lat: 41.006554,
    lng: 28.934875
  },
  {
    id: 4,
    name: "Kuyumcukent Şubesi",
    address: "Kuyumcukent Atölye Bloğu 29 Ekim Cad. No:1, Yenibosna/İstanbul",
    phone: "0212 603 04 83",
    phone2: "0212 603 04 84",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Yenibosna",
    lat: 41.003223,
    lng: 28.816974
  },
  {
    id: 5,
    name: "Mimaroba Şubesi",
    address: "Mimar Sinan Mah. Hürriyet Cad. No:80/A7, B. Çekmece/İstanbul",
    phone: "0212 863 18 00",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "B. Çekmece",
    lat: 41.005,
    lng: 28.581
  },
  {
    id: 6,
    name: "Sefaköy Şubesi",
    address: "Halkalı Cad. No:185 A, Küçükçekmece/İstanbul",
    phone: "0212 541 54 14",
    phone2: "0536 785 54 14",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Küçükçekmece",
    lat: 41.005,
    lng: 28.814
  },
  {
    id: 7,
    name: "Zeytinburnu Seyit Nizam Şubesi",
    address: "Beştelsiz Mah. Seyitnizam Cad. 130 Sok. No:138, Zeytinburnu/İstanbul",
    phone: "0212 302 82 02",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Zeytinburnu",
    lat: 41.011,
    lng: 28.9
  },
  {
    id: 8,
    name: "İSTOÇ Şubesi",
    address: "İSTOÇ 11. Ada No:58, Bağcılar/İstanbul",
    phone: "0212 659 86 58",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Bağcılar",
    lat: 41.078,
    lng: 28.83
  },
  {
    id: 9,
    name: "Altınşehir Güvercintepe Şubesi",
    address: "Güvercintepe Mah. Fatih Cad. No:145, Başakşehir/İstanbul",
    phone: "0212 665 36 36",
    phone2: "0212 665 36 37",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Başakşehir",
    lat: 41.07,
    lng: 28.75
  },
  {
    id: 10,
    name: "Bostancı Şubesi",
    address: "Bostancı Sanayi Sitesi İçerenköy Mah. Parçacılar Sok. No:7/C, Ataşehir/İstanbul",
    phone: "0216 572 24 25",
    phone2: "0501 332 24 25",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Ataşehir",
    lat: 40.963,
    lng: 29.1
  },
  {
    id: 11,
    name: "Halkalı Atakent Şubesi",
    address: "Halkalı Merkez Mah. 1. İkitelli Cad. B No:2/1K, Küçükçekmece/İstanbul",
    phone: "0212 979 00 61",
    phone2: "0540 210 82 20",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Küçükçekmece",
    lat: 41.034805,
    lng: 28.792559
  },
  {
    id: 12,
    name: "Maslak Şubesi",
    address: "Atatürk Oto Sanayi Sitesi, 2. Kısım, 10 Sokak, No:343, Sarıyer/İstanbul",
    phone: "0212 276 99 54",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Sarıyer",
    lat: 41.11,
    lng: 29.02
  },
  {
    id: 13,
    name: "Perpa Şubesi",
    address: "Halil Rıfat Paşa Mah. A Blok No:1 Kat:5, Perpa Ticaret Merkezi, Şişli/İstanbul",
    phone: "0212 394 04 81",
    phone2: "0212 210 96 80",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Şişli",
    lat: 41.05,
    lng: 28.97
  },
  {
    id: 14,
    name: "Tahtakale Şubesi",
    address: "Tahtakale Mah. Uzun Çarşı Cad. No:162, Fatih/İstanbul",
    phone: "0212 512 60 22",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Fatih",
    lat: 41.01,
    lng: 28.96
  },
  {
    id: 15,
    name: "İkitelli Halkalı Şubesi",
    address: "Atatürk Mah. İkitelli Cad. No:144/A, Küçükçekmece/İstanbul",
    phone: "0212 494 43 53",
    phone2: "0212 494 43 52",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Küçükçekmece",
    lat: 41.06,
    lng: 28.8
  },
  {
    id: 16,
    name: "Başakşehir-Tümsan Şubesi",
    address: "İkitelli OSB Mah. Tümsan Sanayi Sitesi 2.Kısım C Blok No:11, Başakşehir/İstanbul",
    phone: "0212 485 39 13",
    phone2: "0542 485 39 13",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Başakşehir",
    lat: 41.07,
    lng: 28.77
  },
  {
    id: 17,
    name: "Cennet Mahallesi Şubesi",
    address: "Cennet Mah. Hürriyet Cad. Güneş Sok. No:10 A, Küçükçekmece/İstanbul",
    phone: "0212 579 16 17",
    phone2: "0549 425 01 02",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Küçükçekmece",
    lat: 41.0,
    lng: 28.8
  },
  {
    id: 18,
    name: "Kapalıçarşı Şubesi",
    address: "Hüseyin Ağa Cami Sok. Figen Han No:1/1, Eminönü/İstanbul",
    phone: "İletişim için diğer şubelerimizi arayınız",
    hours: "Pazartesi-Cumartesi 09:00 - 19:00",
    region: "İstanbul",
    district: "Eminönü",
    lat: 41.01,
    lng: 28.97
  },
  {
    id: 19,
    name: "Merter Şubesi",
    address: "Mehmet Nesin Özmen Mah. Fatih Cad. No:30/1, Güngören/İstanbul",
    phone: "0212 506 95 80",
    phone2: "0507 882 75 56",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Güngören",
    lat: 41.02,
    lng: 28.89
  },
  {
    id: 20,
    name: "Sarıyer Şubesi",
    address: "Ferahevler Mah. Adnan Kahveci Cad. No:73/A, Sarıyer/İstanbul",
    phone: "0212 262 41 31",
    phone2: "0507 803 25 23",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Sarıyer",
    lat: 41.13,
    lng: 29.05
  },
  {
    id: 21,
    name: "Topçular Şubesi",
    address: "Topçular Mah. Rami Kışla Cad. Topçular İş Merkezi No:70, Eyüpsultan/İstanbul",
    phone: "0212 613 00 10",
    phone2: "0212 613 00 11",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "Eyüpsultan",
    lat: 41.07,
    lng: 28.93
  },
  {
    id: 22,
    name: "İkitelli OSB Şubesi",
    address: "Bağcılar Güngören San. Sitesi Çarşı Blok No:64, İkitelli/İstanbul",
    phone: "0212 549 35 21",
    hours: "Hergün 08:00 - 22:00",
    region: "İstanbul",
    district: "İkitelli",
    lat: 41.07,
    lng: 28.81
  },
  {
    id: 23,
    name: "Mimaroba (Gece&Gündüz) Şubesi",
    address: "Mimar Sinan Mah. Hürriyet Cad. No:80/A7, Büyükçekmece/İstanbul",
    phone: "0212 863 18 00",
    hours: "7/24 Açık",
    region: "İstanbul",
    district: "Büyükçekmece",
    lat: 41.008,
    lng: 28.566
  }
];

const Subelerimiz: React.FC = () => {
  const branchesSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Döner Bank Şubeleri",
    "description": "Döner Bank'ın İstanbul ve çevre illerdeki şube ağı. 23+ şube ile hizmet veriyoruz.",
    "url": "https://donerbank.com/subelerimiz",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "hasMap": "https://donerbank.com/subelerimiz",
    "numberOfLocations": "23+"
  };

  return (
    <div className="subelerimiz-page">
      <SEO 
        title="Şubelerimiz"
        description="Döner Bank şubelerimiz - İstanbul'da 23+ şube ile hizmet veriyoruz. Şube adreslerimiz, telefon numaralarımız ve harita üzerinde konumlarımız."
        keywords="döner bank şubeleri, istanbul şubeleri, döner bank adres, döner bank telefon, şube konumları"
        url="https://donerbank.com/subelerimiz"
        schemaData={branchesSchema}
      />
      <section className="subelerimiz-hero">
        <div className="subelerimiz-hero-overlay"></div>
        <div className="container">
          <div className="subelerimiz-hero-content">
            <h1>Şubelerimiz</h1>
            <p>Türkiye ve dünya genelindeki Döner Bank şubelerimiz</p>
          </div>
        </div>
      </section>
      
      <div className="container">
        <section className="subelerimiz-intro">
          <h2>İstanbul Şube Ağımız</h2>
          <p>Döner Bank olarak 1992'den bu yana İstanbul'da hizmet vermeye devam ediyoruz. İstanbul'daki {subeler.length} şubemizle müşterilerimize en yakın noktalardan hizmet sunuyoruz. Aşağıda yer alan haritada şubelerimizi görebilir ve detaylı bilgilere ulaşabilirsiniz.</p>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">{subeler.length}</span>
              <span className="stat-label">İstanbul Şubesi</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{new Set(subeler.map(s => s.district)).size}</span>
              <span className="stat-label">Farklı İlçe</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Yıllık Deneyim</span>
            </div>
          </div>
        </section>
        
        <section className="subelerimiz-map">
          <h2>🗺️ İstanbul Şube Haritası</h2>
          <div className="map-container">
            <div className="interactive-map">
              <div className="map-header">
                <h3>📍 İstanbul Şubelerimiz</h3>
                <p>Aşağıdaki haritada İstanbul'daki tüm şubelerimizi görebilirsiniz</p>
              </div>
              
              <div className="map-leaflet-container">
                <MapContainer 
                  center={[41.0369, 28.9850]} 
                  zoom={10} 
                  style={{ height: '500px', width: '100%', borderRadius: '15px' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {subeler.map((sube) => (
                    <Marker 
                      key={sube.id} 
                      position={[sube.lat, sube.lng]}
                      icon={sube.isMain ? mainIcon : customIcon}
                    >
                      <Popup>
                        <div className="popup-content">
                          <h3>
                            {sube.name}
                            {sube.isMain && <span className="main-branch-popup">🏢 Ana Şube</span>}
                          </h3>
                          <p><strong>📍 İlçe:</strong> {sube.district}</p>
                          <p><strong>🏠 Adres:</strong> {sube.address}</p>
                          <p><strong>📞 Telefon:</strong> {sube.phone}</p>
                          {sube.phone2 && <p><strong>📞 Telefon 2:</strong> {sube.phone2}</p>}
                          <p><strong>🕒 Çalışma Saatleri:</strong> {sube.hours}</p>
                          <p><strong>🗺️ Koordinatlar:</strong> {sube.lat.toFixed(6)}, {sube.lng.toFixed(6)}</p>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
              
              <div className="map-branches-grid">
                {subeler.map((sube) => (
                  <div key={sube.id} className={`map-branch-card ${sube.isMain ? 'main-branch' : ''}`}>
                    <div className="branch-marker-icon">
                      {sube.isMain ? '🏢' : '📍'}
                    </div>
                                         <div className="branch-info">
                       <h4>{sube.name}</h4>
                       <p className="branch-district">📍 {sube.district}</p>
                       <p className="branch-coords">
                         🗺️ {sube.lat.toFixed(6)}, {sube.lng.toFixed(6)}
                       </p>
                       <p className="branch-address">{sube.address}</p>
                     </div>
                  </div>
                ))}
              </div>
              
              <div className="map-legend">
                <div className="legend-item">
                  <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png" alt="Ana Şube" width="20" />
                  <span>Ana Şube</span>
                </div>
                <div className="legend-item">
                  <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png" alt="Şube" width="20" />
                  <span>Şubelerimiz</span>
                </div>
                <div className="legend-note">
                  <p>💡 Marker'lara tıklayarak şube detaylarını görebilirsiniz</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="subelerimiz-list">
          <h2>İstanbul Şubelerimiz</h2>
          
          <div className="subelerimiz-region">
            <h3>İstanbul ({subeler.length} Şube)</h3>
            <div className="subelerimiz-grid">
              {subeler.map((sube) => (
                <div key={sube.id} className={`sube-card ${sube.isMain ? 'main-branch' : ''}`}>
                  <h4>
                    {sube.name}
                    {sube.isMain && <span className="main-badge">Ana Şube</span>}
                  </h4>
                  <p className="sube-district">🏢 {sube.district}</p>
                  <p className="sube-address">📍 {sube.address}</p>
                  <div className="sube-phones">
                    <p className="sube-phone">📞 {sube.phone}</p>
                    {sube.phone2 && <p className="sube-phone">📞 {sube.phone2}</p>}
                  </div>
                  <p className="sube-hours">🕒 {sube.hours}</p>
                  <p className="sube-coords">🗺️ {sube.lat.toFixed(6)}, {sube.lng.toFixed(6)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="subelerimiz-franchise">
          <h2>Franchise Fırsatları</h2>
          <p>Döner Bank ailesine katılmak ve kendi işinizin sahibi olmak ister misiniz? 30 yıllık deneyimimiz ve güçlü marka değerimizle franchise fırsatlarımız hakkında detaylı bilgi almak için bizimle iletişime geçin.</p>
          <div className="franchise-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">🏆</span>
              <span>30+ Yıllık Deneyim</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🎯</span>
              <span>Güçlü Marka Değeri</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📈</span>
              <span>Sürekli Büyüme</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🤝</span>
              <span>Tam Destek</span>
            </div>
          </div>
          <a href="/franchising" className="franchise-button">Franchise Bilgi Al</a>
        </section>
      </div>
    </div>
  );
};

export default Subelerimiz; 