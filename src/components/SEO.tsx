import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "döner, döner bank, franchising, döner üretimi, kurumsal döner, tekirdağ döner, döner fabrikası",
  image = "/images/db_logo.png",
  url = "https://donerbank.com",
  type = "website",
  schemaData
}) => {
  const fullTitle = `${title} | Döner Bank - Kurumsal Döner Ticareti Uzmanı`;
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Function to update or create meta tag
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Döner Bank');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Turkish');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('theme-color', '#e30613');
    updateMetaTag('msapplication-TileColor', '#e30613');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    
    // Update Open Graph meta tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Döner Bank', true);
    updateMetaTag('og:locale', 'tr_TR', true);
    
    // Update Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
    // Update Schema.org JSON-LD
    if (schemaData) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaData);
    }
    
  }, [fullTitle, description, keywords, image, url, type, schemaData]);
  
  return null;
};

export default SEO; 