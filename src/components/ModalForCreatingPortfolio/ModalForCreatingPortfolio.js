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

  }

   state = {
     newPortfolioModalIsOpen: this.props.newPortfolioModalIsOpen
   };

   closeModal (event)  {
     console.log('___---_-_!!!_-_---___', event.target);
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
               <div className={styles.newPortfolioModal_main}>
                 <div className={styles.outer}>
                   <div className={styles.inner} onClick={(event) => this.closeModal(event)}>
                     <label onClick={(event) => this.closeModal(event)}>Close</label>
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


