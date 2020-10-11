/**
 Created on 12.09.2020
 */

import React, {Component} from 'react'

//import components

// import styles
import styles from './ModalForCreatingPortfolio.module.scss'

class ModalForCreatingPortfolio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			newPortfolioModalIsOpen: this.props.newPortfolioModalIsOpen,
			portfolioName: '',
			portfolioTaxAmount: '',
			modalTitle: ''
		};

		this.regexp = /d{1,2}/m;

		this.toMakeModalTitle = this.toMakeModalTitle.bind(this)
	}

	closeModal (event) {
		if (event.target === event.currentTarget) {
			this.props.updateData(false);
			this.setState({portfolioName: ''});
		}
	};

	toMakeModalTitle() {
		if (this.state.portfolioTaxAmount) {
			return this.state.portfolioName + ' ( комиссия: ' + this.state.portfolioTaxAmount + '% )';
		}
		return this.state.portfolioName;
	}

	checkTaxInputData(keyFrame) {
		if (+(this.state.portfolioTaxAmount.toString() + keyFrame) > 100) {

		}
	}

	componentDidMount() {

	}

	// TODO: need to refactor onKeyPress(84)
	render() {
		if (this.props.newPortfolioModalIsOpen) {
			return (
					<div className={styles.newPortfolioModal_wrapper}>
						<div className={styles.newPortfolioModal_mainBlock}>
							<div className={styles.outer}>
								<div className={styles.inner} onClick={(event) => this.closeModal(event)}>
									<label onClick={(event) => this.closeModal(event)}>Закрыть</label>
								</div>
							</div>
							<div className={styles.newPortfolioModal_title}>
								{this.toMakeModalTitle()}
							</div>
							<div className={styles.newPortfolioModal_dataArea}>
								<div className={styles.newPortfolioModal_inputArea}>
									<div className={styles.newPortfolioModal_dataAreaTitle}>
										Данные формируемого портфеля
									</div>
									<input
											value={this.state.portfolioName}
											onChange={event => {
												this.setState({portfolioName: event.target.value});
											}}
											type="text"
											className={styles.newPortfolioModal_input}
											placeholder={'Имя портфеля'}
											maxLength={33}
											required
									/>
									<input
											value={this.state.portfolioTaxAmount}
											onKeyPress={event => {
												// console.log('___---_-_!!!_-_---___', (this.state.portfolioTaxAmount.toString() + event.key).test(this.regexp));
												if (!(+event.key) && event.key !== '0' && event.key !== '.' && event.key !== ',') {
													event.preventDefault()
												}
												if (+(this.state.portfolioTaxAmount.toString() + event.key) > 100) {
													event.preventDefault()
												}
												if ((this.state.portfolioTaxAmount.toString() + event.key).length > 7) {
													event.preventDefault()
												}
												if (this.state.portfolioTaxAmount.toString()[0] === '0' && event.key === '0') {
													event.preventDefault()
												}
											}}
											onChange={event => {
												this.setState({portfolioTaxAmount: event.target.value});
											}}
											type="number"
											className={styles.newPortfolioModal_input}
											placeholder={'Комиссия портфеля, 00.00000%'}
											required
									/>
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


