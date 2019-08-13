import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBIyKkulOr_jYcnyMSdIyK-v2FPgiaHoWg",
  authDomain: "react-e707d.firebaseapp.com",
  databaseURL: "https://react-e707d.firebaseio.com",
  projectId: "react-e707d",
  storageBucket: "react-e707d.appspot.com",
  messagingSenderId: "1044145514712",
  appId: "1:1044145514712:web:6bacb800d99c0825"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
