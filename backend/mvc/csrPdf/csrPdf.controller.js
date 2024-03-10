const express = require("express");
const router = express.Router();
const csrUploads = require('../../_middleware/csrUploads');
const authorize = require("_middleware/authorize");
const csrPdfService = require("./csrPdf.service");

// Routes
router.get("/", getAllCsrPdfs);
router.post("/", authorize(),csrUploads.single('file'), createCsrPdf);
router.put("/:id", authorize(), updateCsrPdf);
router.delete("/:id", authorize(), deleteCsrPdf);

module.exports = router;

// Controller functions
function getAllCsrPdfs(req, res, next) {
    csrPdfService
        .getAllCsrPdfs()
        .then((csrPdfs) => res.json(csrPdfs))
        .catch(next);
}



function createCsrPdf(req, res, next) {
    const params = req.body;
    const file = req.file; // Assuming multer or similar middleware handles file upload
    csrPdfService
        .createCsrPdf(params,file)
        .then(() => res.json({ message: "CsrPdf created successfully" }))
        .catch(next);
}


function updateCsrPdf(req, res, next) {
    const pdfFileId = req.params.id;
        const params = req.body;
    csrPdfService
        .updateCsrPdf(pdfFileId,params)
        .then((csrPdf) => res.json(csrPdf))
        .catch(next);
}

function deleteCsrPdf(req, res, next) {
    csrPdfService
        .deleteCsrPdf(req.params.id)
        .then(() => res.json({ message: "CsrPdf deleted successfully" }))
        .catch(next);
}
