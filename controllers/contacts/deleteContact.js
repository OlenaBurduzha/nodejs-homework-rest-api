const contactsOperations = require("../../models/contacts");
const { NotFound } = require("http-errors");

const deletContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.removeContact(id, req.body);
  if (!result) {
    throw new NotFound(`Not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: {
      result,
    },
  });
};

module.exports = deletContact;
