const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyDOfHSttGu0kLScZuS2f3R1DjDpFvXuoU4",
  authDomain: "the-art-gallery-67554.firebaseapp.com",
  projectId: "the-art-gallery-67554",
  storageBucket: "the-art-gallery-67554.appspot.com",
  messagingSenderId: "134875927139",
  appId: "1:134875927139:web:a1c99d52ad9f45ff379e56"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

  
firebase.initializeApp(firebaseConfig);

function login(){


    var i = 0;
    
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 5;
        var id = setInterval(frame, 20);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
   



  
    let email_string=document.getElementById("email_input").value;
    let pass_string=document.getElementById("pass_input").value;
   
    firebase.auth().signInWithEmailAndPassword(email_string,pass_string).catch(function(error){
        alert(error);
    }).then(function(user){
        if(user)
        {
            // alert("Welcome Back User !!!!");
            window.location="home.html";

        }
       

    })
    

}
function register()
{
    var i = 0;
    
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar2");
      var width = 5;
      var id = setInterval(frame, 20);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }

    let email_string=document.getElementById("reg_mail").value;
    let pass_string=document.getElementById("reg_pass").value;
    let phone_string=document.getElementById("reg_phone").value;
    let name_string=document.getElementById("reg_name").value;

    var uid="";
    if(email_string=="" || pass_string=="" || phone_string=="" ||name_string=="")
    {
        alert("All Fields Are Mandetory");
    }
    else
    {
        // const auth = getAuth();
        firebase.auth().createUserWithEmailAndPassword( email_string, pass_string)
        .then((userCredential) => {
            // Signed in 
                alert("Account Created  !!!! Redirecting To Home Page");
                const user = userCredential.user;
                const uid=user.uid;

        firebase.database().ref('NewUsers/' + uid).set({
            username: name_string,
            email: email_string,
            phone:phone_string
           }, (error) => {
          if (error) {
             alert(error);
            } else {
             
              window.location="home.html";
          }
       });





















              })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode+errorMessage);
   
  });

  



 
    }








 
    
}




