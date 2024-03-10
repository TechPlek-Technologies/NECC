const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const ciDirectorsService = require("./corporateInformation.service");

// Routes
router.get("/", getAllCiDirectors);
router.post("/", authorize(), createCiDirectorSchema, createCiDirector);
router.put("/:id", authorize(), updateCiDirectorSchema, updateCiDirector);
router.delete("/:id", authorize(), deleteCiDirector);

module.exports = router;

// Controller functions
function getAllCiDirectors(req, res, next) {
  ciDirectorsService
    .getAllCiDirectors()
    .then((ciDirectors) => res.json(ciDirectors))
    .catch(next);
}

function createCiDirectorSchema(req, res, next) {
  const schema = Joi.object({
    position: Joi.string().required(),
    description: Joi.string().allow("").optional(),
  });
  validateRequest(req, next, schema);
}

function createCiDirector(req, res, next) {
  ciDirectorsService
    .createCiDirector(req.body)
    .then(() => res.json({ message: "CiDirector created successfully" }))
    .catch(next);
}

function updateCiDirectorSchema(req, res, next) {
  const schema = Joi.object({
    position: Joi.string(),
    description: Joi.string().allow("").optional(),
  });
  validateRequest(req, next, schema);
}

function updateCiDirector(req, res, next) {
  ciDirectorsService
    .updateCiDirector(req.params.id, req.body)
    .then((ciDirector) => res.json(ciDirector))
    .catch(next);
}

function deleteCiDirector(req, res, next) {
  ciDirectorsService
    .deleteCiDirector(req.params.id)
    .then(() => res.json({ message: "CiDirector deleted successfully" }))
    .catch(next);
}
