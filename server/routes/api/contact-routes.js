const router = require("express").Router();

//Import any controllers we need here//
const createContact = require("../../controllers/contact-controller");

//Declare routes that POINT to the controller functions required in above//
router.route("/").post(createContact);

module.exports = router;
