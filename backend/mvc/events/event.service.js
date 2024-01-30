const db = require('_helpers/db');

module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
    getEventByCategory
};

async function getAllEvents() {
    return await db.Event.findAll();
}

async function getEventById(id) {
    return await getEvent(id);
}

async function createEvent(params) {
   

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

async function getEventByCategory(categoryID) {
    const event = await db.Event.findAll({
        where: { categoryID: categoryID }
    });

    return event;
}


// helper functions

async function getEvent(id) {
    const event = await db.Event.findByPk(id);
    if (!event) throw 'Event not found';
    return event;
}
