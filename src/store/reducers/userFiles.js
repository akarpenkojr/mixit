export const userFilesReducer = (userFilesState = [], action) => {
	switch (action.type) {
		case 'DELETE_FILE_FROM_LIST':
			let deletedFileNamesList = [...userFilesState];
			deletedFileNamesList.splice(action.payload.index, 1);
			return deletedFileNamesList;
		case 'ADD_FILE_FROM_LIST':
			let addedFileNamesList = [...userFilesState];
			addedFileNamesList.push(action.payload.files);
			return addedFileNamesList;
	}
	return userFilesState
};
