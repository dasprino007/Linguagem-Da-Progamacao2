// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6SIAEbGWMDv4jpQlWLtcWtyY8kQaBDwk",
  authDomain: "projeto2mibteste-9d149.firebaseapp.com",
  projectId: "projeto2mibteste-9d149",
  storageBucket: "projeto2mibteste-9d149.appspot.com",
  messagingSenderId: "880370882622",
  appId: "1:880370882622:web:45ad611024852faf76d96f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/*
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
 const email = emailField.value;
 const password = passwordField.value;
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })
 .catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});
*/ // codigo velho