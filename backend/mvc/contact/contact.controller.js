const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const contactService = require("./contact.service");

// Routes
router.get("/", getAllContacts);
router.post("/", authorize(), createContactSchema, createContact);
router.put("/:id", authorize(), updateContactSchema, updateContact);
router.delete("/:id", authorize(), deleteContact);

module.exports = router;

// Controller functions
function getAllContacts(req, res, next) {
  contactService
    .getAllContacts()
    .then((contacts) => res.json(contacts))
    .catch(next);
}

function createContactSchema(req, res, next) {
    console.log(req.body)
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string(),
    location: Joi.string(),
    type: Joi.string().valid("Corporate office", "Regional office").required(),
  });
  validateRequest(req, next, schema);
}

function createContact(req, res, next) {
    console.log(req.body)
  contactService
    .createContact({
      name: req.body.name, 
      email: req.body.email,
      location: req.body.location,
      phone: req.body.phone,
      type: req.body.type,
    })
    .then(() => res.json({ message: "Contact created successfully" }))
    .catch(next);
}

function updateContactSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.string(),
    location: Joi.string(),
    type: Joi.string().valid("Corporate office", "Regional office"),
  });
  validateRequest(req, next, schema);
}

function updateContact(req, res, next) {
  contactService
    .updateContact(req.params.id, req.body)
    .then((contact) => res.json(contact))
    .catch(next);
}

function deleteContact(req, res, next) {
  contactService
    .deleteContact(req.params.id)
    .then(() => res.json({ message: "Contact deleted successfully" }))
    .catch(next);
}
