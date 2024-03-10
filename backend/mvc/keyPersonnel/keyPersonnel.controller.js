const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const keyPersonnelService = require("./keyPersonnel.service");

// Routes
router.get("/", getAllKeyPersonnel);
router.post("/", authorize(), createKeyPersonnelSchema, createKeyPersonnel);
router.put("/:id", authorize(), updateKeyPersonnelSchema, updateKeyPersonnel);
router.delete("/:id", authorize(), deleteKeyPersonnel);

module.exports = router;

// Controller functions
function getAllKeyPersonnel(req, res, next) {
  keyPersonnelService
    .getAllKeyPersonnel()
    .then((keyPersonnel) => res.json(keyPersonnel))
    .catch(next);
}

function createKeyPersonnelSchema(req, res, next) {
  const schema = Joi.object({
    position: Joi.string().required(),
    description: Joi.string().allow("").optional(),
  });
  validateRequest(req, next, schema);
}

function createKeyPersonnel(req, res, next) {
  keyPersonnelService
    .createKeyPersonnel(req.body)
    .then(() => res.json({ message: "Key personnel created successfully" }))
    .catch(next);
}

function updateKeyPersonnelSchema(req, res, next) {
  const schema = Joi.object({
    position: Joi.string(),
    description: Joi.string().allow("").optional(),
  });
  validateRequest(req, next, schema);
}

function updateKeyPersonnel(req, res, next) {
  keyPersonnelService
    .updateKeyPersonnel(req.params.id, req.body)
    .then((keyPersonnel) => res.json(keyPersonnel))
    .catch(next);
}

function deleteKeyPersonnel(req, res, next) {
  keyPersonnelService
    .deleteKeyPersonnel(req.params.id)
    .then(() => res.json({ message: "Key personnel deleted successfully" }))
    .catch(next);
}
