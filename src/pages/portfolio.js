import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './portfolio.module.css';

const featuredProjects = [
  {
    name: 'Android BugBazaar',
    description:
      'Open-source mobile AppSec playground showcasing insecure design patterns, threat modeling, and exploitation scenarios.',
    href: 'https://github.com/effortlessdevsec',
    meta: 'Open Source • Dec 2023 – Present',
  },
  {
    name: 'iOS BugBazaar',
    description:
      'Open-source iOS AppSec playground focused on product-security-first misconfiguration exploitation.',
    href: 'https://github.com/effortlessdevsec',
    meta: 'Open Source • Dec 2024 – Present',
  },
  {
    name: 'ninjasworkout',
    description: 'Vulnerable NodeJS Web Application',
    href: 'https://github.com/effortlessdevsec/ninjasworkout',
    meta: '97 stars • 25 forks • Pug',
  },
  {
    name: 'ApkRecon',
    description: 'Scanning APK file for URIs, endpoints & secrets.',
    href: 'https://github.com/effortlessdevsec/ApkRecon',
    meta: '43 stars • 5 forks • Shell',
  },
  {
    name: 'AppSecBytes',
    description:
      'Deep dives into application vulnerabilities, CVEs, bug bounty reports, and practical defensive insights.',
    href: 'https://github.com/effortlessdevsec/AppSecBytes',
    meta: '4 stars • 0 forks • HTML',
  },
  {
    name: 'security-study-plan',
    description:
      'Complete practical study plan for cybersecurity paths like Pentest, AppSec, Cloud Security, and DevSecOps.',
    href: 'https://github.com/effortlessdevsec/security-study-plan',
    meta: '2 stars • 0 forks • Learning resource',
  },
];

const skills = [
  {name: 'Application Security', level: 95},
  {name: 'DevSecOps', level: 92},
  {name: 'Android Pentesting', level: 94},
  {name: 'iOS Pentesting', level: 84},
  {name: 'Cloud Security', level: 82},
  {name: 'Source Code Review', level: 91},
  {name: 'Threat Modeling', level: 90},
  {name: 'GitHub Actions', level: 88},
  {name: 'CI/CD Security', level: 89},
  {name: 'Reverse Engineering', level: 86},
  {name: 'Secure SDLC', level: 93},
  {name: 'Security Automation', level: 90},
];

const contributions = [
  {
    title: 'Open-source security projects',
    description:
      'Building and sharing practical repositories, experiments, and learning resources through GitHub.',
  },
  {
    title: 'Technical security writing',
    description:
      'Publishing hands-on blog content around DevSecOps, supply chain security, and mobile testing.',
  },
  {
    title: 'Community knowledge sharing',
    description:
      'Contributing through walkthroughs, research notes, and practical explanations that help other engineers learn faster.',
  },
];

const experience = [
  {
    role: 'Senior Product Security Engineer',
    period: 'Oct 2025 – Present',
    highlights: [
      'Owned end-to-end security architecture reviews and data handling assessments for critical business systems.',
      'Led advanced threat modeling across applications and cloud infrastructure to identify design flaws early in the SDLC.',
      'Designed and maintained DevSecOps pipelines with SAST, DAST, SCA, secrets detection, and policy enforcement.',
      'Built AI-driven security agents for automated code review, vulnerability triage, and security signal correlation.',
    ],
  },
  {
    role: 'Security Engineer',
    period: 'Jan 2025 – Present',
    highlights: [
      'Performed security architecture and data handling reviews with actionable recommendations for product teams.',
      'Executed manual and automated penetration testing for web, mobile, and API applications.',
      'Embedded security checks into developer workflows to automate compliance validation and reduce release bottlenecks.',
      'Partnered with engineering and DevOps teams to drive secure-by-design adoption and secure coding practices.',
    ],
  },
  {
    role: 'Lead Security Consultant',
    period: 'Mar 2020 – Dec 2025',
    highlights: [
      'Delivered product security consulting and defined security requirements and risk acceptance criteria across sectors.',
      'Performed VAPT for web, API, mobile, and infrastructure applications with OWASP-focused remediation guidance.',
      'Conducted automated and manual secure code reviews in Python, Java, NodeJS, and PHP.',
      'Integrated SAST, DAST, and IaC scanning into CI/CD pipelines and guided teams on secure development practices.',
    ],
  },
  {
    role: 'Security Consultant',
    period: 'Aug 2018 – Aug 2020',
    highlights: [
      'Performed end-to-end security assessments of web, mobile, and infrastructure applications including penetration testing and risk reporting.',
    ],
  },
];

const conferences = [
  {
    event: 'Black Hat Arsenal Europe',
    title: 'Showcased Android BugBazaar',
    description: 'Presented open-source mobile AppSec playground work built around insecure design patterns and exploitation scenarios.',
  },
  {
    event: 'Seasides Conference',
    title: 'Android AppSec speaker',
    description: 'Presented on Android security bypasses, protected components, and automation with Semgrep.',
  },
];

const heroHighlights = [
  'Product security, AppSec, and DevSecOps',
  'Threat modeling, architecture review, and code review',
  'Web, mobile, API, and cloud security testing',
  'AI-driven security automation and open-source research',
];

const heroAchievements = [
  {
    value: '6+',
    label: 'Years of experience',
  },
  {
    value: '5+',
    label: 'Open-source tool contributions',
  },
  {
    value: '100+',
    label: 'Bug bounty recognitions',
  },
];

function SectionHeader({eyebrow, title, description}) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function PortfolioPage() {
  useEffect(() => {
    const scriptId = 'calendly-widget-script';
    const styleId = 'calendly-widget-style';

    const initWidget = () => {
      if (window.Calendly?.initBadgeWidget) {
        const existingBadge = document.querySelector('.calendly-badge-widget');

        if (!existingBadge) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/amitparajapat343/30min',
            text: 'Schedule time with me',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: true,
          });
        }
      }
    };

    if (!document.getElementById(styleId)) {
      const link = document.createElement('link');
      link.id = styleId;
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      initWidget();
      return undefined;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = initWidget;
    document.body.appendChild(script);

    return undefined;
  }, []);

  return (
    <Layout
      title="Portfolio"
      description="Projects, skills, contributions, and practical security work by EffortlessSecurity.">
      <main className={styles.pageWrap}>
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div>
                <span className={styles.heroEyebrow}>Portfolio</span>
                <h1 className={styles.heroTitle}>Amit Kumar</h1>
                <p className={styles.heroText}>
                  Senior Product Security Engineer with 6+ years of experience in AppSec, DevSecOps,
                  threat modeling, secure code review, and practical security automation.
                </p>
                <div className={styles.heroActions}>
                  <a
                    className="button button--primary button--lg"
                    href="https://github.com/effortlessdevsec?tab=repositories"
                    target="_blank"
                    rel="noreferrer">
                    View GitHub Projects
                  </a>
                  <button
                    type="button"
                    className="button button--outline button--primary button--lg"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.Calendly?.showPopupWidget) {
                        window.Calendly.showPopupWidget('https://calendly.com/amitparajapat343/30min');
                      }
                    }}>
                    📅 Let’s Connect
                  </button>
                </div>
                <div className={styles.heroList}>
                  {heroHighlights.map((item) => (
                    <div key={item} className={styles.heroListItem}>
                      <span className={styles.heroListDot}></span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.summaryCard}>
                <div className={styles.summaryIntro}>
                  <span className={styles.summaryLabel}>Highlights</span>
                  <h2>Security profile</h2>
                  <p>
                    Focused on product security, secure architecture, mobile AppSec, and scaling security across engineering teams.
                  </p>
                </div>
                <div className={styles.summaryGrid}>
                  {heroAchievements.map((item) => (
                    <div key={item.label} className={styles.summaryStat}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className="container">
            <SectionHeader
              eyebrow="GitHub projects"
              title="Real project work"
              description="Top real repositories selected from your public GitHub profile, prioritizing stronger stars and forks over placeholders."
            />
            <div className={styles.projectGrid}>
              {featuredProjects.map((project) => (
                <a
                  key={project.name}
                  className={styles.projectCard}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer">
                  <span className={styles.cardMeta}>{project.meta}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <span className={styles.cardLink}>Open on GitHub</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className="container">
            <SectionHeader
              eyebrow="Skills"
              title="Core strengths"
              description="Animated expertise bars that visually show depth across key security domains."
            />
            <div className={styles.skillsPanel}>
              {skills.map((skill) => (
                <div key={skill.name} className={styles.skillMeter}>
                  <div className={styles.skillMeterHeader}>
                    <span>{skill.name}</span>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div className={styles.skillTrack}>
                    <div
                      className={styles.skillFill}
                      style={{'--skill-level': `${skill.level}%`}}>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionBlockAlt}>
          <div className="container">
            <SectionHeader
              eyebrow="Experience"
              title="Professional experience"
              description="Experience highlights from the resume, with company names intentionally omitted."
            />
            <div className={styles.experienceFlow}>
              {experience.map((item, index) => (
                <div
                  key={`${item.role}-${item.period}`}
                  className={styles.experienceStep}
                  style={{'--step-index': index}}>
                  <div className={styles.experienceNode}>
                    <span>{index + 1}</span>
                  </div>
                  {index < experience.length - 1 && <div className={styles.experienceConnector}></div>}
                  <div className={styles.experienceCard}>
                    <span className={styles.cardMeta}>{item.period}</span>
                    <h3>{item.role}</h3>
                    <ul className={styles.highlightList}>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionBlockAlt}>
          <div className="container">
            <div className={styles.twoColumnGrid}>
              <div>
                <SectionHeader
                  eyebrow="Contributions"
                  title="How I contribute"
                  description="Practical contribution areas that show impact beyond a project list."
                />
                <div className={styles.stackList}>
                  {contributions.map((item) => (
                    <div key={item.title} className={styles.infoCard}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeader
                  eyebrow="Conferences"
                  title="Talks and sessions"
                  description="Selected speaking and showcase highlights from the resume."
                />
                <div className={styles.stackList}>
                  {conferences.map((item) => (
                    <div key={item.title} className={styles.infoCard}>
                      <span className={styles.eventBadge}>{item.event}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
