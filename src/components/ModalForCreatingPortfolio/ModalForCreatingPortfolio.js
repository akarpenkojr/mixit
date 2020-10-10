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

		this.toMakeModalTitle = this.toMakeModalTitle.bind(this)
	}

	state = {

	};

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

	componentDidMount() {

	}

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
										Данные нового портфеля
									</div>
									<input
											value={this.state.portfolioName}
											onChange={event => {
												this.setState({portfolioName: event.target.value});
											}}
											type="text"
											className={styles.newPortfolioModal_input}
											placeholder={'Введите имя портфеля'}
											maxLength={33}
											required
									/>
									<input
											value={this.state.portfolioTaxAmount}
											onChange={event => {
												this.setState({portfolioTaxAmount: event.target.value});
											}}
											type="number"
											className={styles.newPortfolioModal_input}
											placeholder={'Введите размер комиссии портфеля, %'}
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


