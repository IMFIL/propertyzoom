import { SIGNIN } from './types';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB2T_vN-Vgd1Nq-wevS1YF3rl7O2V-2-TI",
  authDomain: "propertyzoom-1460f.firebaseapp.com",
  databaseURL: "https://propertyzoom-1460f.firebaseio.com",
  projectId: "propertyzoom-1460f",
  storageBucket: "propertyzoom-1460f.appspot.com",
  messagingSenderId: "94703854985"
};
firebase.initializeApp(config);

const db = firebase.database().ref();
const Account = db.child('Account');
const Customer = db.child('Customer');
const Owner = db.child('Owner');
const Property = db.child('Property');


export const signIn = () => dispatch => {
  dispatch({
   type: SIGNIN,
   payload: {}
  });
}
