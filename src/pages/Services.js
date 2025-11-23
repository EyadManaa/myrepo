import React from 'react';
import { useNavigate } from 'react-router-dom';
import exteriorWashImg from '../assets/exteriorwash.png';
import interiorCleaningImg from '../assets/interiordeepcleaning.jpg';
import engineBayImg from '../assets/enginebay.jpeg';
import paintCorrectionImg from '../assets/paintcorrection.jpeg';
import ceramicCoatingImg from '../assets/ceramiccoating.jpeg';
import headlightsImg from '../assets/headlights.jpg';
import '../styles/services.css';

const serviceData = [
    {
        icon: exteriorWashImg,
        title: 'Exterior Wash & Wax',
        price: '$25',
        desc: `A full hand wash and wax that removes dirt and gives your car a clean, shiny, and protected finish`
    },
    {
        icon: interiorCleaningImg,
        title: 'Interior Deep Cleaning',
        price: '$40',
        desc: `We clean the inside of your car from top to bottom—vacuuming, wiping, and removing stains for a fresh interior.`
    },
    {
        icon: engineBayImg,
        title: 'Engine Bay Cleaning',
        price: '$20',
        desc: `A safe cleaning of your engine area to remove dust and grease, making it look clean and helping it run better.`
    },
    {
        icon: paintCorrectionImg,
        title: 'Paint Correction',
        price: '$120',
        desc: `We remove scratches and swirl marks to make your car’s paint look smooth, glossy, and like new again.`
    },
    {
        icon: ceramicCoatingImg,
        title: 'Ceramic Coating',
        price: '$180',
        desc: `A long-lasting protective layer that keeps your car shiny and protects the paint from dirt, sun, and scratches.`
    },
    {
        icon: headlightsImg,
        title: 'Headlight Restoration',
        price: '$15',
        desc: `We clear up foggy or yellow headlights so they look new again and improve your night visibility.`
    }
];


const Services = () => {
	const navigate = useNavigate();
	return (
		<div className="page services">
			<section className="home-content">
				
				<p>Professional car care tailored to your needs. Browse our core services below.</p>
				

				<div className="services-grid">
					{serviceData.map((service, idx) => (
						<div className="service-card" key={idx}>
							<div className="service-card-media">
								<img src={service.icon} alt={service.title} />
							</div>
							<div className="service-card-content">
								<h4>{service.title}</h4>
								<p className="service-price">{service.price}</p>
								<p>{service.desc}</p>
								<button className="booking-btn" onClick={() => navigate('/booking', { state: { service: service } })}>
									Book Now
								</button>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Services;
