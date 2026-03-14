import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BlogShowcase from '@site/src/components/BlogShowcase';
import styles from './index.module.css';

const categoryCards = ['All', 'Learn DevSecOps', 'DevSecOps', 'GitHub', 'Supply Chain Security'];
const heroStats = [
  {value: '6+', label: 'Years in product security'},
  {value: '5+', label: 'Open-source tool contributions'},
  {value: '100+', label: 'Bug bounty recognitions'},
];
const heroHighlights = [
  'Application Security',
  'DevSecOps',
  'Threat Modeling',
  'Mobile Security',
];
const heroSignals = ['AI Security'];

function SectionHeading({title, description, center = false}) {
  return (
    <div className={center ? styles.sectionHeadingCenter : styles.sectionHeading}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <Layout
      title={`${siteConfig.title} | Blog and Portfolio`}
      description="A modern security blog and portfolio focused on DevSecOps, mobile testing, and practical research.">
      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroPanel}>
              <div className={styles.heroContent}>
                <span className={styles.heroEyebrow}>Amit Kumar · Senior Product Security Engineer</span>
                <h1>Practical security writing for engineers building modern products.</h1>
                <p>
                  Sharing hands-on notes across AppSec, DevSecOps, threat modeling, secure code
                  review, cloud security, and mobile application testing.
                </p>
                <div className={styles.heroHighlights}>
                  {heroHighlights.map((item) => (
                    <span key={item} className={styles.heroHighlightChip}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className={styles.heroSignalRow}>
                  {heroSignals.map((item) => (
                    <span key={item} className={styles.heroSignalPill}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.heroVisual}>
                <div className={styles.heroOrb} />
                <div className={styles.heroGridGlow} />
                <div className={styles.heroAccentCard}>
                  <span className={styles.heroAccentLabel}>Security profile</span>
                  <strong>
                    Focused on product security, secure architecture, mobile AppSec, and scaling
                    security across engineering teams.
                  </strong>
                  <div className={styles.heroStats}>
                    {heroStats.map((item) => (
                      <div key={item.label} className={styles.heroStatCard}>
                        <span className={styles.heroStatValue}>{item.value}</span>
                        <span className={styles.heroStatLabel}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className={styles.heroAccentText}>
                    Black Hat Arsenal Europe speaker, Seasides conference contributor, and builder of
                    open-source security labs and learning resources.
                  </p>
                  <div className={styles.heroActionsRow}>
                    <Link className="button button--primary button--lg" to="/portfolio">
                      View Portfolio
                    </Link>
                    <Link className="button button--outline button--primary button--lg" to="/intro">
                      Read Articles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.quickLinksSection}>
          <div className="container">
            <div className={styles.categoryStrip}>
              <div className={styles.categoryChips}>
                {categoryCards.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={item === activeFilter ? `${styles.categoryChip} ${styles.categoryChipActive}` : styles.categoryChip}
                    onClick={() => setActiveFilter(item)}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BlogShowcase activeFilter={activeFilter} />

        <section className={styles.sectionBlockAlt}>
          <div className="container">
            <div className={styles.portfolioCta}>
              <div>
                <SectionHeading
                  title="Beyond the articles"
                  description="See the portfolio for open-source work, conference highlights, contributions, and technical strengths."
                />
                <p className={styles.portfolioCtaText}>
                  The portfolio page stays separate so the homepage remains minimal, attractive, and
                  centered on content discovery.
                </p>
              </div>
              <div className={styles.portfolioCtaActions}>
                <Link className="button button--primary button--lg" to="/portfolio">
                  Open Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
