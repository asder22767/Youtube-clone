import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { MiddleCard } from '../components/middleCard/middleCard';
import { SmallCard } from '../components/smallCard/SmallCard';
import useTest from '../hooks/useTest';

const Home = () => {
	
	return (
		<Layout>
			<div className='space-y-16'>
				
				<SmallCard />

				<MiddleCard />
			</div>
		</Layout>
	);
};

export default Home;
