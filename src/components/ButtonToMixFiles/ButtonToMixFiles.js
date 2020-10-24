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
				<div
						className={styles.mixButton}
						onClick={event => {
							console.log('___---_-_!!!_-_---___', props.files[0].data.result);
						}}
				>
					Сформировать файл портфеля
				</div>
			</div>
	)
}

const mapStateToProps = state => ({
	files: state.userFiles
});


export default connect(
		mapStateToProps
)(ButtonToMixFiles)
