import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

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
export const storage = app.storage();

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BKlH1aQZd_tgfFtudIMQNdgXdD5ppz3TZjiu_Wv8Xt5lpd8MVEMpst2zRPw0OMSA4IGCS3UlDmiVqZp_sdzTkoE'
  );

  messaging.onMessage(data => {
    console.log(data);
  });
}
