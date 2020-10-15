/**
 Created on 12.09.2020
 */

import React from 'react'
import styles from './ButtonToAddFiles.module.scss'
import { v4 as uuidv4 } from 'uuid';

function ButtonToAddFiles(props) {
	let fileReader = [];

	// let handleFileRead = (i) => {
	// 	const content = fileReader[i].title;
	// 	console.log(content)
	//
	// };


	// TODO: add toCheckNumberOfDownloadedFiles function for checking numbers of entered files.
	//  It should confirm the first files in number (max allowable number of files - number of added files)
	// let toCheckNumberOfDownloadedFiles = (inputFiles) => {
		// let result = [];
		// let biggestCount = Object.keys(inputFiles).map(item => +item).sort((a, b) => {
		// 	return a - b
		// }).length - 1;
		// let length = fileReader.length;
		// for (let i = 0; i < 5 - length; i++) {
		// 	result.push(inputFiles[i.toString()])
		// }
		// return inputFiles

		// return Object.keys(inputFiles).slice(0, ).reduce((result, key) => {
		// 	result[key] = inputFiles[key];
		// 	return result;
		// }, {});
	// };

	let handleFileChosen = (files) => {
		if (files.length + fileReader.length > 5) {
			return
		}
		let length = fileReader.length;
		for (let i = fileReader.length; i<files.length + length; i++) {
			for (let y = 0; y<files.length; y++) {
				fileReader[i] = {
					id: uuidv4(),
					data: undefined,
					name: undefined
				};
				fileReader[i].data = new FileReader();

				// fileReader[i].data.onloadend = handleFileRead(i - fileReader.length);
				fileReader[i].data.readAsText(files[y]);
				fileReader[i].name = files[y].name
			}
		}
	};

	return (
			<div >
				<div
						style={{backgroundColor: '#FFFFFF', margin: '10px'}}
						onClick={() => {
							console.log(fileReader);
				}}>
					READ DATA FROM FILE
				</div>
				<label htmlFor={"upload-json"} className={styles.addButton} >Добавить файлы</label>
				<input
						className={styles['input-file']}
						id="upload-json"
						type="file"
						name="file"
						multiple
						accept={'.json'}
						onClick={event => {
							if (fileReader.length >= 5) {
								event.preventDefault();
							}
						}}
						onChange={e => {
							// console.log('___---_-_!!!_-_---___', typeof e.target.files);
							handleFileChosen(e.target.files);
						}}
				/>
			</div>
	)
}

export default ButtonToAddFiles
