/**
 Created on 19.08.2020
 */

import React, {Component} from 'react';
import './App.scss';
import Fab from '@material-ui/core/Button';
import AddIcon from '@material-ui/core/Icon';

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
            <h1>Hello woasdasdrld!</h1>
            <h2>{this.state.count}</h2>
            <Fab
                color="primary"
                aria-label="add"
            >
               <AddIcon />
            </Fab>
         </div>
      )
   }
}

export default App
