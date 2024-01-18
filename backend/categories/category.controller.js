const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const categoryService = require('./category.service');

// routes
router.get('/', authorize(), getAllCategories);
router.get('/:id', authorize(), getCategoryById);
router.post('/', authorize(), createCategorySchema, createCategory);
router.put('/:id', authorize(), updateCategorySchema, updateCategory);
router.delete('/:id', authorize(), deleteCategory);

module.exports = router;

function getAllCategories(req, res, next) {
    categoryService.getAllCategories()
        .then(categories => res.json(categories))
        .catch(next);
}

function getCategoryById(req, res, next) {
    categoryService.getCategoryById(req.params.id)
        .then(category => res.json(category))
        .catch(next);
}

function createCategorySchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        // Add more validation for other attributes if needed
    });
    validateRequest(req, next, schema);
}

function createCategory(req, res, next) {
    categoryService.createCategory(req.body)
        .then(() => res.json({ message: 'Category created successfully' }))
        .catch(next);
}

function updateCategorySchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().empty(''),
        // Add more validation for other attributes if needed
    });
    validateRequest(req, next, schema);
}

function updateCategory(req, res, next) {
    categoryService.updateCategory(req.params.id, req.body)
        .then(category => res.json(category))
        .catch(next);
}

function deleteCategory(req, res, next) {
    categoryService.deleteCategory(req.params.id)
        .then(() => res.json({ message: 'Category deleted successfully' }))
        .catch(next);
}
