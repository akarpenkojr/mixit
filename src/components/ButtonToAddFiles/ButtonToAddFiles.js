/**
 Created on 12.09.2020
 */

import React from 'react'
import styles from './ButtonToAddFiles.module.scss'

function ButtonToAddFiles(props) {
	let fileReader;

	const handleFileRead = (e) => {
		const content = fileReader.result;
		console.log(content)
		// … do something with the 'content' …
	};

	const handleFileChosen = (file) => {
		fileReader = new FileReader();
		fileReader.onloadend = handleFileRead;
		fileReader.readAsText(file);
	};

	return (
			<div >
				<div
						style={{backgroundColor: '#FFFFFF', margin: '10px'}}
						onClick={() => {
							let a = JSON.parse(fileReader.result);
							console.log(a['appname']);
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
						onChange={e => handleFileChosen(e.target.files[0])}
				/>
			</div>
	)
}

export default ButtonToAddFiles
