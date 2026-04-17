import React, { useState } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import UploadResume from './components/UploadResume/UploadResume';
import JobInput from './components/JobInput/JobInput';
import GenerateButton from './components/GenerateButton/GenerateButton';
import OutputDisplay from './components/OutputDisplay/OutputDisplay';
import { FiAlertCircle } from 'react-icons/fi';

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    if (!resumeFile) {
      setError('Please upload your resume (PDF).');
      return;
    }
    if (!jobDescription.trim()) {
      setError('Please provide a job description.');
      return;
    }

    setLoading(true);
    setError('');
    // Optionally keep the previous result visible while generating a new one
    // setResult(''); 

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('jobDescription', jobDescription);

    try {
      const response = await axios.post('https://ai-cover-letter-generator-iilx.onrender.com', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.coverLetter) {
        setResult(response.data.coverLetter);
      } else {
        setError('Received an unexpected response from the server.');
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.error || 
        'An error occurred while generating the cover letter. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>AI Cover Letter</span> Generator
        </h1>
        <p className={styles.subtitle}>Stand out with a highly personalized, AI-crafted cover letter.</p>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.inputSection}>
          <UploadResume onFileSelect={setResumeFile} selectedFile={resumeFile} />
          <JobInput value={jobDescription} onChange={setJobDescription} />
          
          {error && (
            <div className={styles.errorMessage}>
              <FiAlertCircle /> 
              {error}
            </div>
          )}
          
          <GenerateButton 
            onClick={handleGenerate} 
            loading={loading} 
            disabled={!resumeFile || !jobDescription.trim()} 
          />
        </div>

        <div className={styles.outputSection}>
          <OutputDisplay content={result} loading={loading} onRegenerate={handleGenerate} />
        </div>
      </main>
    </div>
  );
}

export default App;
