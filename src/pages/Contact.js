import React from 'react';
import '../styles/contact.css';

const Contact = () => {
	return (
		<div className="page contact">

			<p style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '4rem', marginTop: '4rem' }}>Get in touch with us.</p>
			<div className="contact-info">
				<div>
					<div className="contact-label">Email:</div>
					<div className="contact-value">CrystalDetailing@gmail.com</div>
				</div>
				<div>
					<div className="contact-label">Phone:</div>
					<div className="contact-value">+961 1 234 567</div>
				</div>
				<div className="contact-icons">
					<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Instagram">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
					</a>
					<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Facebook">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.64l.36-4H14V7a1 1 0 0 1 1-1h3z"/></svg>
					</a>
					<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="LinkedIn">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="16" y1="8" x2="16" y2="16"/><line x1="8" y1="8" x2="8" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
					</a>
				</div>
			</div>



			


		</div>
	);
};

export default Contact;
