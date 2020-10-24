/**
 Created on 12.09.2020
 */

// imports
import React from 'react'
import {connect} from 'react-redux'
import {deleteFile} from '../../store/action-creators'

// import components


// import styles
import styles from './FileItem.module.scss'

function FileItem(props) {

	return (
			<div>
				<div className={styles.FileBlock}>
					<div className={styles.FileBlock__item}>
						{props.index + 1} – {props.name.length <= 31 ? props.name : props.name.slice(0, 13) + '...' + props.name.slice(-16)}
					</div>
					<div className={styles.FileBlock__itemDelete} onClick={() => props.deleteThisFile(props.index)}>&times;</div>
				</div>


			</div>

	)
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	deleteThisFile: deleteFile
};

export default connect(
		mapStateToProps,
		mapDispatchToProps
)(FileItem)
