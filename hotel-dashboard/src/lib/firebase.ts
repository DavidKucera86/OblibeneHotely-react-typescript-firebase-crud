import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2KidflRoIpYcUPy90iKOyl8Rx-Wlapdg",
  authDomain: "hotel-dashboard-9f1cb.firebaseapp.com",
  projectId: "hotel-dashboard-9f1cb",
  storageBucket: "hotel-dashboard-9f1cb.appspot.com",
  messagingSenderId: "1008526421746",
  appId: "1:1008526421746:web:2b05cd02bf437f562d6a6b",
  measurementId: "G-LBMW9N3GTL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
