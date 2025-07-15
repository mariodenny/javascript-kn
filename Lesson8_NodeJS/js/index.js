const { log } = require('console')
const express = require('express')
const app = express()
const port = 3000
const http = require('http')

const server = http.createServer((req,res)=>{
    // Setup Anti CORS 
    res.setHeader('Access-Control-Allow-Origin', '*') // semua url boleh masuk
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,OPTION,DELETE') // allow method
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type') // allow content type

    //  Handle preflight
    if(req.method === 'OPTIONS'){
        res.writeHead(204)
        res.end()
        return
    }
    // SSR -> server side rendering
    if(req.url === '/hello' && req.method==='GET'){
        // passing component html dari belakang
        res.write("<h1>Hello there, iam Component pass from Server</h1>")
        res.end()
    }
    // CSR
    if(req.url === '/user' && req.method==='GET'){
        res.writeHead(200,{
            'Content-Type' : 'application/json'
        })

        const user = {
            name : "Tom cruise",
            job : "Actor",
            age : 68,
            isCool : true
        }

        res.end(JSON.stringify(user))
        return
    }else if(req.url==='/btc' && req.method==='GET'){
        // disini code challengenya
        res.writeHead(200,{
            'Content-Type' : 'application/json'
        })

        const btcPrice = {
            name : "Indonesia Rupiah",
            unit : "RP",
            value : 1903937035.275
        }

        res.end(JSON.stringify(btcPrice))
        return
    }
    
    else{
        res.writeHead(404,{
            'Content-Type' :'application/json'
        })
        data = {
            code : 404,
            message : 'Not Found!'
        }

        res.end(JSON.stringify(data))
        return
    }

})

server.listen(port,()=>{
    console.log(`Server started at localhost:${port}`);
})