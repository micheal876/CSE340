// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")

//build routes
router.get("/type/:classificationId", utilities.handleErrors (invController.buildByClassificationId)); // Route to build inventory by classification view
router.get("/detail/:inv_id", utilities.handleErrors (invController.buildById)); // product page
module.exports = router;