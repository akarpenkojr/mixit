/**
 Created on 12.09.2020
 */

// imports
import React from 'react'

//import components
import FileItem from "../FileItem";

//import styles
import styles from './FilesList.module.scss'


function FilesList({files}) {

	return (
			<div>
				{files.map((item, index) =>(
						<FileItem index={index} name={item.name} key={item.id}/>
				))}
			</div>
	)
}

export default FilesList
