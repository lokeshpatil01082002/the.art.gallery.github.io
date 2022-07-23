const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyDOfHSttGu0kLScZuS2f3R1DjDpFvXuoU4",
    authDomain: "the-art-gallery-67554.firebaseapp.com",
    projectId: "the-art-gallery-67554",
    storageBucket: "the-art-gallery-67554.appspot.com",
    messagingSenderId: "134875927139",
    appId: "1:134875927139:web:a1c99d52ad9f45ff379e56"
   });



   const user = firebase.auth().currentUser;
   const uid=user.uid;
   alert(uid);

