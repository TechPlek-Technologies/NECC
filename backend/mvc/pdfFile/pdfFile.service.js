const db = require('_helpers/db');

module.exports = {
    getAllPdfFiles,
    getPdfFileById,
    createPdfFile,
    updatePdfFile,
    deletePdfFile,
    getPdfFilesBySection,
    getAllSections,
    getPdfFilesByPages
};

async function getAllPdfFiles() {
    return await db.PdfFile.findAll();
}

async function getPdfFileById(id) {
    return await getPdfFile(id);
}

async function createPdfFile(params, file) {
    // validate
    if (await db.PdfFile.findOne({ where: { name: params.name } })) {
        throw 'Event with name "' + params.name + '" already exists';
    }


    // Save file to disk or any storage mechanism
    const pdfFileName = file.originalname;
    const pdfFilePath = './uploads/' + file.filename;

    // Save PDF file
    await db.PdfFile.create({ ...params, pdfFileName, pdfFilePath });
}

async function updatePdfFile(id, params) {
    const pdfFile = await getPdfFile(id);

    // validate
    const nameChanged = params.name && pdfFile.name !== params.name;
    if (nameChanged && await db.PdfFile.findOne({ where: { name: params.name } })) {
        throw 'PDF file with name "' + params.name + '" already exists';
    }

    // copy params to PDF file and save
    Object.assign(pdfFile, params);
    await pdfFile.save();

    return pdfFile.get();
}

async function deletePdfFile(id) {
    const pdfFile = await getPdfFile(id);
    await pdfFile.destroy();
}

async function getPdfFilesBySection(section) {
    const pdfFiles = await db.PdfFile.findAll({
        where: { section: section },
        attributes: ['id', 'name', 'pdfFile', 'section', 'categoryId', 'createdAt', 'updatedAt']
    });

    return pdfFiles;
}
async function getPdfFilesByPages(page) {
    const pdfFiles = await db.PdfFile.findAll({
        where: { page: page },
        attributes: ['id', 'name', 'pdfFile', 'section', 'categoryId', 'createdAt', 'updatedAt']
    });

    return pdfFiles;
}

async function getAllSections() {
    return await db.PdfFile.findAll();
}

// helper functions

async function getPdfFile(id) {
    const pdfFile = await db.PdfFile.findByPk(id);
    if (!pdfFile) throw 'PDF file not found';
    return pdfFile;
}
