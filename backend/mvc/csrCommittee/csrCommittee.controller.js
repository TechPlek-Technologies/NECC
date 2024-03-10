const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const csrCommitteeService = require("./csrCommittee.service");

// Routes
router.get("/", getAllCsrCommittees);
router.post("/", authorize(), createCsrCommitteeSchema, createCsrCommittee);
router.put("/:id", authorize(), updateCsrCommitteeSchema, updateCsrCommittee);
router.delete("/:id", authorize(), deleteCsrCommittee);

module.exports = router;

// Controller functions
function getAllCsrCommittees(req, res, next) {
  csrCommitteeService
    .getAllCsrCommittees()
    .then((csrCommittees) => res.json(csrCommittees))
    .catch(next);
}

function createCsrCommitteeSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    serial: Joi.number(),
  });
  validateRequest(req, next, schema);
}

function createCsrCommittee(req, res, next) {
  csrCommitteeService
    .createCsrCommittee({
      name: req.body.name,
      serial: req.body.serial,
    })
    .then(() => res.json({ message: "CsrCommittee created successfully" }))
    .catch(next);
}

function updateCsrCommitteeSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    serial: Joi.number().required(),
  });
  validateRequest(req,  next, schema);
}

function updateCsrCommittee(req, res, next) {
  csrCommitteeService
    .updateCsrCommittee(req.params.id, req.body)
    .then((csrCommittee) => res.json(csrCommittee))
    .catch(next);
}

function deleteCsrCommittee(req, res, next) {
  csrCommitteeService
    .deleteCsrCommittee(req.params.id)
    .then(() => res.json({ message: "CsrCommittee deleted successfully" }))
    .catch(next);
}
