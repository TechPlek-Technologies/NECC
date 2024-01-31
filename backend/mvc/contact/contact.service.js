const db = require('_helpers/db');

module.exports = {
    createContact,
    updateContact,
    deleteContact
};

async function createContact(contactData) {
    return await db.Contact.create(contactData);
}

async function updateContact(contactId, contactData) {
    const contact = await getContactById(contactId);
    Object.assign(contact, contactData);
    await contact.save();
    return contact;
}

async function deleteContact(contactId) {
    const contact = await getContactById(contactId);
    await contact.destroy();
}

async function getContactById(contactId) {
    const contact = await db.Contact.findByPk(contactId);
    if (!contact) throw new Error('Contact not found');
    return contact;
}
