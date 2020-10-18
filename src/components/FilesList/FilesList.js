/**
 Created on 12.09.2020
 */

// imports
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteFile} from '../../store/action-creators'

//import components
import FileItem from "../FileItem";

//import styles
import styles from './FilesList.module.scss'


class FilesList extends Component{
	deleteFiles = () => {
		this.props.deleteFileFromDispatch()
	};

	render() {
		return (
				<div style={{color: 'white'}} >
					{this.props.files ? this.props.files.map((item, index) =>(
							<FileItem index={index} name={item.name} key={item.id} />
					)) : ''}
				</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		files: state.userFiles
	}
};

const mapDispatchToProps = {
	deleteFileFromDispatch: deleteFile
};

export default connect(
		mapStateToProps,
		mapDispatchToProps
)(FilesList)
