/**
 Created on 12.09.2020
 */

// imports
import React from 'react'

// import components


// import styles
import styles from './FileItem.module.scss'

function FileItem(props) {

	return (
			<div className={styles.FileItem}>
				{props.index + 1} – {props.item}
			</div>
	)
}

export default FileItem
