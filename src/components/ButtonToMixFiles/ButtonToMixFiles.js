/**
 Created on 12.09.2020
 */

// imports
import React from 'react'
import {connect} from "react-redux";


// import components

// import styles
import styles from './ButtonToMixFiles.module.scss'


function ButtonToMixFiles(props) {

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
				/>
			</div>
	)
}

const mapStateToProps = state => ({
	files: state.userFiles
});


export default connect(
		mapStateToProps
)(ButtonToMixFiles)
