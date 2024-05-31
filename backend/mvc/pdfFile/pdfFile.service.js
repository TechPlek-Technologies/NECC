const db = require('_helpers/db');
const fs = require('fs').promises;
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

    const pdfName = params.name;
    const eventID = params.eventID;

    // Check if categoryName and categoryID already exist in the database
    const existingEvent = await db.PdfFile.findOne({
      where: {
        name: pdfName,
        eventID: eventID
      }
    });

    // If an event with the same name and categoryID already exists, return an error
    if (existingEvent) {
      return res.status(400).json({ message: "An event with the same name and categoryID already exists" });
    }

    // Save file to disk or any storage mechanism
    const pdfFileName = file.originalname;
    const pdfFilePath = './uploads/' + file.filename;
   

    // Save PDF file
    await db.PdfFile.create({ ...params, pdfFileName, pdfFilePath });
}

async function updatePdfFile(id, params,res) {
    const pdfFile = await getPdfFile(id);

    const filepath=pdfFile.dataValues?.pdfFilePath;

    await fs.unlink(filepath);
        console.log("Deleted file:", filepath);

    // copy params to PDF file and save
    Object.assign(pdfFile, params);
    await pdfFile.save();

    return pdfFile.get();
}

async function deletePdfFile(id, res) {
    try {
        // Retrieve the PDF file record from the database
        const pdfFile = await getPdfFile(id);
        if (!pdfFile) {
            res.status(404).send("File not found");
            return;
        }

        // Get the file path from the database record
        const filepath=pdfFile.dataValues?.pdfFilePath;
        if (!filepath) {
            console.log("filepath",filepath)
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

async function getPdfFilesBySection(eventId) {
    const pdfFiles = await db.PdfFile.findAll({
        where: { eventId: eventId }
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
