import React from 'react';
import '../styles/footer.css';

const Footer = () => {

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-email">Email: <a href="mailto:info@myapp.com">CrystalDetailing@gmail.com</a></div>
        <div className="footer-copy">© 2025 CDC. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
