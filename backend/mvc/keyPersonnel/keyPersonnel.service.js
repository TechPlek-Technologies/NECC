const db = require('_helpers/db');

module.exports = {
    createKeyPersonnel,
    updateKeyPersonnel,
    deleteKeyPersonnel,
    getAllKeyPersonnel
};

async function createKeyPersonnel(keyPersonnelData) {
    return await db.KeyPersonnel.create(keyPersonnelData);
}

async function updateKeyPersonnel(keyPersonnelId, keyPersonnelData) {
    const keyPersonnel = await getKeyPersonnelById(keyPersonnelId);
    Object.assign(keyPersonnel, keyPersonnelData);
    await keyPersonnel.save();
    return keyPersonnel;
}

async function deleteKeyPersonnel(keyPersonnelId) {
    const keyPersonnel = await getKeyPersonnelById(keyPersonnelId);
    await keyPersonnel.destroy();
}

async function getKeyPersonnelById(keyPersonnelId) {
    const keyPersonnel = await db.KeyPersonnel.findByPk(keyPersonnelId);
    if (!keyPersonnel) throw new Error('Key personnel not found');
    return keyPersonnel;
}

async function getAllKeyPersonnel() {
    const keyPersonnel = await db.KeyPersonnel.findAll();
    if (!keyPersonnel) throw new Error('Key personnel not available');
    return keyPersonnel;
}
