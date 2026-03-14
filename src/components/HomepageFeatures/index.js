import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const discoveryGroups = [
  {
    label: 'Category',
    title: 'Learn DevSecOps',
    description: 'A dedicated category page for your DevSecOps blog collection.',
    links: [
      {
        label: 'Open category',
        to: '/category/learn-devsecops',
      },
    ],
  },
  {
    label: 'Tags',
    title: 'Browse filtered blog topics',
    description: 'Open filtered blog views based on the tags already used across your posts.',
    links: [
      {
        label: 'DevSecOps',
        to: '/tags/devsecops',
      },
      {
        label: 'GitHub',
        to: '/tags/github',
      },
      {
        label: 'Supply Chain Security',
        to: '/tags/supply-chain-security',
      },
    ],
  },
];

function TagList({items}) {
  return (
    <div className={styles.tagList}>
      {items.map((item) => (
        <Link key={item.label} className={styles.tagChip} to={item.to}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.discoverySection}>
      <div className="container">
        <div className={styles.discoveryHeader}>
          <span className={styles.discoveryEyebrow}>More ways to browse</span>
          <h2>Open blogs through categories and tag filters.</h2>
          <p>
            This section keeps browsing simple: category pages show grouped posts, while tags open
            filtered blog views for more specific topics.
          </p>
        </div>

        <div className={styles.discoveryGrid}>
          {discoveryGroups.map((group) => (
            <div key={group.title} className={styles.discoveryCard}>
              <span className={styles.discoveryLabel}>{group.label}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <TagList items={group.links} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
