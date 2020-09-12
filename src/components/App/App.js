/**
 Created on 19.08.2020
 */

import React, {Component} from 'react';

//import Styles
import styles from './App.module.scss';

class App extends Component {
   state = {
      count: 0
   };

   componentDidMount() {
      console.log('___---_-_!!!_-_---___', 'MOUNTED');
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('___---_-_!!!_-_---___', 'UPDATED');
   }

   // constructor(props) {
   //    //    super(props);
   //    //
   //    //    this.state = {
   //    //       count: 0
   //    //    }
   //    // }


   render() {
      return (
         <div>
            <div className={styles.test}>
               mixitapp
            </div>
         </div>
      )
   }
}

export default App
