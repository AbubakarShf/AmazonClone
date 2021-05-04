import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCf3H8NCnV4FfEguVVvaKuM2uti7okaPrY",
    authDomain: "clone-ffc29.firebaseapp.com",
    projectId: "clone-ffc29",
    storageBucket: "clone-ffc29.appspot.com",
    messagingSenderId: "530829000076",
    appId: "1:530829000076:web:0fd77c3bbe3e1f7bb2aaa9",
});
const DataBase = firebase.firestore();
export { DataBase };
