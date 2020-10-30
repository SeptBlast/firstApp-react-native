import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBn1J6PFVySzYVy3_Sy_lxa6GOH08bQaHU",
  authDomain: "react-native-github-repo-app.firebaseapp.com",
  databaseURL: "https://react-native-github-repo-app.firebaseio.com",
  projectId: "react-native-github-repo-app",
  storageBucket: "react-native-github-repo-app.appspot.com",
  messagingSenderId: "149981397597",
  appId: "1:149981397597:web:0a70b590d8371a2479c3b4",
  measurementId: "G-0ZQC0P3H3S",
};

console.log(firebaseConfig);

let Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
