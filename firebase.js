// import * as firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpP0kQ_rqeUfCUWdDKKJ4jY0ZJpzOVaas",
  authDomain: "signal-clone-a270c.firebaseapp.com",
  projectId: "signal-clone-a270c",
  storageBucket: "signal-clone-a270c.appspot.com",
  messagingSenderId: "128299828995",
  appId: "1:128299828995:web:81b1141b7ea5ddae770b36"
};

// Initialize Firebase
let app; 

if (firebase.app.length===0){
  app = firebase.initializeApp(firebaseConfig);
}else {
  app = firebase.app();
}


const db = app.fireStore();
const auth = firebase.auth();

export {db, auth};