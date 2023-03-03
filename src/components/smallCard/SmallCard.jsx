import img from '../../assets/smallCardImg.jpg';
import userPic from '../../assets/cardImg.png';
import { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../context/counterContext';
import SmallCardList from './SmallCardList';

export function SmallCard() {
	const [topVideos, setTopVideos] = useState([]);

	useEffect(() => {
		fetch('https://63d3e856a93a149755b5c8f1.mockapi.io/products')
			.then((res) => res.json())
			.then((data) => {
				setTopVideos(data);
			});
	}, []);

	return (
		<div>
			<div className='flex items-center mb-7'>
				<img src={userPic} alt='Dollie Blair' />

				<h2 className='ml-4'>Dollie Blair</h2>
			</div>

			<SmallCardList posts={topVideos} />
		</div>
	);
}
