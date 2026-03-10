import express from "express"
import "dotenv/config"
import routes from "./routes/index.js"

const application = express()
const PORT = process.env.port

application.use("/api", routes)

application.listen(PORT)
console.log(`Server running on http://localhost:${PORT}`)