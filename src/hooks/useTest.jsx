import { useState } from 'react';

const useTest = () => {
	const [count, setCount] = useState(0);

	const increaseHandler = () => {
		setCount((prev) => prev + 1);
	};
	const decreaseHandler = () => {
		setCount((prev) => prev - 1);
	};

	return [count, increaseHandler, decreaseHandler];
};

export default useTest;
