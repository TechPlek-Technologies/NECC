const express = require("express");
const router = express.Router();
const ciUploads = require('../../_middleware/ciUploads');
const authorize = require("_middleware/authorize");
const ciPdfService = require("./ciPdf.service");

// Routes
router.get("/", getAllCiPdfs);
router.post("/", authorize(), ciUploads.single('file'), createCiPdf);
router.put("/:id", authorize(), ciUploads.single('file'), updateCiPdf);
router.delete("/:id", authorize(), deleteCiPdf);

module.exports = router;

// Controller functions
function getAllCiPdfs(req, res, next) {
    ciPdfService
        .getAllCiPdfs()
        .then((ciPdfs) => res.json(ciPdfs))
        .catch(next);
}

function createCiPdf(req, res, next) {
    const params = req.body;
    const file = req.file; // Assuming multer or similar middleware handles file upload
    ciPdfService
        .createCiPdf(params, file)
        .then(() => res.json({ message: "CiPdf created successfully" }))
        .catch(next);
}

function updateCiPdf(req, res, next) {
    const pdfFileId = req.params.id;
    const params = req.body;
    ciPdfService
        .updateCiPdf(pdfFileId, params)
        .then((ciPdf) => res.json(ciPdf))
        .catch(next);
}

function deleteCiPdf(req, res, next) {
    ciPdfService
        .deleteCiPdf(req.params.id)
        .then(() => res.json({ message: "CiPdf deleted successfully" }))
        .catch(next);
}
