import { useEffect, useState } from 'react';
import { getProducts } from '../services/productsApi';

const useFetch = (API) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getProducts().then((data) => {
			setData(data.data);
		});
	}, []);

	return [data];
};

export default useFetch;
