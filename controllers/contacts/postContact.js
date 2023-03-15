const { Contact } = require("../../models");

const postContact = async (req, res) => {
  const { _id } = req.user;
  const result = Contact.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = postContact;
