import React from 'react';
import styles from './GenerateButton.module.css';
import { FiZap, FiLoader } from 'react-icons/fi';

const GenerateButton = ({ onClick, loading, disabled }) => {
  return (
    <button 
      className={`${styles.button} ${loading ? styles.loading : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      <div className={styles.content}>
        {loading ? (
          <>
            <FiLoader className={styles.spinner} />
            <span>Crafting your letter...</span>
          </>
        ) : (
          <>
            <FiZap className={styles.icon} />
            <span>Generate Cover Letter</span>
          </>
        )}
      </div>
      <div className={styles.glowEffect}></div>
    </button>
  );
};

export default GenerateButton;
