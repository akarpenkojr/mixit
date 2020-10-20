export const deleteFile = (fileIndex) => {
	return {
		type: 'DELETE_FILE_FROM_LIST',
		payload: {
			index: fileIndex
		}
	}
};
