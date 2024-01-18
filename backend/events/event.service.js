const db = require('_helpers/db');

module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
    getEventsBySection,
    getAllSections
};

async function getAllEvents() {
    return await db.Event.findAll();
}

async function getEventById(id) {
    return await getEvent(id);
}

async function createEvent(params) {
    // validate
    if (await db.Event.findOne({ where: { name: params.name } })) {
        throw 'Event with name "' + params.name + '" already exists';
    }

    // save event
    await db.Event.create(params);
}

async function updateEvent(id, params) {
    const event = await getEvent(id);

    // validate
    const nameChanged = params.name && event.name !== params.name;
    if (nameChanged && await db.Event.findOne({ where: { name: params.name } })) {
        throw 'Event with name "' + params.name + '" already exists';
    }

    // copy params to event and save
    Object.assign(event, params);
    await event.save();

    return event.get();
}

async function deleteEvent(id) {
    const event = await getEvent(id);
    await event.destroy();
}

async function getEventsBySection(section) {
    const events = await db.Event.findAll({
        where: { section: section },
        attributes: ['id', 'name', 'pdfFile', 'section', 'categoryId', 'createdAt', 'updatedAt']
    });

    return events;
}

async function getAllSections() {
    return await db.Event.findAll();
}



// helper functions

async function getEvent(id) {
    const event = await db.Event.findByPk(id);
    if (!event) throw 'Event not found';
    return event;
}
