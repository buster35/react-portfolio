const { Contact } = require("../models/Contact");

module.exports = {
  async createContact({ body }, res) {
    const contact = await Contact.create(body);

    if (!contact) {
      return res.status(400).json({ message: "Unable to create contact" });
    }

    res.status(200).json(contact);
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
};
