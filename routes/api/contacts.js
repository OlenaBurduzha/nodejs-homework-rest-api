const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema, statusJoiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

// повертає масив всіх контактів в json-форматі зі статусом 200
router.get("/", auth, ctrlWrapper(ctrl.getContacts));

// GET /api/contacts/:id
router.get("/:id", ctrlWrapper(ctrl.getContactById));

// процес додавання нового контакту + обробка помилок
router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.postContact));

// PUT /api/contacts/:id
router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.putContact));

// PATCH / api / contacts /: contactId / favorite
router.patch(
  "/:id/favorite",
  validation(statusJoiSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

// DELETE /api/contacts/:id
router.delete("/:id", ctrlWrapper(ctrl.deletContact));

module.exports = router;
