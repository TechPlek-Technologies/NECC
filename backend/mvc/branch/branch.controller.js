const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const branchService = require("./branch.service");

// Routes
router.get("/", getAllBranches);
router.post("/", authorize(), createBranchSchema, createBranch);
router.put("/:id", authorize(), updateBranchSchema, updateBranch);
router.delete("/:id", authorize(), deleteBranch);

module.exports = router;

// Controller functions
function getAllBranches(req, res, next) {
  branchService
    .getAllBranches()
    .then((branches) => res.json(branches))
    .catch(next);
}

function createBranchSchema(req, res, next) {
  const schema = Joi.object({
    branch: Joi.string().required(),
    personName: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    address1: Joi.string().required(),
    address2: Joi.string().required(),
    phone: Joi.string(),
    mobile: Joi.string(),
    branchCode: Joi.string().required(),
    gtag: Joi.string().required(),
    country: Joi.string().required(),
    email: Joi.string(),
  });
  validateRequest(req, next, schema);
}

function createBranch(req, res, next) {
  branchService
    .addBranch(req.body)
    .then(() => res.json({ message: "Branch created successfully" }))
    .catch(next);
}

function updateBranchSchema(req, res, next) {
  const schema = Joi.object({
    branch: Joi.string(),
    personName: Joi.string(),
    state: Joi.string(),
    city: Joi.string(),
    address1: Joi.string(),
    address2: Joi.string(),
    phone: Joi.string(),
    mobile: Joi.string(),
    branchCode: Joi.string(),
    gtag: Joi.string(),
    country: Joi.string(),
    email: Joi.string(),
  });
  validateRequest(req, next, schema);
}

function updateBranch(req, res, next) {
  branchService
    .updateBranch(req.params.id, req.body)
    .then((branch) => res.json(branch))
    .catch(next);
}

function deleteBranch(req, res, next) {
  branchService
    .deleteBranch(req.params.id)
    .then(() => res.json({ message: "Branch deleted successfully" }))
    .catch(next);
}
