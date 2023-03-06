const contactsOperations = require("../../models/contacts");

const getContacts = async (req, res) => {
  const contacts = await contactsOperations.listContacts();
  res.json({
    message: "Success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getContacts;
