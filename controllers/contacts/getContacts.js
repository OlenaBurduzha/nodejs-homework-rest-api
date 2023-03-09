const { Contact } = require("../../models");

const getContacts = async (req, res) => {
  const contacts = await Contact.find({});
  res.json({
    message: "Success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getContacts;
