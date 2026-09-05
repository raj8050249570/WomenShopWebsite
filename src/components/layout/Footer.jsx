import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, PinIcon as Pinterest, ChevronDown, ChevronUp } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export default function Footer() {
  const { navigateTo } = useShop();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(prev => prev === section ? null : section);
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="brand-logo" onClick={() => navigateTo('home')}>
              <div className="brand-title-group">
                <span className="brand-title" style={{ color: '#FAF8F5' }}>BELGAUM</span>
                <span className="brand-tagline" style={{ color: 'var(--color-gold-primary)' }}>WOMEN'S FASHION</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Modern essentials. Timeless silhouettes. Pieces designed to empower and inspire you every day.
            </p>
            <div className="footer-social-links">
              <a href="#instagram" className="footer-social-icon" aria-label="Instagram">
                <Instagram size={17} />
              </a>
              <a href="#facebook" className="footer-social-icon" aria-label="Facebook">
                <Facebook size={17} />
              </a>
              <a href="#pinterest" className="footer-social-icon" aria-label="Pinterest">
                <Pinterest size={17} />
              </a>
              <a href="#twitter" className="footer-social-icon" aria-label="Twitter">
                <Twitter size={17} />
              </a>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div className="footer-col-accordion">
            <button 
              className="footer-col-header" 
              onClick={() => toggleSection('shop')}
              aria-expanded={openSection === 'shop'}
            >
              <span className="footer-col-title">SHOP</span>
              <span className="footer-accordion-icon">
                {openSection === 'shop' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
            <ul className={`footer-links-list ${openSection === 'shop' ? 'open' : ''}`}>
              <li><button className="footer-link" onClick={() => navigateTo('shop', 'all')}>New In</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('shop', 'clothing')}>Clothing</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('shop', 'dresses')}>Dresses</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('shop', 'tops')}>Tops & Shirts</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('shop', 'bottoms')}>Bottoms & Pants</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('shop', 'accessories')}>Accessories</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('shop', 'sale')}>Sale</button></li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div className="footer-col-accordion">
            <button 
              className="footer-col-header" 
              onClick={() => toggleSection('care')}
              aria-expanded={openSection === 'care'}
            >
              <span className="footer-col-title">CUSTOMER CARE</span>
              <span className="footer-accordion-icon">
                {openSection === 'care' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
            <ul className={`footer-links-list ${openSection === 'care' ? 'open' : ''}`}>
              <li><button className="footer-link" onClick={() => navigateTo('contact')}>FAQ</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('contact')}>Shipping & Delivery</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('contact')}>Returns & Exchanges</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('shop', 'all')}>Size Guide</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('contact')}>Track Your Order</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('contact')}>Contact Us</button></li>
            </ul>
          </div>

          {/* Column 3: About Us */}
          <div className="footer-col-accordion">
            <button 
              className="footer-col-header" 
              onClick={() => toggleSection('about')}
              aria-expanded={openSection === 'about'}
            >
              <span className="footer-col-title">ABOUT US</span>
              <span className="footer-accordion-icon">
                {openSection === 'about' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
            <ul className={`footer-links-list ${openSection === 'about' ? 'open' : ''}`}>
              <li><button className="footer-link" onClick={() => navigateTo('about')}>Our Story</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('about')}>Sustainability</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('about')}>Careers</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('lookbook')}>Lookbook</button></li>
              <li><button className="footer-link" onClick={() => navigateTo('about')}>Editorial Journal</button></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col-accordion">
            <button 
              className="footer-col-header" 
              onClick={() => toggleSection('contact')}
              aria-expanded={openSection === 'contact'}
            >
              <span className="footer-col-title">CONTACT US</span>
              <span className="footer-accordion-icon">
                {openSection === 'contact' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>
            <div className={`footer-links-list ${openSection === 'contact' ? 'open' : ''}`}>
              <div className="footer-contact-item">
                <Mail size={16} style={{ marginTop: '2px', color: 'var(--color-gold-primary)' }} />
                <span>hello@belgaumfashion.com</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} style={{ marginTop: '2px', color: 'var(--color-gold-primary)' }} />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} style={{ marginTop: '2px', color: 'var(--color-gold-primary)' }} />
                <span>123 Fashion Avenue, Suite 400<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} BELGAUM (Images Cloth Store). All Rights Reserved.
          </div>
          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
