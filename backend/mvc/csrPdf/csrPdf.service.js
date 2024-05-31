const db = require('_helpers/db');
const fs = require('fs').promises;
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

async function deleteCsrPdf(csrPdfId,res) {
    
    try {
        // Retrieve the PDF file record from the database
        const pdfFile = await getCsrPdfById(csrPdfId);
        
        if (!pdfFile) {
            res.status(404).send("File not found");
            return;
        }
        
        // Get the file path from the database record
        const filename=pdfFile.dataValues?.pdfFileName;
        const filepath="./csrUploads/"+filename;
        console.log("filepath",filepath)

        if (!filepath) {
            res.status(400).send("File path not found in record");
            return;
        }

        // Delete the file from the file system
        await fs.unlink(filepath);
        console.log("Deleted file:", filepath);

        // Delete the record from the database
        await pdfFile.destroy();

        // Send a success response
        res.status(200).send("File deleted successfully");
    } catch (err) {
        console.error("Error deleting file:", err);
        res.status(500).send("Failed to delete file");
    }
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
