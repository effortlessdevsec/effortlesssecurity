import React from 'react';
import styles from './HeroVisual.module.css';

const stats = [
  {value: '6+', label: 'Years in product security'},
  {value: '100+', label: 'Bug bounty recognitions'},
  {value: '5+', label: 'Open-source projects'},
  {value: '2', label: 'Conference talks'},
];

export default function HeroVisual() {
  return (
    <aside className={styles.panel} aria-label="Profile highlights">
      <p className={styles.heading}>At a glance</p>
      <dl className={styles.stats}>
        {stats.map((item) => (
          <div key={item.label} className={styles.stat}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.note}>
        Focused on AppSec, DevSecOps, mobile security, and secure architecture.
      </p>
    </aside>
  );
}
