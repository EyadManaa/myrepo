import React from 'react';
import exteriorIcon from '../assets/exteriorIcon.png';
import interiorIcon from '../assets/interiorIcon.png';
import mobileIcon from '../assets/mobileIcon.png';
import websiteBanner from '../assets/banner3.png';
import '../styles/home.css';

const Home = () => {
	return (
		<div className="page home">
			<div className="home-banner">
				<img src={websiteBanner} alt="Website Banner" className="home-banner-img" />
			</div>
			<section className="home-content">
				<h2>Welcome to Crystal Detailing Center</h2>
				<p>Your trusted car service — fast, reliable, professional.</p>

				<div className="feature-grid">
					<div className="feature-card">
						<img src={exteriorIcon} alt="Exterior" />
						<h4>Exterior Detailing</h4>
						<p>Restore your car's paint, trim and finish to a like-new shine with full exterior detailing.</p>
					</div>

					<div className="feature-card">
						<img src={interiorIcon} alt="Interior" />
						<h4>Interior Cleaning</h4>
						<p>Deep-clean carpets, upholstery and surfaces — remove dirt, allergens and odors for a fresh cabin.</p>
					</div>

					<div className="feature-card">
						<img src={mobileIcon} alt="Mobile Service" />
						<h4>Mobile Service</h4>
						<p>Convenient on-site service: we come to your home or workplace to perform the work.</p>
					</div>
				</div>

			</section>
		</div>
	);
};

export default Home;
