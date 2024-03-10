const db = require('_helpers/db');

module.exports = {
    createCiDirector,
    updateCiDirector,
    deleteCiDirector,
    getAllCiDirectors
};

async function createCiDirector(ciDirectorData) {
    return await db.CiDirectors.create(ciDirectorData);
}

async function updateCiDirector(ciDirectorId, ciDirectorData) {
    const ciDirector = await getCiDirectorById(ciDirectorId);
    Object.assign(ciDirector, ciDirectorData);
    await ciDirector.save();
    return ciDirector;
}

async function deleteCiDirector(ciDirectorId) {
    const ciDirector = await getCiDirectorById(ciDirectorId);
    await ciDirector.destroy();
}

async function getCiDirectorById(ciDirectorId) {
    const ciDirector = await db.CiDirectors.findByPk(ciDirectorId);
    if (!ciDirector) throw new Error('CiDirector not found');
    return ciDirector;
}

async function getAllCiDirectors() {
    const ciDirectors = await db.CiDirectors.findAll();
    if (!ciDirectors) throw new Error('CiDirectors not Available');
    return ciDirectors;
}
