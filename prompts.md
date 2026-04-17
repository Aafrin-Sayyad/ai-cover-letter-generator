# Prompts.md

## 📌 Project: AI Cover Letter Generator

This document contains the prompts and assistance I used during the development of this project. Most of the project was implemented manually, and AI was used only for resolving small issues, improving understanding, and refining output quality.

---

## 🟢 1. UI Design & Form Handling

**Prompt Used:**
"How to create a responsive form using HTML, CSS, and JavaScript for input fields like name, skills, and job description?"

**Purpose:**
To understand structuring form inputs and making them responsive.

**Outcome:**

* Designed the form manually using HTML and CSS
* Applied responsiveness using Flexbox and media queries

---

## 🟢 2. Removing Extra Spaces in Input

**Prompt Used:**
"How to remove spaces after commas in a string in JavaScript or Python?"

**Purpose:**
Fix formatting issue in skills input (e.g., "Python, Java, ML")

**Outcome:**

* Implemented string cleaning using `.split()` and `.map().trim()`

---

## 🟢 3. Generating Dynamic Text (Mock AI - Level 1)

**Prompt Used:**
"Generate a simple JavaScript function to create a cover letter using template strings with user inputs"

**Purpose:**
To build initial version without API

**Outcome:**

* Created a function using template literals
* Inserted user details dynamically into the letter

---

## 🟢 4. Connecting to Gemini API

**Prompt Used:**
"How to integrate Google Gemini API in a JavaScript project to generate text?"

**Purpose:**
To upgrade project from mock AI to real AI

**Outcome:**

* Understood API request structure
* Implemented fetch/async-await logic manually

---

## 🟢 5. Prompt Engineering

**Prompt Used:**
"Write a professional prompt for generating a cover letter using name, company, role, skills, and job description"

**Purpose:**
Improve quality of AI-generated response

**Final Prompt Used in Project:**
"Write a professional cover letter for [Name] applying for the role of [Job Role] at [Company]. Use the following skills: [Skills]. Also consider this job description: [Job Description]. Keep the tone formal and concise."

---

## 🟢 6. Loading State Handling

**Prompt Used:**
"How to show a loading spinner or text while waiting for API response in JavaScript?"

**Purpose:**
Improve user experience

**Outcome:**

* Added "Generating..." text during API call
* Removed it after response is received

---

## 🟢 7. Copy to Clipboard Feature

**Prompt Used:**
"How to implement copy to clipboard functionality in JavaScript?"

**Purpose:**
Allow users to easily copy generated cover letter

**Outcome:**

* Used `navigator.clipboard.writeText()`

---

## 🟢 8. API Key Security

**Prompt Used:**
"How to hide API keys in frontend projects using .env file?"

**Purpose:**
Ensure security and follow best practices

**Outcome:**

* Stored API key in `.env`
* Added `.env` to `.gitignore`

---

## 🟢 9. Debugging API Errors

**Prompt Used:**
"Why am I getting API model not found error in Gemini?"

**Purpose:**
Fix integration issues

**Outcome:**

* Identified incorrect model name
* Updated to correct supported model

---

## 🟢 10. General Concept Understanding

**Prompt Used:**
"Explain prompt engineering in simple terms with example"

**Purpose:**
Better understanding for implementation and viva

---

## 📌 Conclusion

This project was primarily built through self-learning and manual coding.
AI tools like ChatGPT were used only for:

* Understanding concepts
* Fixing minor errors
* Improving prompt quality

All core logic, UI design, and integration were implemented and tested manually.

---
