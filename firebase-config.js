// firebase-config.js
// Shared Firebase configuration for all pages in the SINKARKES system
// Do NOT share this file publicly without configuring Firebase Security Rules

const firebaseConfig = {
  apiKey: "AIzaSyBzIfkIZE40RFB77QeYQgIh4OIuapQTQD8",
  authDomain: "vaksin-75a9f.firebaseapp.com",
  databaseURL: "https://vaksin-75a9f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vaksin-75a9f",
  storageBucket: "vaksin-75a9f.firebasestorage.app",
  messagingSenderId: "183533666467",
  appId: "1:183533666467:web:d7a6ad6546a0da8b863f16",
  measurementId: "G-JS4LXK8072"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
