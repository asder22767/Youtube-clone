import { useEffect, useState } from 'react';

const useFetch = (API) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(API)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	return [data];
};

export default useFetch;
