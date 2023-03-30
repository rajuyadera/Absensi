import express from "express";
import db from "./config/Database.js";
const app = express()
import cors from "cors";
import AdminRoutes from "./routes/AdminRoutes.js"
import SiswaRoutes from "./routes/SiswaRoutes.js"
import AbsenRoutes from "./routes/AbsenRoutes.js"
import AuthRoutes from "./routes/AuthRoutes.js"

try {
    db.authenticate()
    console.log("database connected")
} catch (error) {
    console.error(error)
}

// (async()=>{
//     await db.sync()
// })();

app.use(cors())
app.use(express.json())
app.use(AdminRoutes)
app.use(SiswaRoutes)
app.use(AbsenRoutes)
app.use(AuthRoutes)





app.listen('5000', ()=> {
    console.log("Server Running At Port 5000")
})