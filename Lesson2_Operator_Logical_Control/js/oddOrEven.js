document.getElementById("numberSubmit").addEventListener("submit", function(event){
    event.preventDefault() // Mencegah suatu event jalan sendiri, contoh form ke submit otomatis, atau reload

    let number = document.getElementById("number").value
    console.log(number);
    
    if(number % 2 == 0){
        document.getElementById("result").innerHTML = "Even"
    }else{
        document.getElementById("result").innerHTML = "Odd"
    }
})