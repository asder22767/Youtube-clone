import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const About = () => {
	return (
		<Layout>
			<Link className='mr-3  text-blue-600' to={'/about/user'}>
				Single Aboutga o'tish
			</Link>
			About
			<Outlet />
		</Layout>
	);
};

export default About;
