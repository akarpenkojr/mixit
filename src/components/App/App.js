/**
 Created on 19.08.2020
 */

// imports
import React, {Component} from 'react';
import {store} from "../../store";
import {Provider} from 'react-redux'
//import components
import ButtonToStartForm from "../ButtonToStartForm";
import ModalForCreatingPortfolio from "../ModalForCreatingPortfolio";

//import Styles
import styles from './App.module.scss';


class App extends Component {

   constructor(props) {
      super(props);
      this.state = {
         newPortfolioModalIsOpen: false
      };

      this.updateData = this.updateData.bind(this);
   }

   updateData = (value) => {
      this.setState({ newPortfolioModalIsOpen: value })
   };


   componentDidMount() {

   }

   componentDidUpdate(prevProps, prevState, snapshot) {

   }

   render() {
      return (
          <Provider store={store}>
             <div>
                <div className={styles.ButtonToStartFormPosition}>
                   <ButtonToStartForm
                       updateData={this.updateData}
                       newPortfolioModalIsOpen={this.state.newPortfolioModalIsOpen}
                   />
                </div>
                <ModalForCreatingPortfolio
                    updateData={this.updateData}
                    newPortfolioModalIsOpen={this.state.newPortfolioModalIsOpen}

                />
             </div>
          </Provider>
      )
   }
}

export default App
