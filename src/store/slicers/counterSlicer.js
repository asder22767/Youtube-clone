import { createSlice } from '@reduxjs/toolkit';

const initialCounterSlicer = {
	count: 0,
	test: false,
};

const counterSlicer = createSlice({
	name: 'counter',
	initialState: initialCounterSlicer,
	reducers: {
		increment: (state, action) => {
			state.count += 1;
		},
		decrement: (state, action) => {
			state.count -= 1;
		},
		update: (state, action) => {
			state.count = action.payload;
		},
	},
});

export const { increment, decrement, update } = counterSlicer.actions;

export const counterReducer = counterSlicer.reducer;
