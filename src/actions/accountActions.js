import { CREATE_ACCOUNT, SIGN_IN, SIGN_OUT } from './types';
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

export const signOut = () => dispatch => {
  dispatch({
   type: SIGN_OUT,
   payload: {}
  });
}


export const signIn = (email, password) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((data) => {
    const uid = data.user.uid;
    dispatch({
     type: SIGN_IN,
     payload: {userId: uid}
    });
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}


export const createAccount = (email, password) => dispatch => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then( (user) => {
    const uid = user.uid;
    dispatch({
     type: CREATE_ACCOUNT,
     payload: {userId: uid}
    });
  })
  .catch(function(error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
  });
}
