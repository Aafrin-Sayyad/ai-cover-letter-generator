import React, { useState } from 'react';
import styles from './OutputDisplay.module.css';
import { FiCopy, FiDownload, FiCheck, FiRefreshCw, FiFileText } from 'react-icons/fi';
import jsPDF from 'jspdf';

const OutputDisplay = ({ content, loading, onRegenerate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Add styling for the PDF
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxWidth = pageWidth - margin * 2;
    
    // Split text to handle line breaks and wrapping
    const textLines = doc.splitTextToSize(content, maxWidth);
    
    let y = margin;
    doc.text(textLines, margin, y);
    
    doc.save('cover-letter.pdf');
  };

  if (loading) {
    return (
      <div className={`${styles.container} ${styles.loadingContainer} glass-panel`}>
        <div className={styles.loadingPulse}></div>
        <div className={styles.loadingPulse} style={{ width: '80%', animationDelay: '0.2s' }}></div>
        <div className={styles.loadingPulse} style={{ width: '90%', animationDelay: '0.4s' }}></div>
        <div className={styles.loadingPulse} style={{ width: '60%', animationDelay: '0.6s' }}></div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className={`${styles.container} ${styles.emptyContainer} glass-panel`}>
        <FiFileText className={styles.emptyIcon} />
        <h3 className={styles.emptyTitle}>Your cover letter will appear here</h3>
        <p className={styles.emptyText}>Fill in the details on the left and hit generate to craft your personalized cover letter.</p>
      </div>
    );
  }

  // Split content by paragraphs to preserve spacing
  const paragraphs = content.split('\n\n').filter(p => p.trim() !== '');

  return (
    <div className={`${styles.container} glass-panel`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Generated Cover Letter</h3>
        <div className={styles.actions}>
          <button onClick={handleCopy} className={styles.actionBtn} title="Copy to clipboard">
            {copied ? <FiCheck className={styles.successIcon} /> : <FiCopy />}
          </button>
          <button onClick={handleDownloadPDF} className={styles.actionBtn} title="Download as PDF">
            <FiDownload />
          </button>
          {onRegenerate && (
            <button onClick={onRegenerate} className={styles.actionBtn} title="Regenerate">
              <FiRefreshCw />
            </button>
          )}
        </div>
      </div>
      
      <div className={styles.content}>
        {paragraphs.map((num, idx) => (
          <p key={idx} className={styles.paragraph}>{num}</p>
        ))}
      </div>
    </div>
  );
};

export default OutputDisplay;
