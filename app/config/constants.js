import firebase from 'firebase'

// Initialize Firebase
export const config = {
  apiKey: "AIzaSyDpbs1O0-D2sVlwMbUKxCWrns5MnHTv8nU",
  authDomain: "would-you-rather-5c378.firebaseapp.com",
  databaseURL: "https://would-you-rather-5c378.firebaseio.com",
  storageBucket: "would-you-rather-5c378.appspot.com",
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
