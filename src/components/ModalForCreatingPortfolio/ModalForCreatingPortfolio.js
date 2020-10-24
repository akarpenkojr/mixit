/**
 Created on 12.09.2020
 */
// imports
import React, {Component} from 'react'

//import components
import ButtonToAddFiles from "../ButtonToAddFiles";
import FilesList from "../FilesList";
import ButtonToMixFiles from "../ButtonToMixFiles";

// import styles
import styles from './ModalForCreatingPortfolio.module.scss'
import {connect} from "react-redux";


class ModalForCreatingPortfolio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			newPortfolioModalIsOpen: this.props.newPortfolioModalIsOpen,
			portfolioName: '',
			portfolioCommissionAmount: '',
			modalTitle: '',
		};

		this.toMakeModalTitle = this.toMakeModalTitle.bind(this);
		this.checkCommissionInputData = this.checkCommissionInputData.bind(this);
	}

	closeModal (event) {
		if (event.target === event.currentTarget) {
			this.props.updateData(false);
			this.setState({portfolioName: ''});
		}
	};

	toMakeModalTitle() {
		if (this.state.portfolioCommissionAmount !== '') {
			return this.state.portfolioName + ' ( комиссия: ' + this.state.portfolioCommissionAmount.replace(/[.,]/, '.') + '% )';
		}
		if (this.state.portfolioName === '' && this.state.portfolioCommissionAmount === '') {
			return 'Формирование нового портфеля'
		}
		return this.state.portfolioName;
	}

	// I want to add input validation for the entered commission. I think it is better for users and UX
	// because they will see the template and the system will validate the data at the same time as they enter.
	checkCommissionInputData(key, portfolioCommissionAmount) {
		if (!(+key) && key !== '0' && key !== '.' && key !== ',') {
			return true
		}
		if (+(portfolioCommissionAmount + key) > 100) {
			return true
		}
		if ((portfolioCommissionAmount + key).length > 7) {
			return true
		}
		if (portfolioCommissionAmount === '' && !/[0-9]/.test(key)) {
			return true
		}
		if (portfolioCommissionAmount[0] === '0' && /[0-9]/.test(key) && portfolioCommissionAmount.length === 1) {
			return true
		}
		if ((portfolioCommissionAmount.split('').includes('.') || portfolioCommissionAmount.split('').includes(','))
				&& (key === '.' || key === ',')) {
			return true
		}
		return false
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
									<label className={styles['exit-label']} onClick={(event) => this.closeModal(event)}>Закрыть</label>
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
											value={this.state.portfolioCommissionAmount}
											onKeyPress={(event)=> {
												if (this.checkCommissionInputData(event.key, this.state.portfolioCommissionAmount)) {
													event.preventDefault()
												}
											}}
											onChange={event => {
												this.setState({portfolioCommissionAmount: event.target.value});
											}}
											type="text"
											className={styles.newPortfolioModal_input}
											placeholder={'Комиссия портфеля, 0.00000%'}
											required
									/>
									<ButtonToAddFiles />
								</div>
								<div className={styles.newPortfolioModal_filesArea}>
									<div className={styles.newPortfolioModal_filesAreaTitle}>
										Добавленные файлы:
									</div>
									<FilesList />
									<div>
										{this.props.files.length ? <ButtonToMixFiles /> : ''}
									</div>
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

const mapStateToProps = state => ({
	files: state.userFiles
});


export default connect(
		mapStateToProps
)(ModalForCreatingPortfolio)
