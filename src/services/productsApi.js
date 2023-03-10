import { instance } from './baseUrl';

export const getProducts = () => {
	return instance.get('products');
};

export const createProduct = (product) => {
	return instance.post('products', product);
};
