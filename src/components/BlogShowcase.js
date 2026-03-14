import React from 'react';
import Link from '@docusaurus/Link';
import styles from './BlogShowcase.module.css';

export const articles = [
  {
    title: 'Overview About GitHub Actions',
    description: 'Understand how GitHub Actions fits into CI/CD and why workflow automation matters for secure software delivery.',
    to: '/Learn Devsecops/Overview About Github Actions',
    category: 'Learn DevSecOps',
    tags: ['DevSecOps', 'GitHub'],
    readTime: '6 min read',
  },
  {
    title: 'Source Composition Analysis',
    description: 'A practical introduction to dependency risk, SCA tooling, and why open-source visibility belongs in modern pipelines.',
    to: '/Learn Devsecops/SCA IN DEVSECOPS',
    category: 'Learn DevSecOps',
    tags: ['DevSecOps', 'GitHub'],
    readTime: '8 min read',
  },
  {
    title: 'Supply Chain Security',
    description: 'A broader look at trust, third-party dependencies, and the security impact of software supply chains.',
    to: '/supply chain security',
    category: 'Learn DevSecOps',
    tags: ['DevSecOps', 'Supply Chain Security'],
    readTime: '10 min read',
  },
];

export default function BlogShowcase({activeFilter = 'All'}) {
  const filteredArticles =
    activeFilter === 'All'
      ? articles
      : articles.filter(
          (article) => article.category === activeFilter || article.tags.includes(activeFilter),
        );

  return (
    <section className={styles.blogSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>Main blog content</span>
            <h2>Blogs shown for {activeFilter}.</h2>
            <p>
              Click categories above and the matching blog boxes update here on the same page.
            </p>
          </div>
          <Link className={styles.viewAllLink} to="/intro">
            Open all articles
          </Link>
        </div>

        <div className={styles.blogScroller}>
          {filteredArticles.map((article) => (
            <Link key={article.title} className={styles.blogCard} to={article.to}>
              <div className={styles.cardGlow} />
              <div className={styles.metaRow}>
                <span className={styles.category}>{article.category}</span>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className={styles.tagRow}>
                {article.tags.map((tag) => (
                  <span key={tag} className={styles.tagPill}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className={styles.cardCta}>Read article</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
