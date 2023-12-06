// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
const regValidate = require('../utilities/account-validation')


// Route to build pages
router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildManagement));
router.get("/login", utilities.handleErrors(accountController.buildLogin));
router.get("/register", utilities.handleErrors(accountController.buildRegister));

/* ***********************
 * Route to update account view 
 *************************/
router.get("/update-account/:accountId", utilities.checkLogin, utilities.handleErrors(accountController.buildAccountUpdate))

// Process the registration data
router.post(
    "/register",
    regValidate.registrationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount)
)

// Process the login attempt
router.post(
  "/login",
  regValidate.loginRules(),
  regValidate.checkLoginData,
  utilities.handleErrors(accountController.logToAccount)
)

/* ***********************
 * Route to update account data
 *************************/
router.post(
  "/update/",
  regValidate.accountUpdateRules(),
  regValidate.checkAccountUpdateData,
  utilities.handleErrors(accountController.processAccountUpdate)
)

/* ***********************
 * Route to update account password
 *************************/
router.post(
  "/update-password/",
   regValidate.passwordUpdateRules(),
   regValidate.checkPasswordUpdateData,
  utilities.handleErrors(accountController.processPasswordUpdate)
 )

/* ***********************
 * Route to logout
 *************************/
router.get("/logout", utilities.handleErrors(accountController.buildLogoutView))


module.exports = router;