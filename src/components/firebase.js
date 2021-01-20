import firebase from 'firebase/app'
import './firebase/auth'
import './firebase/storage'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyB3s1moGKHf1gWSAkPYfd0jxOIHNrOv0KU",
    authDomain: "fir-curd-169b5.firebaseapp.com",
    projectId: "fir-curd-169b5",
    storageBucket: "fir-curd-169b5.appspot.com",
    messagingSenderId: "782172255318",
    appId: "1:782172255318:web:ba8d7637ec0acafe1eb7f7"
  };


firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const storage = firebase.storage();

export {auth,storage}

export default firebase