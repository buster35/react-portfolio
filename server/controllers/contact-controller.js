const { Contact } = require("../models/Contact");

async function createContact(req, res) {
  const contact = await Contact.create(req.body);

  if (!contact) {
    return res.status(400).json({ message: "Unable to create contact" });
  }

  res.status(200).json(contact);
}

module.exports = { createContact };
