function createLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user=> {
        console.log('usuario',user);
        alert('usuario criado com sucesso')
    }).cath(err =>{
        console.error('erro', err );  
    });
}
function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
        
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=> {
        alert('usuario logado com sucesso')
    }).cath(err =>{
        console.error('erro', err );  
    });
}

function deletarUsuario(){
    let currentUser = firebase.auth().currentUser;
    if(currentUser){
        currentUser.delete().then(()=>{
            alert('Usuario Excluido')
        }).cath(err =>{
            console.error('erro', err );  
        });
    }
}
