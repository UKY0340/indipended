var firebaseConfig = {
  apiKey: "AIzaSyApCLrnZuMt_LFsZwUqfjYcjRWw-EIFr5I",
  authDomain: "kwitter-c94-8132c.firebaseapp.com",
  databaseURL: "https://kwitter-c94-8132c-default-rtdb.firebaseio.com",
  projectId: "kwitter-c94-8132c",
  storageBucket: "kwitter-c94-8132c.appspot.com",
  messagingSenderId: "402966877855",
  appId: "1:402966877855:web:86453f193e41e4c55ef4aa",
  measurementId: "G-F3VHEVVJM2"
};
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");


  document.getElementById("user_name").innerHTML = "Welcome "+ user_name +"!";
  function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "room.html";
}











