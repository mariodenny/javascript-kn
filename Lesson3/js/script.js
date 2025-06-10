document.getElementById("scoreForm").addEventListener("submit", function (event) {
    event.preventDefault()
    let numberFromForm = document.getElementById("number").value
    console.log(`Number dari form adalah ${numberFromForm}`)

    if (numberFromForm > 100) {
        alert("Inputan tidak boleh lebih dari 100")
    } else if (numberFromForm >= 80 && numberFromForm <= 100) {
        document.getElementById("result").innerHTML = "A"
    } else if (numberFromForm >= 70 && numberFromForm <= 79) {
        document.getElementById("result").innerHTML = "B"
    } else if (numberFromForm >= 60 && numberFromForm <= 69) {
        document.getElementById("result").innerHTML = "C"
    } else if (numberFromForm >= 50 && numberFromForm <= 59) {
        document.getElementById("result").innerHTML = "D"
    } else {
        document.getElementById("result").innerHTML = "E"
    }

})