import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

import { BASE_URL } from '../utils/constantas';
const SingleVideo = () => {
	const { id } = useParams();
	const [videoData, setVideoData] = useState({});
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch(BASE_URL + 'products/' + id);

				if (res.status === 500) {
					throw new Error("Ma'lumot topilmadi");
				}

				const data = await res.json();

				setVideoData(data);
			} catch (error) {
				setIsError(true);
			}
		};

		getData();
	}, []);

	return (
		<Layout isSinglePage>
			{!isError ? (
				<div className='card'>
					<img src={videoData.image} alt={videoData.name} />
					<h3>{videoData.name}</h3>
					<p>{videoData.body}</p>
				</div>
			) : (
				<div className='text-center'>
					<p>Bu video endi mavjud emas</p>
					<button className='bg-slate-600 py-3 px-5'>
						<Link to={'/'}>BOSH SAHIFANI OCHISH</Link>
					</button>
				</div>
			)}
		</Layout>
	);
};

export default SingleVideo;
