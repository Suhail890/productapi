require("dotenv").config()
const express= require("express")
const app = express();
const connectDB=require("./db/connect")

const PORT=process.env.PORT || 5000
const products_routes=require("./routes/products")

app.use("/api/products",products_routes)

connectDB(process.env.MONGODB_URL)

const server=app.listen(PORT,()=>{
    console.log(`YES ${PORT} is connected successfully....`)
})