import React from 'react';
import Link from '@docusaurus/Link';
import styles from './SeriesBrowse.module.css';

const series = [
  {
    num: '01',
    title: 'Learn DevSecOps',
    desc: 'GitHub Actions, SCA, supply chain — pipeline security from scratch.',
    to: '/category/learn-devsecops',
    posts: 3,
  },
  {
    num: '02',
    title: 'Secure Code Review',
    desc: 'SAST internals — AST, CFG, taint tracking, and what actually works.',
    to: '/category/secure-code-review',
    posts: 1,
  },
];

export default function SeriesBrowse() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className={styles.label}>{'// series'}</p>
          <h2>Article series</h2>
          <p>Grouped by topic for structured reading.</p>
        </div>
        <div className={styles.grid}>
          {series.map((s) => (
            <Link key={s.num} className={styles.card} to={s.to}>
              <span className={styles.num}>SERIES {s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className={styles.count}>{s.posts} {s.posts === 1 ? 'post' : 'posts'}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
