const Products = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company } = req.query;
  const queryObject = {};

  if(company){
    queryObject.company=company
    
  }

  const MyData = await Products.find(queryObject);
  res.status(200).json(MyData);
};
const getAllProductsTesting = async (req, res) => {
  const FilterData = await Products.find(req.query);
  res.status(200).json(FilterData);
};

module.exports = { getAllProducts, getAllProductsTesting };
