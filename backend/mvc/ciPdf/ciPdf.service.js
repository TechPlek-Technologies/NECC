const db = require('_helpers/db');

module.exports = {
    createCiPdf,
    updateCiPdf,
    deleteCiPdf,
    getAllCiPdfs
};

async function createCiPdf(params, file) {
    const name = params.name;
    const pdfFileName = file.originalname;
    console.log(name, pdfFileName);
    return await db.CiPdf.create({
        name: name,
        pdfFileName: pdfFileName
    });
}

async function updateCiPdf(ciPdfId, ciPdfData) {
    const ciPdf = await getCiPdfById(ciPdfId);
    Object.assign(ciPdf, ciPdfData);
    await ciPdf.save();
    return ciPdf;
}

async function deleteCiPdf(ciPdfId) {
    const ciPdf = await getCiPdfById(ciPdfId);
    await ciPdf.destroy();
}

async function getCiPdfById(ciPdfId) {
    const ciPdf = await db.CiPdf.findByPk(ciPdfId);
    if (!ciPdf) throw new Error('CiPdf not found');
    return ciPdf;
}

async function getAllCiPdfs() {
    const ciPdfs = await db.CiPdf.findAll();
    if (!ciPdfs) throw new Error('CiPdfs not available');
    return ciPdfs;
}
