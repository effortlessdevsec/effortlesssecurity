import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TerminalCard from '@site/src/components/TerminalCard';
import FocusGrid from '@site/src/components/FocusGrid';
import BlogShowcase, {categories} from '@site/src/components/BlogShowcase';
import SeriesBrowse from '@site/src/components/SeriesBrowse';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <Layout
      title={`${siteConfig.title} | Security Blog & Portfolio`}
      description="Practical security writing on AppSec, DevSecOps, threat modeling, and mobile testing by Amit Kumar.">
      <main className={styles.page}>
        <div className={styles.gridBg} aria-hidden="true" />

        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroCopy}>
                <p className={styles.kicker}>
                  <span className={styles.prompt}>$</span> whoami
                </p>
                <h1 className={styles.title}>
                  Offensive mindset.
                  <br />
                  <span className={styles.titleAccent}>Defensive craft.</span>
                </h1>
                <p className={styles.subtitle}>
                  I'm Amit — Senior Product Security Engineer. I write about finding
                  flaws in design, code, and pipelines before adversaries do. AppSec,
                  DevSecOps, mobile testing, and secure architecture.
                </p>
                <div className={styles.actions}>
                  <Link className="button button--primary button--lg" to="/blog">
                    {'>'} Read articles
                  </Link>
                  <Link className="button button--outline button--lg" to="/portfolio">
                    {'>'} Portfolio
                  </Link>
                </div>
                <div className={styles.tags}>
                  <span>Black Hat Arsenal</span>
                  <span>Seasides Conf</span>
                  <span>BugBazaar</span>
                </div>
              </div>
              <TerminalCard />
            </div>
          </div>
        </section>

        <FocusGrid />

        <section className={styles.filters}>
          <div className="container">
            <p className={styles.filterLabel}>{'// filter by topic'}</p>
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

        <BlogShowcase activeFilter={activeFilter} />
        <SeriesBrowse />

        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaCard}>
              <p className={styles.ctaPrompt}>{'$ ./connect.sh'}</p>
              <h2>Open-source security work</h2>
              <p>Android BugBazaar, ApkRecon, security labs — built in public on GitHub.</p>
              <div className={styles.ctaBtns}>
                <a
                  className="button button--primary button--lg"
                  href="https://github.com/effortlessdevsec"
                  target="_blank"
                  rel="noreferrer">
                  {'>'} GitHub
                </a>
                <Link className="button button--outline button--lg" to="/portfolio">
                  {'>'} Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
