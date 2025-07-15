const BASEURL = 'http://localhost:3000'
async function getUserData() {
    const response = await fetch(`${BASEURL}/user`)
    console.log(response);
    const data = await response.json()
    console.log(`Data feteched from backend -> ${data}`);
    
    const resultDiv = document.getElementById('result') 
    const cardBootstrap = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">User Card</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Profile</h6>
                <p class="card-text">Name : ${data.name}</p>
                <p class="card-text">Profession : ${data.job}</p>
                <p class="card-text">Age : ${data.age} years old</p>
                <p class="card-text">Is cool : ${data.isCool ? 'yes' : 'no'}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    `
    resultDiv.innerHTML = cardBootstrap
}

getUserData().catch(console.error)

async function fetchBtcPrice() {
    const response = await fetch(`${BASEURL}/btc`)
    console.log(response);
    const data = await response.json()
    console.log(`Data BTC from backend -> ${data}`);

    let  btcDiv = document.getElementById("btc")
    let element = `
        <h1>BTC Price to idr</h1>
        <p>
            name : ${data.name} <br>
            unit : ${data.unit} <br>
            value : ${data.value} <br>
        </p>
    
    `
    btcDiv.innerHTML = element
}
fetchBtcPrice().catch(console.error)

