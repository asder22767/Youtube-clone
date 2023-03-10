import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import { MiddleCard } from '../components/middleCard/middleCard';
import { SmallCard } from '../components/smallCard/SmallCard';
import useTest from '../hooks/useTest';
import { counterActions } from '../store';
import { decrement, increment, update } from '../store/slicers/counterSlicer';

const Home = () => {
	const store = useSelector((state) => state.counter);

	const dispatch = useDispatch();

	const decrementHandler = () => {
		dispatch(decrement());
	};
	const incrementHandler = () => {
		dispatch(increment());
	};

	return (
		<Layout>
			<div className='space-y-16'>
				<div className='flex gap-4'>
					<button onClick={decrementHandler}>-</button>
					<p
						className='text-blue-700'
						onClick={() => dispatch(update(10))}>
						{store.count}
					</p>
					<button onClick={incrementHandler}>+</button>
				</div>

				<SmallCard />

				<MiddleCard />
			</div>
		</Layout>
	);
};

export default Home;
