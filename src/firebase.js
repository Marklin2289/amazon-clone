// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6gOAaTU9NNaP2XKlXvW1K4rcWL-V5ARI",
  authDomain: "clone-d1302.firebaseapp.com",
  projectId: "clone-d1302",
  storageBucket: "clone-d1302.appspot.com",
  messagingSenderId: "571345988348",
  appId: "1:571345988348:web:a5d364513bfe17a39b8579",
  measurementId: "G-22W45FN85K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
