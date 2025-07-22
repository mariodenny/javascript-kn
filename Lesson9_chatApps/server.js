require("dotenv").config()
const express = require("express")
const http = require("http")
const mongoose = require("mongoose")
const socketio = require("socket.io")

const chatRoutes = require("./routes/chatRoutes")
const {saveMessages} = require("./controller/chatController")

const app = express()
const server = http.createServer(app)
const io = socketio(server)


app.use(express.static("public"))
app.use(express.json())

// use routes
app.use("/api/messages", chatRoutes)
// connect mongodb
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.error("MongoDB error", err))

// socketio logic
io.on("connection", (socket) => {
    console.log("New socket client connected 🚀");
    
    socket.on("chat message", async(msgData) => {
        io.emit("chat message", msgData)
        await saveMessages(msgData)
    })

    socket.on("disconnect", () => {
        console.log("Socket client disconnected 👍");
        
    })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`😁👍 Server started on http://localhost:${PORT}`))