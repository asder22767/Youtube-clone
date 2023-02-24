import { AMOUNT, DECREASE, INCREASE } from '../utils/constantas';

export const counterReducer = (state, action) => {
	switch (action.type) {
		case INCREASE:
			return {
				...state,
				color: state.counter % 2 === 0 ? 'blue' : 'red',
				counter: state.counter + 1,
			};
		case DECREASE:
			return {
				...state,
				color: state.counter % 2 === 0 ? 'blue' : 'red',
				counter: state.counter - 1,
			};
		case AMOUNT:
			return {
				...state,
				color: state.counter % 2 === 0 ? 'blue' : 'red',
				counter: action.payload,
			};
		default:
			return state;
	}
};
