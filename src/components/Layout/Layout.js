import React from 'react';
import { Header } from '../header/Header';
import { SideBar } from '../sideBar/SideBar';

const Layout = ({ children, isSinglePage }) => {
	return (
		<>
			<Header  />
			{!isSinglePage ? (
				<main>
					<section className='home flex'>
						<SideBar />
						{children}
					</section>
				</main>
			) : (
				children
			)}
		</>
	);
};

export default Layout;
