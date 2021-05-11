let registerBox = document.getElementById('reg-box');
let registerBtn = document.getElementById('reg-btn');
let mainBox1 = document.getElementById('main-box-1');
let signup = document.getElementById('signup');

let loginBox = document.getElementById('login-box');
let loginBtn = document.getElementById('login-btn');
let mainBox2 = document.getElementById('main-box-2');

function showRegisterForm(){
    registerBtn.style.borderBottom = "2px solid #0be4f3";
    loginBox.style.visibility = "hidden";
    registerBox.style.visibility = "visible";
    loginBtn.style.borderBottom = "none";
    mainBox2.style.zIndex = "-1";
    mainBox1.style.zIndex = "1";
}

function showLoginForm(){
    registerBox.style.visibility = "hidden";
    loginBox.style.visibility = "visible";
    loginBtn.style.borderBottom = "2px solid #0be4f3";
    registerBtn.style.borderBottom = "none";
    mainBox1.style.zIndex = "-1";
    mainBox2.style.zIndex = "1";
}

// signup.addEventListener('click', function(event){
//     event.preventDefault();
//     let registerName = document.getElementById('reg-name').value;
//     let registerEmail = document.getElementById('reg-email').value;
//     let registerPassword = document.getElementById('reg-pswd').value;
//     let confirmPassword = document.getElementById('reg-conf-pswd').value;
    
//     if(!registerName && !registerEmail && !registerPassword && !confirmPassword){
//         alert("Name is required");
//     }else if(registerPassword != confirmPassword){
//         alert("Please make sure that both password fields must be same");
//     }
// }