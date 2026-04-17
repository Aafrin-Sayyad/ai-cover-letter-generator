const pdfParse = require('pdf-parse');

const extractTextFromPDF = async (buffer) => {
  try {
    if (!buffer || buffer.length === 0) {
      throw new Error('Invalid or empty PDF buffer');
    }

    const data = await pdfParse(buffer);

    let text = data.text.replace(/\s+/g, ' ').trim();

    return text;
  } catch (error) {
    console.error('PDF PARSE ACTUAL ERROR:', error); // IMPORTANT
    throw new Error(error.message || 'Failed to parse PDF file.');
  }
};

module.exports = { extractTextFromPDF };