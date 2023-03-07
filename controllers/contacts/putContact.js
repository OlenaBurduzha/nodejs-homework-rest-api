const contactsOperations = require("../../models/contacts");

const { NotFound } = require("http-errors");

const putContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.updateContact(id, req.body);
  if (!result) {
    throw new NotFound(`Not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = putContact;
