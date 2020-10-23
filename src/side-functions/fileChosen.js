/**
 Created on 23.10.2020
 */
import { v4 as uuidv4 } from 'uuid';

export function fileChosen(addedFiles, newFiles, toAddThisFiles) {
	if (addedFiles.length + newFiles.length > 5) {
		return;
	}
	newFiles.forEach(item => {
		let addFiles = {
			id: uuidv4(),
			data: new FileReader(),
			name: item.name
		};
		addFiles.data.readAsText(item);
		toAddThisFiles(addFiles);
	});
}

export default fileChosen
