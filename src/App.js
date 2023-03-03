import './css/output.css';

import React from 'react';
import CounterContextProvider from './components/context/counterContext';
import LanguageContextProvider from './components/context/languageContext';
import {
	BrowserRouter,
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SingleVideo from './pages/SingleVideo';
import SingleAbout from './pages/SingleAbout';

function App() {
	return (
		<CounterContextProvider>
			<LanguageContextProvider>
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} />
						<Route path='/about' element={<About />}>
							<Route
								path='/about/user'
								element={<SingleAbout />}
							/>
						</Route>

						<Route path='videos/:id' element={<SingleVideo />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</LanguageContextProvider>
		</CounterContextProvider>
	);
}

export default App;
