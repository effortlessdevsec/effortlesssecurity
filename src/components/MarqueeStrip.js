import React from 'react';
import styles from './MarqueeStrip.module.css';

const items = [
  'Application Security',
  'DevSecOps',
  'SAST',
  'Mobile AppSec',
  'Threat Modeling',
  'Supply Chain',
  'GitHub Actions',
  'Secure Code Review',
  'Cloud Security',
  'AI Security',
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
