import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import BlogShowcase, {articles, categories} from '@site/src/components/BlogShowcase';
import styles from './blog.module.css';

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <Layout title="Blog" description="Security articles on AppSec, DevSecOps, and secure code review.">
      <main className={styles.page}>
        <section className={styles.header}>
          <div className="container">
            <p className={styles.label}>{'// blog'}</p>
            <h1>Articles</h1>
            <p className={styles.desc}>
              Practical security writing — {articles.length} articles on AppSec, DevSecOps,
              supply chain, and secure code review.
            </p>
            <div className={styles.chips}>
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={item === activeFilter ? `${styles.chip} ${styles.chipOn}` : styles.chip}
                  onClick={() => setActiveFilter(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>
        <BlogShowcase activeFilter={activeFilter} showHeader={false} />
      </main>
    </Layout>
  );
}
