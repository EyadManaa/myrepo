import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Review from './pages/Review';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

function App() {
	return (
		<Router>
			<div className="app-root">
				<Navbar />
				<main className="app-main">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/services' element={<Services />} />
						<Route path='/review' element={<Review />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/booking' element={<Booking />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;