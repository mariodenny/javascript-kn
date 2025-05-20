let username = "banana007"
let password = "helloWorld"

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    let usernameFromPost = document.getElementById("username").value
    let passwordFromPost = document.getElementById("password").value
    console.log(usernameFromPost);
    console.log(passwordFromPost);
    // if(username !== usernameFromPost){
    //     console.log("Username missmatch");
    //     document.getElementById("errorMsg").innerHTML = "Username missmatch"
    // }
    // if(password !== passwordFromPost){
    //     console.log("Password missmatch");
    //     document.getElementById("errorMsg").innerHTML = "Password missmatch"
    // }
    // document.getElementById("errorMsg").innerHTML = "Login Success"
    if(username!== usernameFromPost){
        document.getElementById("errorMsg").innerHTML = "Username Missmatch"
    }else if(password !== passwordFromPost){
        document.getElementById("errorMsg").innerHTML = "Password missmatch"
    }else{
        document.getElementById("errorMsg").innerHTML = "Login Successfull"
    }

})