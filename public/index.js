
function joinFuction() {
  var x = document.getElementById('login-page');
  var y = document.getElementById('join-page');
  if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.display = 'none';
  } else {
      x.style.display = 'none';
      y.style.display = 'block';
  }
}

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.

//     document.getElementById("test").style.display = "block";
//     document.getElementById("test2").style.display = "none";
   
//     var user = firebase.auth().currentUser;

//     if(user != null){

//       var email_id = user.email;
//       document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

//     }

//   } else {
//     // No user is signed in.

//     document.getElementById("user_div").style.display = "none";
//     document.getElementById("login_div").style.display = "block";


//   }
// });

// function login(){

//   var userEmail = document.getElementById("email_field").value;
//   var userPass = document.getElementById("password_field").value;
//     // 로그인 하기
//   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // window.alert("Error : " + errorMessage);
//     window.alert("로그인을 시작합니다."+errorMessage);
//     // ...
//   });
  
//     // 신규 가입
//   firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // window.alert("Error : " + errorMessage);
//     window.alert("로그인을 시작합니다."+errorMessage);
//   });
// }

// function googlelogin(){
//   var provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//     window.alert("error : " + errorMessage);
//   });
// }

// function logout(){
//   firebase.auth().signOut();
// }
