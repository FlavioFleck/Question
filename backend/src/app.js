import express from "express";
import router from "./routes/router";
const app = express()

app.use(router)

app.listen(5010, () => {
    console.log("Server is running!")
})