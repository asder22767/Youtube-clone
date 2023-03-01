import img from '../../assets/smallCardImg.jpg';
import userPic from '../../assets/cardImg.png';
import { useContext, useState } from 'react';
import { CounterContext } from '../context/counterContext';
// import { CounterContext } from '../../App';

export function SmallCard() {
	const { setCounter } = useContext(CounterContext);

	return (
		<div>
			<div className='flex items-center mb-7'>
				<img src={userPic} alt='Dollie Blair' />

				<h2 className='ml-4'>Dollie Blair</h2>
			</div>

			<ul className='flex space-x-10'>
				<li
					onClick={() => {
						setCounter((prev) => prev + 1);
					}}
					className='w-64'>
					<img
						src={img}
						alt='A Brief History Of Creation'
						className='mb-3'
					/>
					<h4>A Brief History Of Creation</h4>
					<div className='flex justify-between'>
						<p>80k views · 3 days ago</p>
						<p>Dollie Blair</p>
					</div>
				</li>
				<li className='w-64'>
					<img
						src={img}
						alt='A Brief History Of Creation'
						className='mb-3'
					/>
					<h4>A Brief History Of Creation</h4>
					<div className='flex justify-between'>
						<p>80k views · 3 days ago</p>
						<p>Dollie Blair</p>
					</div>
				</li>
				<li className='w-64'>
					<img
						src={img}
						alt='A Brief History Of Creation'
						className='mb-3'
					/>
					<h4>A Brief History Of Creation</h4>
					<div className='flex justify-between'>
						<p>80k views · 3 days ago</p>
						<p>Dollie Blair</p>
					</div>
				</li>
				<li className='w-64'>
					<img
						src={img}
						alt='A Brief History Of Creation'
						className='mb-3'
					/>
					<h4>A Brief History Of Creation</h4>
					<div className='flex justify-between'>
						<p>80k views · 3 days ago</p>
						<p>Dollie Blair</p>
					</div>
				</li>
			</ul>
		</div>
	);
}
