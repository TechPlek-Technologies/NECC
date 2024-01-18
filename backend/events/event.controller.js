const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize');
const eventService = require('./event.service');

// routes
router.get('/', authorize(), getAllEvents);
router.get('/:id', authorize(), getEventById);
router.post('/', authorize(), createEventSchema, createEvent);
router.put('/:id', authorize(), updateEventSchema, updateEvent);
router.delete('/:id', authorize(), deleteEvent);
router.get('/sections/:section', authorize(), getEventsBySection);
router.get('/sections', authorize(), getAllSections);

module.exports = router;

function getAllEvents(req, res, next) {
    eventService.getAllEvents()
        .then(events => res.json(events))
        .catch(next);
}

function getEventById(req, res, next) {
    eventService.getEventById(req.params.id)
        .then(event => res.json(event))
        .catch(next);
}


function createEventSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        pdfFile: Joi.string().required(),
        section: Joi.string().required(),
        categoryId: Joi.number().required(),
        // Add more validation for other attributes if needed
    });
    validateRequest(req, next, schema);
}

async function createEvent(req, res, next) {
    try {
        // Extract categoryId from request body or any other source
        const categoryId = req.body.categoryId;

        // Create the event with the associated categoryId
        await eventService.createEvent({
            name: req.body.name,
            pdfFile: req.body.pdfFile,
            section: req.body.section,
            categoryId: categoryId, // Associate the event with the specified category
        });

        res.json({ message: 'Event created successfully' });
    } catch (error) {
        next(error);
    }
}

function updateEventSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().empty(''),
        // Add more validation for other attributes if needed
    });
    validateRequest(req, next, schema);
}

function updateEvent(req, res, next) {
    eventService.updateEvent(req.params.id, req.body)
        .then(event => res.json(event))
        .catch(next);
}

function deleteEvent(req, res, next) {
    eventService.deleteEvent(req.params.id)
        .then(() => res.json({ message: 'Event deleted successfully' }))
        .catch(next);
}

function getEventsBySection(req, res, next) {

    const section = req.params.section;

    eventService.getEventsBySection(section)
        .then(events => res.json(events))
        .catch(next);
}

function getAllSections(req, res, next) {
    eventService.getAllSections()
        .then(sections => res.json(sections))
        .catch(next);
}