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
    return await db.Section.findAll();
}

async function getEventById(id) {
    return await getEvent(id);
}

async function createEvent(params) {
    console.log("hello",params)
   
    const categoryName = params.name;
    const pagesID = params.pagesID;

    // Check if categoryName and categoryID already exist in the database
    const existingEvent = await db.Section.findOne({
      where: {
        name: categoryName,
        pagesID: pagesID
      }
    });

    // If an event with the same name and categoryID already exists, return an error
    if (existingEvent) {
      return res.status(400).json({ message: "An event with the same name and categoryID already exists" });
    }
    // save event
    await db.Section.create(params);
}

async function updateEvent(id, params) {
    const event = await getEvent(id);

    // validate
    const nameChanged = params.name && event.name !== params.name;
    if (nameChanged && await db.Section.findOne({ where: { name: params.name } })) {
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
    const event = await db.Section.findAll({
        where: { pagesID: categoryID }
    });

    return event;
}


// helper functions

async function getEvent(id) {
    const event = await db.Section.findByPk(id);
    if (!event) throw 'Event not found';
    return event;
}
