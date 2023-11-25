// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")

//build routes
router.get("/type/:classificationId", utilities.handleErrors (invController.buildByClassificationId)); // Route to build inventory by classification view
router.get("/detail/:inv_id", utilities.handleErrors (invController.buildById)); // product page
router.get("/add-classification", utilities.handleErrors(invController.buildAddClassification)); // add classification
router.get("/add-inventory", utilities.handleErrors(invController.buildAddInventory)); // add inventory
router.get("/",utilities.handleErrors(invController.buildManagement)); 
router.get("/add-inventory", utilities.handleErrors(invController.buildAddInventory)); // add inventory

// Process data
router.post(
    "/add-classification",
   // insertValidate.insertClassificationRules(),
   // insertValidate.checkClassificationData,
    utilities.handleErrors(invController.addClassification)
)
router.post(
    "/add-inventory",
  //  insertValidate.insertInvRules(),
   // insertValidate.checkInvData,
    utilities.handleErrors(invController.addToInventory)
)



module.exports = router;