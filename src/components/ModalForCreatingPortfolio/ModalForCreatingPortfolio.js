/**
 Created on 12.09.2020
 */

import React, {Component} from 'react'

//import components

// import styles
import styles from './ModalForCreatingPortfolio.module.scss'

class ModalForCreatingPortfolio extends Component {
	state = {
		newPortfolioModalIsOpen: this.props.newPortfolioModalIsOpen
	};

	closeModal (event)  {
		if (event.target === event.currentTarget) {
			this.props.updateData(false)
		}
	};

	componentDidMount() {

	}

	render() {
		if (this.props.newPortfolioModalIsOpen) {
			return (
					<div className={styles.newPortfolioModal_wrapper} onClick={(event) => this.closeModal(event)}>
						<div className={styles.newPortfolioModal_mainBlock}>
							<div className={styles.outer}>
								<div className={styles.inner} onClick={(event) => this.closeModal(event)}>
									<label onClick={(event) => this.closeModal(event)}>Закрыть</label>
								</div>
							</div>
							<div className={styles.newPortfolioModal_title}>
								Название портфеля
							</div>
							<div className={styles.newPortfolioModal_dataArea}>
								<div className={styles.newPortfolioModal_inputArea}>
									<div className={styles.newPortfolioModal_dataAreaTitle}>
										Данные нового портфеля
									</div>
									<input type="text" className={styles.newPortfolioModal_input} required/>
									<input type="text" className={styles.newPortfolioModal_input} required/>
								</div>
							</div>
						</div>
					</div>
			)
		}
		return (
				<div>
				</div>
		)
	}
}

export default ModalForCreatingPortfolio


