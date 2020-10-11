/**
 Created on 12.09.2020
 */

import React from 'react'
import styles from './ButtonToAddFiles.module.scss'

function ButtonToAddFiles(props) {
	return (
			<div>
				<div className={styles.AddButtonWrapper}>
					<div className={styles.addButton}>Добавить файлы</div>
				</div>
			</div>
	)
}

export default ButtonToAddFiles
