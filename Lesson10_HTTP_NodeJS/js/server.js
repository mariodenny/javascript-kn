const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*') // semua boleh hit server
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end('Hello , Mom!')
    } else if (req.method === 'GET' && req.url === '/user') {
        res.write(
            "<h1>Hello, I learn NodeJS HTTP! <3 </h1>"
        )
        res.end()
    } else if (req.method === 'GET' & req.url === '/data') {
        res.writeHead(200, {
            'Content-Type' : 'application/json'
        })
        const data = {
            name : "Denny Mario",
            hobby : "Badminton & Volleyball",
            age : 24,
            isCool : true
        }
        res.end(JSON.stringify(data))
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        })
        res.end("Not Found!")
    }
})

server.listen(8008, () => {
    console.log('Server hosted in localhost:8008');
})