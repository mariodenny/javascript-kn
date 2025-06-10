function doSomething(){
    console.log("Hello World");
    
}

async function doSomethingAsynchronous(){
    console.log("Hello world asynchronouse");
}

async function myAddition(a,b){
    console.log(a+b);
    a = document.getElementById('number1').value
    b = document.getElementById('number2').value

    result = a + b
    document.getElementById("result").innerHTML = result
}


function countName(name){
    return name.length
}

function printLengthName(name){
    name = document.getElementById("name").value
    result = countName(name)
    document.getElementById("nameresult").innerHTML = `Your name length : ${result}`
}
