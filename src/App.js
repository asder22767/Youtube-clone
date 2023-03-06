import './css/output.css';

import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SingleVideo from './pages/SingleVideo';
import SingleAbout from './pages/SingleAbout';
import Login from './pages/Login';
import { AuthContext } from './components/context/authContext';
import Channel from './pages/Channel';

function App() {
	const { isLogin } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/about' element={<About />}>
					<Route path='/about/user' element={<SingleAbout />} />
				</Route>
				<Route path='videos/:id' element={<SingleVideo />} />

				{isLogin ? (
					<Route path='channel' element={<Channel />} />
				) : (
					<Route path='channel' element={<Login />} />
				)}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
