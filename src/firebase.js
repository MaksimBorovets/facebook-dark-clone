import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCD5n-vu1AuiNN5q6HvtO-NkKNDuolOH8Q",
    authDomain: "e-commerce-clone-59181.firebaseapp.com",
    databaseURL: "https://e-commerce-clone-59181.firebaseio.com",
    projectId: "e-commerce-clone-59181",
    storageBucket: "e-commerce-clone-59181.appspot.com",
    messagingSenderId: "1009575580017",
    appId: "1:1009575580017:web:3d3fa149ad7800d98226d0",
    measurementId: "G-3KRFEF5RGJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }