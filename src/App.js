import React from 'react';
import About from './pages/About';
import Dreu from './pages/Dreu';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import { Box, Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import './App.css';

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#19967b',
			},
			secondary: {
				main: '#c5e9cb',
			},
		},
		typography: {
			fontFamily: `"Montserrat","Roboto", "Helvetica", "Arial", sans-serif`,
			fontSize: 14,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
		},
	});
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<Box mb={5}>
					<Container>
						<BrowserRouter>
							<Header />
							<Routes>
								<Route path='/'>
									<Route index element={<About />} />
									{/* <Route path='resume' element={<Resume />} /> */}
									<Route path='dreu' element={<Dreu />} />
									<Route path='*' element={<NoPage />} />
								</Route>
							</Routes>
						</BrowserRouter>
					</Container>
					{/* <Box p={2}>
					<Footer />
				</Box> */}
				</Box>
			</ThemeProvider>
		</div>
	);
}

export default App;
