import React from 'react';
import styles from './CodeBlock.module.css';

const CodeBlock = ({ children, color, className }) => {
  return (
    <code
      className={`${styles.code} ${className} animeRight`}
      style={{ counterReset: 'line', color: color }}
    >
      {...children}
    </code>
  );
};

export default CodeBlock;
