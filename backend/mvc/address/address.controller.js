const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const addressService = require('./address.service');

// Routes
router.get('/', getAllAddresses);
router.post('/', authorize(), createAddressSchema, createAddress);
router.put('/:id', authorize(), updateAddressSchema, updateAddress);
router.delete('/:id', authorize(), deleteAddress);

module.exports = router;

// Controller functions
function getAllAddresses(req, res, next) {
    addressService.getAllAddresses()
        .then(addresses => res.json(addresses))
        .catch(next);
}

function createAddressSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        city: Joi.string().required(),
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string(),
        addressLine3: Joi.string(),
        pincode: Joi.string().required(),
        phone: Joi.string().required(),
        tollfreeNo: Joi.string(),
        email: Joi.string().required(),
        type: Joi.string().valid('Corporate office', 'Regional office').required()
    });
    validateRequest(req, next, schema);
}

function createAddress(req, res, next) {
    console.log("req.body",req.body)
    addressService.addAddress(req.body)
        .then(() => res.json({ message: 'Address created successfully' }))
        .catch(next);
}

function updateAddressSchema(req, res, next) {
    const schema = Joi.object({
        city: Joi.string(),
        name: Joi.string(),
        addressLine1: Joi.string(),
        addressLine2: Joi.string(),
        addressLine3: Joi.string(),
        pincode: Joi.string(),
        phone: Joi.string(),
        tollfreeNo: Joi.array(),
        email: Joi.string(),
        type: Joi.string().valid('Corporate office', 'Regional office')
    });
    validateRequest(req, next, schema);
}

function updateAddress(req, res, next) {
    addressService.updateAddress(req.params.id, req.body)
        .then(address => res.json(address))
        .catch(next);
}

function deleteAddress(req, res, next) {
    addressService.deleteAddress(req.params.id)
        .then(() => res.json({ message: 'Address deleted successfully' }))
        .catch(next);
}
