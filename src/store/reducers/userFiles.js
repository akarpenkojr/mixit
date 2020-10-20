export const userFilesReducer = (userFilesState = [{id: 'fooId', name: 'baaazName'}], action) => {
	switch (action.type) {
		case 'DELETE_FILE_FROM_LIST':
			let result = [...userFilesState];
			result.splice(action.payload.index, 1);
			return result;
	}
	return userFilesState
};
