const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const pageService = require("./page.service");

// routes
router.get("/", getAllPages);
router.get("/:id", authorize(), getPageById);
router.get("/name/:name", getPageDataByName);
router.post("/", authorize(), createPageSchema, createPage);
router.put("/:id", authorize(), updatePageSchema, updatePage);
router.delete("/:id", authorize(), deletePage);

module.exports = router;

function getAllPages(req, res, next) {
  pageService
    .getAllPages()
    .then((pages) => res.json(pages))
    .catch(next);
}

function getPageDataByName(req, res, next) {
    pageService
        .getPageDataByName(req.params.name)
        .then((page) => res.json(page))
        .catch((error) => next(error));
}

function getPageById(req, res, next) {
  pageService
    .getPageById(req.params.id)
    .then((page) => res.json(page))
    .catch(next);
}

function createPageSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    // Add more validation for other attributes if needed
  });
  validateRequest(req, next, schema);
}

function createPage(req, res, next) {
  pageService
    .createPage(req.body)
    .then(() => res.json({ message: "Page created successfully" }))
    .catch(next);
}

function updatePageSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().empty(""),
    // Add more validation for other attributes if needed
  });
  validateRequest(req, next, schema);
}

function updatePage(req, res, next) {
  pageService
    .updatePage(req.params.id, req.body)
    .then((page) => res.json(page))
    .catch(next);
}

function deletePage(req, res, next) {
  pageService
    .deletePage(req.params.id)
    .then(() => res.json({ message: "Page deleted successfully" }))
    .catch(next);
}
