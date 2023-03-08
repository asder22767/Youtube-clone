import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD } from '../../store/reducers/favoriteReducer';

const SmallCardList = (props) => {
	const dispatch = useDispatch();

	const { favoriteVideos } = useSelector((state) => state.favorite);

	const updateLikeHandler = (video) => {
		let hasVideo = false;

		favoriteVideos.forEach((element) => {
			if (element.id === video.id) {
				hasVideo = true;
			}
		});

		if (hasVideo) {
			dispatch({ type: 'remove', payload: video });
		} else {
			dispatch({ type: ADD, payload: video });
		}
	};

	return (
		<ul className='flex  space-x-10'>
			{props.posts.slice(0, 3).map((video) => (
				<li key={video.id} className='w-64'>
					<Link to={'/videos/' + video.id}>
						<img
							src={video.image}
							alt={video.name}
							className='mb-3'
						/>
					</Link>
					<h4 onClick={() => updateLikeHandler(video)}>
						{video.name}
					</h4>
					<div className='flex justify-between'>
						<p>
							{video.rating}k views ·{' '}
							{new Date(video.createdAt).getDate()}.
							{new Date(video.createdAt).getMonth()}.
							{new Date(video.createdAt).getFullYear()}
						</p>
						<p>Dollie Blair</p>
					</div>
				</li>
			))}
		</ul>
	);
};

export default SmallCardList;
