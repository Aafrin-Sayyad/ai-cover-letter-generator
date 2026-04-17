import React, { useRef } from 'react';
import styles from './UploadResume.module.css';
import { FiUploadCloud, FiFileText, FiCheckCircle } from 'react-icons/fi';

const UploadResume = ({ onFileSelect, selectedFile }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      onFileSelect(file);
    } else if (file) {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        onFileSelect(file);
      } else {
        alert('Please upload a valid PDF file.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.label}>1. Upload Resume (PDF)</h2>
      <div 
        className={`${styles.dropzone} ${selectedFile ? styles.hasFile : ''} glass-panel`}
        onClick={() => fileInputRef.current.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input 
          type="file" 
          accept=".pdf" 
          onChange={handleFileChange} 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
        />
        
        {selectedFile ? (
          <div className={styles.fileInfo}>
            <FiCheckCircle className={styles.successIcon} />
            <div className={styles.fileDetails}>
              <span className={styles.fileName}>{selectedFile.name}</span>
              <span className={styles.fileSize}>{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</span>
            </div>
            <span className={styles.changeText}>Click to change</span>
          </div>
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.iconWrapper}>
              <FiUploadCloud className={styles.uploadIcon} />
            </div>
            <span className={styles.mainText}>Click to upload or drag and drop</span>
            <span className={styles.subText}>PDF up to 5MB</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadResume;
