import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './store/context'
import {FirebaseContext} from './store/context'
import firebase from './firebase/config'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
ReactDOM.render(

    <FirebaseContext.Provider value={{firebase}}>
      <Context>
            <App />
      </Context>
      

    </FirebaseContext.Provider>







, document.getElementById('root'));
