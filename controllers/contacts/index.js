const getContacts = require("./getContacts");
const getContactById = require("./getContactById");
const postContact = require("./postContact");
const putContact = require("./putContact");
const deletContact = require("./deleteContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getContacts,
  getContactById,
  postContact,
  putContact,
  updateStatusContact,
  deletContact,
};
