const express = require('express');
const router = express.Router();
const upload = require('../../_middleware/upload');
const authorize = require('../../_middleware/authorize');
const pdfFileService = require('./pdfFile.service');

// Routes
router.get('/pdfFiles',authorize(), getAllPdfFiles);
router.get('/pdfFiles/:id',authorize(), getPdfFileById);
router.post('/pdfFiles',authorize(),upload.single('file'), createPdfFile);
router.put('/pdfFiles/:id',authorize(),upload.single('file'), updatePdfFile);
router.delete('/pdfFiles/:id',authorize(), deletePdfFile);
router.get('/pdfFiles/sections/:section',authorize(), getPdfFilesBySection);
router.get('/pdfFiles/pages/:page',authorize(), getPdfFilesByPages);
router.get('/pdfFiles/sections',authorize(), getAllSections);

module.exports = router;

// Controller functions

async function getAllPdfFiles(req, res, next) {
    try {
        const pdfFiles = await pdfFileService.getAllPdfFiles();
        res.json(pdfFiles);
    } catch (error) {
        next(error);
    }
}

async function getPdfFileById(req, res, next) {
    try {
        const pdfFileId = req.params.id;
        const pdfFile = await pdfFileService.getPdfFileById(pdfFileId);
        res.json(pdfFile);
    } catch (error) {
        next(error);
    }
}

async function createPdfFile(req, res, next) {

    try {
        const params = req.body;
        const file = req.file; // Assuming multer or similar middleware handles file upload
        console.log("hello")
        await pdfFileService.createPdfFile(params, file);
        res.json({ message: 'PDF file created successfully' });
    } catch (error) {
        next(error);
    }
}

async function updatePdfFile(req, res, next) {
    try {
        const pdfFileId = req.params.id;
        const params = req.body;
        await pdfFileService.updatePdfFile(pdfFileId, params);
        res.json({ message: 'PDF file updated successfully' });
    } catch (error) {
        next(error);
    }
}

async function deletePdfFile(req, res, next) {
    try {
        const pdfFileId = req.params.id;
        await pdfFileService.deletePdfFile(pdfFileId);
        res.json({ message: 'PDF file deleted successfully' });
    } catch (error) {
        next(error);
    }
}

async function getPdfFilesBySection(req, res, next) {
    try {
        const section = req.params.section;
        const pdfFiles = await pdfFileService.getPdfFilesBySection(section);
        res.json(pdfFiles);
    } catch (error) {
        next(error);
    }
}

async function getPdfFilesByPages(req, res, next) {
    try {
        const page = req.params.page;
        const pdfFiles = await pdfFileService.getPdfFilesByPages(page);
        res.json(pdfFiles);
    } catch (error) {
        next(error);
    }
}

async function getAllSections(req, res, next) {
    try {
        const sections = await pdfFileService.getAllSections();
        res.json(sections);
    } catch (error) {
        next(error);
    }
}
