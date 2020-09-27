/**
 Created on 12.09.2020
 */

import React, {Component} from 'react'

// import styles
import styles from './ModalToCreatePortfolio.module.scss'

class ModalToCreatePortfolio extends Component {
   state = {
     newPortfolioModalIsOpen: this.props.newPortfolioModalIsOpen
   };

  componentDidMount() {
    console.log('___---_-_!!!_-_---___', 'MOUNTED', this.state.count);
  }

   render() {

      if (this.props.newPortfolioModalIsOpen) {
         return (
             <div>
               <div
                   className={styles.newPortfolioModal_exitArea}
                   onClick={() => { this.props.updateData(false)}}
               />

               <div
                   className={styles.newPortfolioModal_wrapper}
                   onClick={() => { this.props.updateData(false)}}
               />
             </div>
         )
      }
      return (
          <div>
          </div>
      )
   }
}

export default ModalToCreatePortfolio


