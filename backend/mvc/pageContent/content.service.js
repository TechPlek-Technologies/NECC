const db = require('_helpers/db');

module.exports = {
    getAllContents,
    getContentById,
    createContent,
    updateContent,
    deleteContent,
    getContentBySerial
};

async function getAllContents() {
    return await db.Content.findAll();
}

async function getContentById(id) {
    return await getContent(id);
}

async function getContentBySerial(serial) {
    try {
        const content = await db.Content.findOne({
            where: { serial: serial }
        });

        if (!content) {
            throw new Error('Content not found');
        }

        return content;
    } catch (error) {
        throw new Error('Error fetching content: ' + error.message);
    }
}

async function createContent(params) {
   
    await db.Content.create(params);
}

async function updateContent(id, params) {
    const content = await getContent(id);

    const serialChanged = params.serial && content.serial !== params.serial;
    if (serialChanged && await db.Content.findOne({ where: { serial: params.serial } })) {
        throw 'Content with serial "' + params.serial + '" already exists';
    }

    Object.assign(content, params);
    await content.save();

    return content.get();
}

async function deleteContent(id) {
    const content = await getContent(id);
    await content.destroy();
}

async function getContent(id) {
    const content = await db.Content.findByPk(id);
    if (!content) throw 'Content not found';
    return content;
}
