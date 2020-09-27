/**
 Created on 19.08.2020
 */

import React, {Component} from 'react';

//import components
import ButtonToStartForm from "../ButtonToStartForm/ButtonToStartForm";
import ModalToCreatePortfolio from "../ModalToCreatePortfolio/ModalToCreatePortfolio";

//import Styles
import styles from './App.module.scss';

class App extends Component {

   constructor(props) {
      super(props);
      this.state = { newPortfolioModalIsOpen: false };
      this.updateData = this.updateData.bind(this);
   }

   state = {
      newPortfolioModalIsOpen: false
   };

   updateData = (value) => {
      this.setState({ newPortfolioModalIsOpen: value })
   };


   componentDidMount() {
      console.log('___---_-_!!!_-_---___', 'MOUNTED');
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('___---_-_!!!_-_---___', 'UPDATED');
   }

   render() {
      return (
         <div>
            <div className={styles.ButtonToStartFormPosition}>
               <ButtonToStartForm updateData={this.updateData} newPortfolioModalIsOpen={this.state.newPortfolioModalIsOpen}/>
            </div>
            <ModalToCreatePortfolio updateData={this.updateData} newPortfolioModalIsOpen={this.state.newPortfolioModalIsOpen}/>
         </div>
      )
   }
}

export default App
