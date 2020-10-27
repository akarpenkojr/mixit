/**
 Created on 12.09.2020
 */

// imports
import React, {Component} from 'react'
import {connect} from 'react-redux'

//import components
import FileItem from "../FileItem";

//import styles
import styles from './FilesList.module.scss'


class FilesList extends Component{

	render() {
		return (
				<div style={{color: 'white', height: '154px'}} >
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

export default connect(
		mapStateToProps
)(FilesList)
