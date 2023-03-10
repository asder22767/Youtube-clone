import userPic from '../../assets/cardImg.png';

import SmallCardList from './SmallCardList';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { createProduct } from '../../services/productsApi';

export function SmallCard() {
	const [topVideos] = useFetch(
		'https://63d3e856a93a149755b5c8f1.mockapi.io/products'
	);
	const [users] = useFetch('https://jsonplaceholder.typicode.com/users/');

	const addProductHandler = () => {
		createProduct({
			category: 'cow',
			price: 87,
			rating: 66,
			isFavorite: true,
			body: 'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
			name: 'test',
		}).then((res) => {
			console.log(res);
		});
	};
	return (
		<div>
			<div className='flex items-center mb-7'>
				<img src={userPic} alt='Dollie Blair' />

				<button onClick={addProductHandler}>Qo'shish</button>
				<h2 className='ml-4'>Dollie Blair</h2>
			</div>

			<SmallCardList posts={topVideos} />
		</div>
	);
}
