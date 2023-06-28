import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Dreu from './pages/Dreu';
import Feedback from './pages/Feedback';
import NoPage from './pages/NoPage';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box, Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Box display='flex' flexDirection='column'>
				<Box>
					<Header />
				</Box>
				<Box>
					<Container>
						<BrowserRouter>
							<Routes>
								<Route path='/'>
									<Route index element={<About />} />
									<Route path='resume' element={<Resume />} />
									<Route path='dreu' element={<Dreu />} />
									<Route
										path='feedback'
										element={<Feedback />}
									/>
									<Route
										path='contact'
										element={<Contact />}
									/>
									<Route path='*' element={<NoPage />} />
								</Route>
							</Routes>
						</BrowserRouter>
					</Container>
				</Box>
				<Box p={2}>
					<Footer />
				</Box>
			</Box>
		</div>
	);
}

export default App;
