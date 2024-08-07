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
   
    const categoryName = params.name;
    const categoryID = params.categoryID;

    // Check if categoryName and categoryID already exist in the database
    const existingEvent = await db.Event.findOne({
      where: {
        name: categoryName,
        categoryID: categoryID
      }
    });

    // If an event with the same name and categoryID already exists, return an error
    if (existingEvent) {
      return res.status(400).json({ message: "An event with the same name and categoryID already exists" });
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
