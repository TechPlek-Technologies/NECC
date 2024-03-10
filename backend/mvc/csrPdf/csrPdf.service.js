const db = require('_helpers/db');

module.exports = {
    createCsrPdf,
    updateCsrPdf,
    deleteCsrPdf,
    getAllCsrPdfs
};

async function createCsrPdf(params,file) {
    const name = params.name;
    const pdfFileName = file.originalname;
    console.log(name,pdfFileName)
    return await db.CsrPdf.create({
        name: name,
        pdfFileName: pdfFileName
    });

    
}

async function updateCsrPdf(csrPdfId, csrPdfData) {
    const csrPdf = await getCsrPdfById(csrPdfId);
    Object.assign(csrPdf, csrPdfData);
    await csrPdf.save();
    return csrPdf;
}

async function deleteCsrPdf(csrPdfId) {
    const csrPdf = await getCsrPdfById(csrPdfId);
    await csrPdf.destroy();
}

async function getCsrPdfById(csrPdfId) {
    const csrPdf = await db.CsrPdf.findByPk(csrPdfId);
    if (!csrPdf) throw new Error('CsrPdf not found');
    return csrPdf;
}

async function getAllCsrPdfs() {
    const csrPdfs = await db.CsrPdf.findAll();
    if (!csrPdfs) throw new Error('CsrPdfs not available');
    return csrPdfs;
}
