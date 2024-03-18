const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const contentService = require("./content.service");

// routes
router.get("/", getAllContents);
router.get("/:id",  getContentById);
router.get("/serial/:serial",  getContentBySerial);
router.post("/", authorize(), createContentSchema, createContent);
router.put("/:id", authorize(), updateContentSchema, updateContent);
router.delete("/:id", authorize(), deleteContent);

module.exports = router;

function getAllContents(req, res, next) {
  PageContent
    .getAllContents()
    .then((contents) => res.json(contents))
    .catch(next);
}

function getContentBySerial(req, res, next) {
  contentService
    .getContentBySerial(req.params.serial)
    .then((content) => res.json(content))
    .catch(next);
}

function getContentById(req, res, next) {
  contentService
    .getContentById(req.params.id)
    .then((content) => res.json(content))
    .catch(next);
}

function createContentSchema(req, res, next) {
  const schema = Joi.object({
    serial: Joi.number(),
    designation: Joi.string().required(),
    summary: Joi.string().required(),
    description: Joi.string()
    // Add more validation for other attributes if needed
  });
  validateRequest(req, next, schema);
}

function createContent(req, res, next) {
  contentService
    .createContent(req.body)
    .then(() => res.json({ message: "Content created successfully" }))
    .catch(next);
}

function updateContentSchema(req, res, next) {
  const schema = Joi.object({
    serial: Joi.number().empty(""),
    designation: Joi.string().empty(""),
    summary: Joi.string().empty(""),
    description: Joi.string().empty("")
    // Add more validation for other attributes if needed
  });
  validateRequest(req, next, schema);
}

function updateContent(req, res, next) {
  contentService
    .updateContent(req.params.id, req.body)
    .then((content) => res.json(content))
    .catch(next);
}

function deleteContent(req, res, next) {
  contentService
    .deleteContent(req.params.id)
    .then(() => res.json({ message: "Content deleted successfully" }))
    .catch(next);
}
