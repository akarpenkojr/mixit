/**
 Created on 12.09.2020
 */

// imports
import React from 'react'


// import components


// import styles
import styles from './ButtonToStartForm.module.scss'


function ButtonToStartForm(props) {

   if (props.newPortfolioModalIsOpen === false) {
		 return (
				 <div>
					 <div className={styles.startButtonWrapper} onClick={() => {
					 	props.updateData(true)}}>
						 <div className={styles.startButton}>Сформировать составной портфель</div>
					 </div>
				 </div>
		 )
	 } if (props.newPortfolioModalIsOpen === true) {
		 return (
				 <div>

				 </div>
		 )
	 }
}

export default ButtonToStartForm
