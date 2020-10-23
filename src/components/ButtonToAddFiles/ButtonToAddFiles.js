/**
 Created on 12.09.2020
 */

// imports
import React from 'react'
import {connect} from "react-redux";
import {fileChosen} from "../../side-functions/fileChosen";
import {addFile} from "../../store/action-creators";

// import components

// import styles
import styles from './ButtonToAddFiles.module.scss'


function ButtonToAddFiles(props) {

	const handleFileChosen = fileChosen;
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

	// const handleFileChosen = (file) => {
	// 	let files = [...file];
	// 	if (files.length + fileReader.length > 5) {
	// 		return
	// 	}
	// 	let length = fileReader.length;
	// 	for (let i = fileReader.length; i<files.length + length; i++) {
	// 		for (let y = 0; y<files.length; y++) {
	// 			fileReader[i] = {
	// 				id: uuidv4(),
	// 				data: undefined,
	// 				name: undefined
	// 			};
	// 			fileReader[i].data = new FileReader();
	//
	// 			// fileReader[i].data.onloadend = handleFileRead(i - fileReader.length);
	// 			fileReader[i].data.readAsText(files[y]);
	// 			fileReader[i].name = files[y].name
	// 		}
	// 	}
	// };

	return (
			<div >
				<label htmlFor={"upload-json"} className={styles.addButton} >Добавить файлы</label>
				<input
						className={styles['input-file']}
						id="upload-json"
						type="file"
						name="file"
						multiple
						accept={'.json'}
						onClick={event => {
							if (props.files.length >= 5) {
								event.preventDefault();
							}
						}}
						onInput={e => {
							const newFiles = [...e.target.files];
							const addedFiles = [...props.files];
							handleFileChosen(addedFiles, newFiles, props.toAddThisFiles);
							e.target.value = null
						}}
				/>
			</div>
	)
}

const mapStateToProps = state => ({
	files: state.userFiles
});

const mapDispatchToProps = {
	toAddThisFiles: addFile
};

export default connect(
		mapStateToProps,
		mapDispatchToProps
)(ButtonToAddFiles)
