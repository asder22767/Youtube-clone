import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { MiddleCard } from '../components/middleCard/middleCard';
import { SmallCard } from '../components/smallCard/SmallCard';
import useTest from '../hooks/useTest';

const Home = () => {
	const store = useSelector((state) => state.counter);

	const dispatch = useDispatch();

	const decrementHandler = () => {
		dispatch({ type: 'decrement' });
	};
	const incrementHandler = () => {
		dispatch({ type: 'increment' });
	};

	return (
		<Layout>
			<div className='space-y-16'>
				<div className='flex gap-4'>
					<button onClick={decrementHandler}>-</button>
					<p className='text-blue-700'>{store.counter}</p>
					<button onClick={incrementHandler}>+</button>
				</div>

				<SmallCard />

				<MiddleCard />
			</div>
		</Layout>
	);
};

export default Home;
