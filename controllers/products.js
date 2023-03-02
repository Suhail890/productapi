const Products= require("../models/product")

const getAllProducts =async(req,res)=>{
    const MyData=await Products.find({})
    res.status(200).json(MyData)
}
const getAllProductsTesting =async(req,res)=>{
    res.status(200).json({msg:"I am getting all products Testing"})
}

module.exports ={getAllProducts , getAllProductsTesting}