# AI Cover Letter Generator

A complete production-ready AI SaaS project that generates highly personalized cover letters based on a candidate's resume (PDF) and the provided job description. Built using React, Express, and Google Gemini API.

## Features
- **Upload Resume**: Upload PDF resumes and extract text via `pdf-parse`.
- **Job Description**: Text area for job requirements.
- **AI Generation**: Uses Google Gemini 1.5 Flash to automatically compose a 4-paragraph matching cover letter.
- **Modern UI**: Built with React and structured using CSS Modules with premium glassmorphism styling.
- **Actions**: Copy to clipboard and Download as PDF.

## Project Structure
- `/client`: React Application (Vite)
- `/server`: Node.js Express Backend

---

## 🚀 Setup Instructions

### 1. Backend Setup

1. Open a terminal and navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```
4. Get your Gemini API Key from [Google AI Studio](https://aistudio.google.com/) and add it to `.env`:
   ```env
   PORT=5000
   GEMINI_API_KEY=your_actual_api_key_here
   ```
5. Start the server:
   ```bash
   npm start
   # runs on http://localhost:5000
   ```

### 2. Frontend Setup

1. Open a separate terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   # runs on http://localhost:5173
   ```

---

## Sample API Request/Response

### Request
```http
POST /api/generate
Content-Type: multipart/form-data

resume: [File: resume.pdf]
jobDescription: "Looking for a Senior React Developer with experience in Node.js and AI integrations..."
```

### Response
```json
{
  "success": true,
  "coverLetter": "Dear Hiring Manager,\n\nI am writing to express my strong interest in the Senior React Developer position...\n\n(4 paragraphs of personalized letter...)",
  "resumeExtractedLength": 3254
}
```
