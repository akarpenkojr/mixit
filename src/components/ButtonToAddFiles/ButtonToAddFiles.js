/**
 Created on 12.09.2020
 */

import React from 'react'
import styles from './ButtonToAddFiles.module.scss'

function ButtonToAddFiles(props) {
	return (
			<div>
				<label htmlFor={"upload-json"} className={styles.addButton} >Добавить файлы</label>
				<input
						className={styles['input-file']}
						id="upload-json"
						type="file"
						name="file"
						multiple
						accept={'.json'}
						onChange={event => {
							console.log(event.target.files[0].name)
						}}
				/>
			</div>
	)
}

export default ButtonToAddFiles
