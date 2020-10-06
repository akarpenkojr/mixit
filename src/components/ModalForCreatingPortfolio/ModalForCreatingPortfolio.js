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
     if (event.target === event.currentTarget) {
       this.props.updateData(false)
     }
   };

  componentDidMount() {

  }

   render() {

      if (this.props.newPortfolioModalIsOpen) {
         return (
             <div
                 className={styles.newPortfolioModal_wrapper}
                 onClick={(event) => this.closeModal(event)}
             >
               <div
                   className={styles.newPortfolioModal_main}
               >

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


