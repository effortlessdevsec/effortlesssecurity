import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './BlogShowcase.module.css';

export const articles = [
  {
    title: 'Core Pillars of SAST',
    description: 'CFG, CDG, and DDG/PDG — what makes static analysis actually work beyond pattern matching.',
    to: '/secure-code-review/core-pillars-of-sast',
    category: 'Secure Code Review',
    readTime: '8 min',
    date: 'Aug 2026',
    image: 'img/blog/sast.jpg',
    featured: true,
  },
  {
    title: 'GitHub Actions Overview',
    description: 'How GitHub Actions fits into CI/CD and why workflow security matters.',
    to: '/learn-devsecops/github-actions-overview',
    category: 'DevSecOps',
    readTime: '6 min',
    date: 'Jun 2024',
    image: 'img/blog/github-actions.png',
  },
  {
    title: 'Source Composition Analysis',
    description: 'Dependency risk, SCA tooling, and open-source visibility in pipelines.',
    to: '/learn-devsecops/sca-in-devsecops',
    category: 'DevSecOps',
    readTime: '8 min',
    date: 'Jun 2024',
    image: 'img/blog/sca.png',
  },
  {
    title: 'Supply Chain Security',
    description: 'Trust, third-party deps, and the real impact of software supply chains.',
    to: '/learn-devsecops/supply-chain-security',
    category: 'DevSecOps',
    readTime: '10 min',
    date: 'Nov 2024',
    image: 'img/blog/supply-chain.png',
  },
];

export const categories = ['All', 'DevSecOps', 'Secure Code Review', 'GitHub', 'Supply Chain'];

function Card({article}) {
  const imageUrl = useBaseUrl(article.image);

  return (
    <Link className={article.featured ? `${styles.card} ${styles.cardFeatured}` : styles.card} to={article.to}>
      {article.image && (
        <div className={styles.cardImage}>
          <img src={imageUrl} alt="" loading="lazy" />
        </div>
      )}
      <div className={styles.cardBody}>
        <div className={styles.meta}>
          <span className={styles.cat}>{article.category}</span>
          <span>{article.date} · {article.readTime}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <span className={styles.arrow}>{'>'} Read article</span>
      </div>
    </Link>
  );
}

export default function BlogShowcase({activeFilter = 'All', showHeader = true}) {
  const filtered =
    activeFilter === 'All'
      ? articles
      : articles.filter(
          (a) =>
            a.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
            activeFilter.toLowerCase().includes(a.category.toLowerCase().split(' ')[0]),
        );

  return (
    <section className={styles.section}>
      <div className="container">
        {showHeader && (
          <div className={styles.head}>
            <p className={styles.label}>{'// latest'}</p>
            <h2>From the blog</h2>
            <Link className={styles.all} to="/blog">{'>'} all posts</Link>
          </div>
        )}

        {filtered.length === 0 ? (
          <p className={styles.empty}>No posts in this category yet.</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map((a) => (
              <Card key={a.to} article={a} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
