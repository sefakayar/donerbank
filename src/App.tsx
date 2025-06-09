import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Kurumsal from './pages/Kurumsal';
import Fabrikamiz from './pages/Fabrikamiz';
import Subelerimiz from './pages/Subelerimiz';
import Franchising from './pages/Franchising';
import FabrikaIletisim from './pages/FabrikaIletisim';
import BolgeTemsilcileri from './pages/BolgeTemsilcileri';
import Bulten from './pages/Bulten';
import GizlilikPolitikasi from './pages/GizlilikPolitikasi';
import KullanimKosullari from './pages/KullanimKosullari';
import CerezPolitikasi from './pages/CerezPolitikasi';

// CSS imports
import './styles/global.css';
import './styles/Home.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kurumsal" element={<Kurumsal />} />
              <Route path="/fabrikamiz" element={<Fabrikamiz />} />
              <Route path="/subelerimiz" element={<Subelerimiz />} />
              <Route path="/franchising" element={<Franchising />} />
              <Route path="/fabrika-iletisim" element={<FabrikaIletisim />} />
              <Route path="/bolge-temsilcileri" element={<BolgeTemsilcileri />} />
              <Route path="/bulten" element={<Bulten />} />
              <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
              <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />
              <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
            </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;