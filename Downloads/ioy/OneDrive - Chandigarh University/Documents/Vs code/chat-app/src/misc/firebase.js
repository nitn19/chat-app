import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDH4zikHliv5YwuU0oXw_nMZE49kh-jlzI',
  authDomain: 'chat-web-app-554e1.firebaseapp.com',
  databaseURL: 'https://chat-web-app-554e1-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-554e1',
  storageBucket: 'chat-web-app-554e1.appspot.com',
  messagingSenderId: '1038433330263',
  appId: '1:1038433330263:web:e7a8a97a00985e05c0ef12',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
