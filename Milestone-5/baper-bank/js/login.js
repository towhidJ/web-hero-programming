document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail  = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword= passwordField.value;
    
    if (userEmail=='abc' && userPassword=='abc')
    {
        console.log(userEmail);
        console.log(userPassword);
        window.location.href="bank.html";
    }
    else{
        alert("user invalid");
    }
});