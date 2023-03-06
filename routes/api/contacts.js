const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(contactSchema);

const router = express.Router();

// повертає масив всіх контактів в json-форматі зі статусом 200
router.get("/", ctrlWrapper(ctrl.getContacts));

// GET /api/contacts/:id
router.get("/:id", ctrlWrapper(ctrl.getContactById));

// процес додавання нового контакту + обробка помилок
router.post("/", validateMiddleware, ctrlWrapper(ctrl.postContact));

// PUT /api/contacts/:id
router.put("/:id", validateMiddleware, ctrlWrapper(ctrl.putContact));

// DELETE /api/contacts/:id
router.delete("/:id", ctrlWrapper(ctrl.deletContact));

module.exports = router;
