// and , or , not -> logical operator
let username = "banana007"
let password = "helloWorld"


document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    //  && -> dimana dua pernyataan sama sama benar hasilnya True 
    let usernameFromPost = document.getElementById("username").value
    let passwordFromPost = document.getElementById("password").value
    console.log(!usernameFromPost);
    console.log(!passwordFromPost);

    if(!usernameFromPost == username || !passwordFromPost == password){
        document.getElementById("errorMsg").innerHTML = "Login Successfull"
    }else{
        document.getElementById("errorMsg").innerHTML = "Login Failed"
    }

    // || -> salah satu pernyataan benar hasilnya true, jika dua dua salah maka false
    //  ! -> membalikan fakta , jadi True = False
})