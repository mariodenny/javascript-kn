const BASE_URL = 'http://localhost:8008'
console.log(`Base URL : ${BASE_URL}/data`);

async function getData(){
    const response = await fetch(`${BASE_URL}/data`)
    const data = await response.json()
    console.log(`Data fetched from the server ${JSON.stringify(data)}`)
    
    const resultDiv = document.getElementById('result')
    console.log(resultDiv);
    
    const bootstrapCard = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h1>${data.name}</h1>
                <p class="card-text">My name is ${data.name} , my hobbies are ${data.hobby}</p>
            </div>
        </div>
    `

    resultDiv.innerHTML = bootstrapCard
} 

getData().catch(console.error)