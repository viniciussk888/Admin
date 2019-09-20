import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2H7gLZ_e-FYDFDIv-mIjKmukiK_wOk04",
    authDomain: "quiz-742a7.firebaseapp.com",
    databaseURL: "https://quiz-742a7.firebaseio.com",
    projectId: "quiz-742a7",
    storageBucket: "quiz-742a7.appspot.com",
    messagingSenderId: "682266545697",
    appId: "1:682266545697:web:4be471a6b3b24db25a1d60"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);