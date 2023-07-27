
function login(){
    let username, password;
    username = document.getElementById('user').value;
    password = document.getElementById('pass').value;

    if (username.toString() === 'admin' && password.toString() == 'admin'){
        window.location.href="../resources/dashboard.html";
    }
    else{
        alert('Invalid Input');
        location.reload();
    }
}
