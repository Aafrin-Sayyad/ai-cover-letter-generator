const express = require('express');
const multer = require('multer');
const { extractTextFromPDF } = require('../utils/pdfParser');
const { generateCoverLetter } = require('../services/geminiService');

const router = express.Router();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed.'), false);
    }
  }
});

// Single endpoint to handle upload and generation
router.post('/generate', upload.single('resume'), async (req, res, next) => {
  try {
    const { jobDescription } = req.body;
    
    if (!jobDescription) {
      return res.status(400).json({ error: 'Job description is required.' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Resume PDF file is required.' });
    }

    // 1. Extract text from PDF
    const resumeText = await extractTextFromPDF(req.file.buffer);

    // 2. Generate cover letter using Gemini API
    const coverLetter = await generateCoverLetter(resumeText, jobDescription);

    // 3. Return response
    res.json({
      success: true,
      coverLetter: coverLetter,
      resumeExtractedLength: resumeText.length
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
