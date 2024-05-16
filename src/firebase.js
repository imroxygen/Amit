// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA-x-euHbnLH6vU9ZUu3DxFT2IqN2M1hqA",
  authDomain: "amit-protfolio.firebaseapp.com",
  projectId: "amit-protfolio",
  storageBucket: "amit-protfolio.appspot.com",
  messagingSenderId: "142855220121",
  appId: "1:142855220121:web:4dc74b53646f4566994108"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore();