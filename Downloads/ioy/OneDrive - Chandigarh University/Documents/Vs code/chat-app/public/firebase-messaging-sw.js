/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyDH4zikHliv5YwuU0oXw_nMZE49kh-jlzI',
  authDomain: 'chat-web-app-554e1.firebaseapp.com',
  databaseURL: 'https://chat-web-app-554e1-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-554e1',
  storageBucket: 'chat-web-app-554e1.appspot.com',
  messagingSenderId: '1038433330263',
  appId: '1:1038433330263:web:e7a8a97a00985e05c0ef12',
});

firebase.messaging();
