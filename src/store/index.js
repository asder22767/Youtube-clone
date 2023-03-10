import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slicers/counterSlicer';
import { favoriteReducer } from './slicers/favoriteSlicer';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		favorite: favoriteReducer,
	},
});
