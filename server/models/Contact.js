//Requiring in mongoose package, which allows us to link this new model schema with mongodb//
const { Schema, model } = require("mongoose");
//Do i need bcrypt to encrypt user contact info?
//const bcrypt = require("bcrypt");

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

//Assigning our schema to a model named "Contact", then storing it in a variable, then exporting that variable//
const Contact = model("Contact", contactSchema);
module.exports = Contact;
