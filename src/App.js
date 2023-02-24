import './css/output.css';
import { Header } from './components/header/Header';
import { MiddleCard } from './components/middleCard/middleCard';
import { SideBar } from './components/sideBar/SideBar';
import { SmallCard } from './components/smallCard/SmallCard';
import { useReducer, useRef, useState } from 'react';
import { counterReducer } from './reducers/counterReducer';
import { AMOUNT, DECREASE, INCREASE } from './utils/constantas';

const initialState = {
	counter: 0,
	color: 'red',
	name: ' John',
};

function App() {
	const [data, dispatch] = useReducer(counterReducer, initialState);

	const input = useRef();

	return (
		<>
			<Header />
			<main>
				<div className='flex'>
					<button
						onClick={() => {
							dispatch({ type: INCREASE });
						}}
						className='bg-lime-400  p-2'>
						Qo'shish
					</button>
					<h2
						className={` px-3 text-center text-lg text-white mx-auto ${
							data.color === 'blue' ? 'bg-blue-700' : 'bg-red-700'
						}`}>
						{data.counter}
						{data.name}
					</h2>
					<button
						onClick={() => {
							dispatch({ type: DECREASE });
						}}
						className='bg-lime-400  p-2'>
						Kamaytirish
					</button>
				</div>
				<div>
					<input
						ref={input}
						className='mt-3 block mx-auto text-white border-spacing-1 bg-slate-800'
						type='number'
						placeholder='number'
					/>
					<button
						onClick={() => {
							dispatch({
								type: AMOUNT,
								payload: Number(input.current.value),
							});
						}}
						className='bg-lime-400  block w-36 mx-auto mt-5 p-2'>
						Almashtirish
					</button>
				</div>
				{/* <p onClick={() => setCounter((prev) => prev + 1)}>{counter}</p> */}
				{/* <section className='home flex'>
					<SideBar />
					<div className='space-y-16'>
						<SmallCard />

						<MiddleCard />

						<SmallCard />
					</div>
				</section> */}
			</main>
		</>
	);
}

export default App;
