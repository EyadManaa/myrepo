import React, { useState } from 'react';


import exteriorWashImg from '../assets/exteriorwash.png';
import interiorCleaningImg from '../assets/interiordeepcleaning.jpg';
import engineBayImg from '../assets/enginebay.jpeg';
import paintCorrectionImg from '../assets/paintcorrection.jpeg';
import ceramicCoatingImg from '../assets/ceramiccoating.jpeg';
import headlightsImg from '../assets/headlights.jpg';
import '../styles/review.css';

const serviceData = [
    {
        icon: exteriorWashImg,
        title: 'Exterior Wash & Wax',
        desc: `A full hand wash and wax that removes dirt and gives your car a clean, shiny, and protected finish`
    },
    {
        icon: interiorCleaningImg,
        title: 'Interior Deep Cleaning',
        desc: `We clean the inside of your car from top to bottom—vacuuming, wiping, and removing stains for a fresh interior.`
    },
    {
        icon: engineBayImg,
        title: 'Engine Bay Cleaning',
        desc: `A safe cleaning of your engine area to remove dust and grease, making it look clean and helping it run better.`
    },
    {
        icon: paintCorrectionImg,
        title: 'Paint Correction',
        desc: `We remove scratches and swirl marks to make your car’s paint look smooth, glossy, and like new again.`
    },
    {
        icon: ceramicCoatingImg,
        title: 'Ceramic Coating',
        desc: `A long-lasting protective layer that keeps your car shiny and protects the paint from dirt, sun, and scratches.`
    },
    {
        icon: headlightsImg,
        title: 'Headlight Restoration',
        desc: `We clear up foggy or yellow headlights so they look new again and improve your night visibility.`
    }
];

const Review = () => {

    const [ratings, setRatings] = useState(Array(serviceData.length).fill(0));

    const handleStarClick = (serviceIdx, starIdx) => {
        setRatings(ratings =>
            ratings.map((r, i) =>
                i === serviceIdx ? (r === starIdx + 1 ? starIdx : starIdx + 1) : r
            )
        );
    };

    // ⭐ NEW STATE FOR FORM DATA
    const [formEntries, setFormEntries] = useState([]);

    // ⭐ HANDLE FORM SUBMISSION
    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const dropdown = e.target.dropdown.value;
        const message = e.target.message.value;

        const newEntry = { name, email, dropdown, message };

        setFormEntries([...formEntries, newEntry]);

        e.target.reset(); // clear form
    };

    // ⭐ REMOVE ENTRY
    const handleRemove = (indexToRemove) => {
        const updatedList = formEntries.filter((_, i) => i !== indexToRemove);
        setFormEntries(updatedList);
    };

    return (
        <div className="page review">

            <p className='head-page'>Read our reviews and feedback.</p>

            <div className="review-services-list">
                {serviceData.map((service, idx) => (
                    <div className="review-service-box" key={idx}>
                        <img src={service.icon} alt={service.title} />
                        <div className="service-title">{service.title}</div>

                        {/* Stars */}
                        <div className="star-rating right-stars">
                            {[0, 1, 2, 3, 4].map(star => (
                                <span
                                    key={star}
                                    className={star < ratings[idx] ? 'star checked' : 'star'}
                                    onClick={() => handleStarClick(idx, star)}
                                    style={{
                                        cursor: 'pointer',
                                        fontSize: '2rem',
                                        color: star < ratings[idx] ? '#fbbf24' : '#cbd5e1',
                                        transition: 'color 0.15s'
                                    }}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact form */}
            <div className="review-contact-box">
                <form className="review-contact-form" onSubmit={handleSubmit}>
                    <div className="review-form-row">
                        <label htmlFor="review-name">Name</label>
                        <input type="text" id="review-name" name="name" required />
                    </div>

                    <div className="review-form-row">
                        <label htmlFor="review-email">Email</label>
                        <input type="email" id="review-email" name="email" required />
                    </div>

                    <div className="review-form-row">
                        <label htmlFor="review-dropdown">Select an option</label>
                        <select id="review-dropdown" name="dropdown" required>
                            <option value="">Select...</option>
                            <option value="blank1">Exterior Wash & Wax</option>
                            <option value="blank2">Interior Deep Cleaning</option>
                            <option value="blank3">Engine Bay Cleaning</option>
                            <option value="blank4">Paint Correction</option>
                            <option value="blank5">Ceramic Coating</option>
                            <option value="blank6">Headlight Restoration</option>
                        </select>
                    </div>

                    <div className="review-form-row">
                        <label htmlFor="review-message">Message</label>
                        <textarea id="review-message" name="message" rows="4" required></textarea>
                    </div>

                    <button type="submit" className="review-form-submit">Send</button>
                </form>
            </div>

            {/* ⭐ NEW TABLE (like the PDF example) */}
            <div style={{ marginTop: "40px" }}>
				<br></br>
                <hr></hr>
				<br></br>

                <table style={{ width: "100%", marginTop: "10px", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Option</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {formEntries.map((entry, index) => (
                            <tr key={index} style={{ textAlign: "center" }}>
                                <td>{entry.name}</td>
                                <td>{entry.email}</td>
                                <td>{entry.dropdown}</td>
                                <td>{entry.message}</td>
                                <td>
                                    <button
                                        onClick={() => handleRemove(index)}
                                        style={{ background: "red", color: "white", padding: "5px 10px", border: "none", cursor: "pointer" }}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Review;
