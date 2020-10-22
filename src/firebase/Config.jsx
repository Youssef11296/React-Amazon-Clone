import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9wqbgqKKmiN-BgLnK8YjItQ73zoByyyM",
  authDomain: "clone-17d9f.firebaseapp.com",
  databaseURL: "https://clone-17d9f.firebaseio.com",
  projectId: "clone-17d9f",
  storageBucket: "clone-17d9f.appspot.com",
  messagingSenderId: "766153440621",
  appId: "1:766153440621:web:2a2218c01a732cbd946e64",
  measurementId: "G-4CPFH6RQT1",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
