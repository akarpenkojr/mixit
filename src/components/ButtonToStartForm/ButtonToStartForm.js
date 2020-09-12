/**
 Created on 12.09.2020
 */

import React from 'react'
import styles from './ButtonToStartForm.module.scss'

function ButtonToStartForm(props) {
   return (
      <div>
				<div className={styles.startButtonWrapper}>
					<div className={styles.startButton}>Сформировать составной портфель</div>
				</div>
      </div>
   )
}

export default ButtonToStartForm
