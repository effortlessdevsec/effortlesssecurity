import React from 'react';
import styles from './FocusGrid.module.css';

const areas = [
  {title: 'Application Security', desc: 'Threat modeling, secure design, code review.'},
  {title: 'DevSecOps', desc: 'SAST, SCA, SBOM in CI/CD pipelines.'},
  {title: 'Mobile Security', desc: 'Android & iOS AppSec, BugBazaar labs.'},
  {title: 'Supply Chain', desc: 'Dependency risk, third-party trust.'},
  {title: 'Cloud Security', desc: 'IAM, CSPM, environment hardening.'},
  {title: 'Threat Modeling', desc: 'Architecture review, attack surface.'},
];

export default function FocusGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className={styles.label}>{'// expertise'}</p>
          <h2>What I work on</h2>
        </div>
        <div className={styles.grid}>
          {areas.map((a) => (
            <article key={a.title} className={styles.card}>
              <span className={styles.prefix}>{'>'}</span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
