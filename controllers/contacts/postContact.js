const contactsOperations = require("../../models/contacts");

const postContact = async (req, res) => {
  const result = contactsOperations.addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = postContact;
