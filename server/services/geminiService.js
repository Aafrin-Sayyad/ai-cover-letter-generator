const { GoogleGenerativeAI } = require("@google/generative-ai");

const geminiApiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(geminiApiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
});

const generateCoverLetter = async (resumeText, jobDescription) => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === "your_key_here") {
    throw new Error("Gemini API key is not configured or is invalid.");
  }

  const prompt = `You are a professional career assistant.

Write a personalized cover letter using:

Candidate Resume:
${resumeText}

Job Description:
${jobDescription}

Requirements:
* 4 well-separated paragraphs
* Strong introduction
* Match skills with job description
* No repetition
* Human-like tone
* Proper formatting (line breaks between paragraphs)

Respond ONLY with the cover letter text.`;

  try {
    const result = await model.generateContent({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
      },
    });

    const response = result.response;

    if (response?.candidates?.length > 0) {
      return response.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Invalid response from Gemini API.");
    }
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    throw new Error("Failed to generate cover letter from Gemini API.");
  }
};

module.exports = { generateCoverLetter };
