const favoriteInitialState = {
	favoriteVideos: [],
};

export const ADD = "adasdasd"


const favoriteReducer = (state = favoriteInitialState, action) => {
	if (action.type === ADD) {
		const result = [...state.favoriteVideos];
		result.push(action.payload);
		return {
			favoriteVideos: result,
		};
	} else if (action.type === 'remove') {
		const filteredArray = state.favoriteVideos.filter((video) => {
			if (video.id !== action.payload.id) {
				return true;
			}
		});
		return {
			favoriteVideos: filteredArray,
		};
	}
	return state;
};

export default favoriteReducer;
