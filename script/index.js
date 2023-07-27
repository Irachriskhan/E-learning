
function login(){
    let username, password;
    username = document.getElementById('user').value;
    
    password = document.getElementById('pass').value;
    console.log(password)


    if (username.toString() === 'admin' && password.toString() == '1234'){
        window.location.href="../resources/dashboard.html";
    }
    else if (username.toString() !== 'admin' && password.toString() !== '1234'){
        alert('Invalid Username and Password');
    }
    else if (password.toString() !== '1234') alert('Invalid Password');
    else alert('Invalid Username');
}

function logout(){
    window.location.href="../resources/login.html";
}
