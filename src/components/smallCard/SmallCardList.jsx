import React from 'react';
import { Link } from 'react-router-dom';

const SmallCardList = (props) => {
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
					<h4>{video.name}</h4>
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
