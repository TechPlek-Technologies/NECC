const db = require('_helpers/db');

module.exports = {
    createCsrCommittee,
    updateCsrCommittee,
    deleteCsrCommittee,
    getAllCsrCommittees
};

async function createCsrCommittee(csrCommitteeData) {
    return await db.CsrCommittee.create(csrCommitteeData);
}

async function updateCsrCommittee(csrCommitteeId, csrCommitteeData) {
    const csrCommittee = await getCsrCommitteeById(csrCommitteeId);
    Object.assign(csrCommittee, csrCommitteeData);
    await csrCommittee.save();
    return csrCommittee;
}

async function deleteCsrCommittee(csrCommitteeId) {
    const csrCommittee = await getCsrCommitteeById(csrCommitteeId);
    await csrCommittee.destroy();
}

async function getCsrCommitteeById(csrCommitteeId) {
    const csrCommittee = await db.CsrCommittee.findByPk(csrCommitteeId);
    if (!csrCommittee) throw new Error('CsrCommittee not found');
    return csrCommittee;
}

async function getAllCsrCommittees() {
    const csrCommittees = await db.CsrCommittee.findAll();
    if (!csrCommittees) throw new Error('CsrCommittees not available');
    return csrCommittees;
}
