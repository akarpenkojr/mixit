export const deleteFile = (fileIndex) => {
	return {
		type: 'DELETE_FILE_FROM_LIST',
		payload: {
			index: fileIndex
		}
	}
};

export const addFile = (newFiles) => {
	return {
		type: 'ADD_FILE_FROM_LIST',
		payload: {
			files: newFiles
		}
	}
};
