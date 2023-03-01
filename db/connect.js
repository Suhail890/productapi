const mongoose=require("mongoose")

const connectDB=(uri)=>{
    return mongoose
    .connect(uri)
    .then(() => console.log("DB is connected Successfully!!!"))
    .catch((err) => console.log(err));
}

module.exports =connectDB