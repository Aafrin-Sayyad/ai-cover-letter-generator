import React from 'react';
import styles from './JobInput.module.css';

const JobInput = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.label}>2. Job Description</h2>
      <div className={styles.inputWrapper}>
        <textarea
          className={`${styles.textarea} glass-panel`}
          placeholder="Paste the job description or requirements here..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default JobInput;
