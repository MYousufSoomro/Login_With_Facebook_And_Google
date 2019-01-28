// Initialize Firebase
var config = {
    apiKey: "AIzaSyDBIzkdJo9NmZmZKe18VvhIORFt5k2mrqQ",
    authDomain: "practice-coding.firebaseapp.com",
    databaseURL: "https://practice-coding.firebaseio.com",
    projectId: "practice-coding",
    storageBucket: "practice-coding.appspot.com",
    messagingSenderId: "712274736612"
};
firebase.initializeApp(config);

function fbLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var user = result.user;
            console.log("USER INFO:")
            console.log(user);
            swal({
                title: "Good job!",
                text: "You have successfully signed-in using Facebook!",
                icon: "success",
                button: "OK!",
            });
        })
        .catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage)
            swal({
                title: "Ohh No!",
                text: errorMessage,
                icon: "error",
                button: "Try Again!",
            });
        });
}

function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            var user = result.user;
            console.log("USER INFO:")
            console.log(user);
            swal({
                title: "Good Job!",
                text: "You have successfully signed-in using Google!",
                icon: "success",
                button: "OK!",
            });
        })
        .catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage)
            swal({
                title: "Ohh No!",
                text: errorMessage,
                icon: "error",
                button: "Try Again!",
            });
        });
}