import React, {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import PortfolioProfileCard from '@site/src/components/PortfolioProfileCard';
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

const skillGroups = [
  {
    id: 'sdlc',
    label: 'SDLC Security',
    cmd: '// sdlc-security',
    description: 'Shift-left security across design, code, and release.',
    skills: [
      {name: 'Application Security', level: 95},
      {name: 'Secure SDLC', level: 93},
      {name: 'Source Code Review', level: 91},
      {name: 'Threat Modeling', level: 90},
    ],
  },
  {
    id: 'supply',
    label: 'Supply Chain & DevSecOps',
    cmd: '// supply-chain',
    description: 'Pipeline security, dependency trust, and CI/CD hardening.',
    skills: [
      {name: 'DevSecOps', level: 98},
      {name: 'Security Automation', level: 98},
      {name: 'CI/CD Security', level: 98},
      {name: 'GitHub Actions', level: 98},
      {name: 'SCA / SBOM', level: 98},
    ],
  },
  {
    id: 'ai',
    label: 'AI & Agent Security',
    cmd: '// ai-agent-security',
    description: 'Securing AI systems, agents, and automated security workflows.',
    skills: [
      {name: 'AI Security Agents', level: 98},
      {name: 'Automated Code Review Agents', level: 98},
      {name: 'LLM App Security', level: 98},
      {name: 'Prompt & Tool Abuse', level: 98},
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Security',
    cmd: '// mobile-security',
    description: 'Android, iOS, and reverse engineering depth.',
    skills: [
      {name: 'Android Pentesting', level: 98},
      {name: 'Reverse Engineering', level: 98},
      {name: 'iOS Pentesting', level: 98},
    ],
  },
  {
    id: 'web',
    label: 'Web Security',
    cmd: '// web-security',
    description: 'Web apps, APIs, and modern browser attack surfaces.',
    skills: [
      {name: 'Web Application Security', level: 98},
      {name: 'API Security', level: 98},
      {name: 'OWASP / VAPT', level: 98},
      {name: 'AuthN / AuthZ Review', level: 98},
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Security',
    cmd: '// cloud-security',
    description: 'Cloud posture, identity, and environment hardening.',
    skills: [
      {name: 'Cloud Security', level: 82},
      {name: 'IAM & Access Control', level: 80},
      {name: 'CSPM / Misconfig Review', level: 78},
    ],
  },
  {
    id: 'leadership',
    label: 'Leadership & Delivery',
    cmd: '// leadership',
    description: 'Driving secure outcomes with teams and stakeholders.',
    skills: [
      {name: 'Security Consulting', level: 92},
      {name: 'Secure-by-Design Adoption', level: 90},
      {name: 'Cross-team Enablement', level: 88},
      {name: 'Mentoring Engineers', level: 86},
    ],
  },
];

const contributions = [
  {
    title: 'Open-source security projects',
    description:
      'Building and sharing practical repositories, experiments, and learning resources through GitHub.',
  },
  {
    title: 'Community knowledge sharing',
    description:
      'Contributing through walkthroughs, research notes, and practical explanations that help other engineers learn faster.',
  },
];

const blogWritings = [
  {
    platform: 'Payatu',
    platformKey: 'payatu',
    title: 'Android security research & pentesting blogs',
    description:
      'Hands-on guides on Frida, Android pentesting labs, content providers, native modules, protected components, and mobile security fundamentals.',
    url: 'https://payatu.com/author/amit/',
    tags: ['Android', 'Frida', 'Mobile AppSec', 'Pentesting'],
    cta: 'View all articles',
    meta: 'Author archive · 8+ articles',
  },
  {
    platform: 'Zepto Tech',
    platformKey: 'zepto',
    title: 'Catching Secrets Before They Leak',
    subtitle: 'How we built an end-to-end secret detection system at scale',
    description:
      'Defense-in-depth secret scanning across IDE, pre-push hooks, CI/CD, Lambda, Confluence, Jira, Slack, and Postman — with centralized alerting and remediation.',
    url: 'https://blog.zepto.com/catching-secrets-before-they-leak-how-we-built-an-end-to-end-secret-detection-system-at-scale-7bf1541801c7',
    tags: ['DevSecOps', 'Secrets Detection', 'CI/CD', 'Cloud Security'],
    cta: 'Read article',
    meta: 'Engineering blog · Apr 2026',
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
    event: 'Black Hat Arsenal',
    venue: 'Black Hat Europe 2024',
    location: 'London, UK',
    date: 'Dec 2024',
    title: 'Android BugBazaar',
    subtitle: 'Your Mobile AppSec Playground to Explore, Exploit & Excel',
    description:
      'Showcased open-source Android AppSec playground with 30+ vulnerabilities and real-world mobile pentesting scenarios at the Arsenal track.',
    speakers: 'Amit Kumar & Vedant Wayal',
    visual: 'blackhat',
    tags: ['Android', 'Open Source', 'Arsenal'],
    url: 'https://www.blackhat.com/eu-24/arsenal/schedule/#android-bugbazaar-your-mobile-appsec-playground-to-explore-exploit-excel-41237',
    repoUrl: 'https://github.com/payatu/BugBazaar',
  },
  {
    event: 'Seasides',
    venue: "India's Most Loved Conference",
    location: 'Goa, India',
    date: 'Sep 2023',
    title: 'Unveiling Mobile App Exploitation',
    subtitle: 'Defend Android Apps — Reveal Weaknesses, Implement Robust Strategies',
    description:
      'Hands-on session on Android security weaknesses, defensive strategies, and shielding apps against real-world exploitation.',
    speakers: 'Amit Kumar & Gaurav Bhosale',
    poster: 'img/talks/seasides-2023.png',
    tags: ['Android', 'Mobile AppSec', 'Defense'],
    url: 'https://www.seasides.net/schedule',
  },
  {
    event: 'RedTeam Security Summit',
    venue: 'Season 4 · 3-Day Online Workshop',
    location: 'Online',
    date: 'Dec 2021',
    title: 'Creating Code for Bypassing Android Security Checks',
    subtitle: 'Day 1 · 4-hour hands-on workshop',
    description:
      'Workshop on writing bypass code for Android security checks — root detection, emulator checks, Frida hooks, and runtime protection evasion. Delivered as Security Consultant at Payatu.',
    speakers: 'Amit Kumar',
    poster: 'img/talks/redteam-summit-2021.png',
    tags: ['Android', 'Bypass', 'Workshop', 'Frida'],
  },
];

const talkVideos = [
  {
    id: '7ArHXmMITb0',
    url: 'https://www.youtube.com/watch?v=7ArHXmMITb0',
  },
  {
    id: '11cscd_okgw',
    url: 'https://youtu.be/11cscd_okgw',
  },
];

const heroAchievements = [
  {value: 6, suffix: '+', label: 'Years exp.'},
  {value: 5, suffix: '+', label: 'OSS tools'},
  {value: 100, suffix: '+', label: 'Bug bounties'},
];

const heroTags = ['Black Hat Arsenal', 'Seasides Conf', 'RedTeam Summit', 'BugBazaar', 'Semgrep'];

const sectionNav = [
  {id: 'projects', label: 'Projects'},
  {id: 'skills', label: 'Skills'},
  {id: 'experience', label: 'Experience'},
  {id: 'writing', label: 'Writing'},
  {id: 'talks', label: 'Talks'},
];

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}

function SectionJumpNav() {
  return (
    <section className={styles.jumpNavSection}>
      <div className="container">
        <p className={`${styles.jumpNavPrompt} ${styles.fadeIn}`} style={{'--delay': '0.08s'}}>
          <span className={styles.prompt}>{'$'}</span> ls portfolio/
        </p>
        <div className={styles.jumpStrip}>
          {sectionNav.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.jumpChip} ${styles.fadeIn}`}
              style={{'--delay': `${0.12 + index * 0.04}s`}}
              onClick={() => scrollToSection(item.id)}
              aria-label={`Jump to ${item.label}`}>
              <span className={styles.jumpNum}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.jumpName}>{item.label}</span>
              <span className={styles.jumpArrow} aria-hidden="true">›</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({eyebrow, title, description, className = ''}) {
  return (
    <div className={`${styles.sectionHeader} ${styles.reveal} ${className}`}>
      <span className={styles.eyebrow}>{'// '}{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function BlogCard({item, index}) {
  return (
    <a
      className={`${styles.blogCard} ${styles.reveal}`}
      data-platform={item.platformKey}
      style={{'--reveal-index': index}}
      href={item.url}
      target="_blank"
      rel="noreferrer">
      <div className={styles.blogCardTop}>
        <span className={styles.blogPlatform}>{item.platform}</span>
        {item.meta && <span className={styles.blogMeta}>{item.meta}</span>}
      </div>
      <h3 className={styles.blogTitle}>{item.title}</h3>
      {item.subtitle && <p className={styles.blogSubtitle}>{item.subtitle}</p>}
      <p className={styles.blogDesc}>{item.description}</p>
      {item.tags?.length > 0 && (
        <div className={styles.blogTags}>
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
      <span className={styles.blogCta}>{'>'} {item.cta}</span>
    </a>
  );
}

function BlackHatVisual({item}) {
  return (
    <div className={styles.bhVisual}>
      <div className={styles.bhTop}>
        <span className={styles.bhLogo}>BLACK HAT</span>
        <span className={styles.bhTrack}>ARSENAL</span>
      </div>
      <div className={styles.bhMiddle}>
        <span className={styles.bhRegion}>EUROPE</span>
        <span className={styles.bhYear}>{item.date?.split(' ')[1] || '2024'}</span>
      </div>
      <div className={styles.bhBottom}>
        <span className={styles.bhProject}>{item.title}</span>
        <span className={styles.bhLocation}>{item.location}</span>
      </div>
      <div className={styles.bhAccent} aria-hidden="true" />
    </div>
  );
}

function TalkCard({item, index}) {
  const posterSrc = useBaseUrl(item.poster || '');

  return (
    <article
      className={`${styles.talkCard} ${styles.reveal}`}
      style={{'--reveal-index': index}}>
      <div className={styles.talkMedia}>
        {item.poster ? (
          <div className={styles.talkPosterFrame}>
            <img
              src={posterSrc}
              alt={`${item.title} — ${item.event}`}
              className={styles.talkPoster}
              loading="lazy"
            />
          </div>
        ) : item.visual === 'blackhat' ? (
          <BlackHatVisual item={item} />
        ) : null}
      </div>

      <div className={styles.talkContent}>
        <div className={styles.talkMeta}>
          <span className={styles.eventBadge}>{item.event}</span>
          {item.date && <span className={styles.talkMetaChip}>{item.date}</span>}
          {item.location && <span className={styles.talkMetaChip}>{item.location}</span>}
        </div>

        {item.venue && <p className={styles.talkVenue}>{item.venue}</p>}
        <h3 className={styles.talkTitle}>{item.title}</h3>
        {item.subtitle && <p className={styles.talkSubtitle}>{item.subtitle}</p>}
        {item.speakers && <p className={styles.talkSpeakers}>with {item.speakers}</p>}
        <p className={styles.talkDesc}>{item.description}</p>

        {item.tags?.length > 0 && (
          <div className={styles.talkTags}>
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}

        <div className={styles.talkLinks}>
          {item.url && (
            <a className={styles.cardLink} href={item.url} target="_blank" rel="noreferrer">
              Event page
            </a>
          )}
          {item.repoUrl && (
            <a className={styles.cardLink} href={item.repoUrl} target="_blank" rel="noreferrer">
              GitHub repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  const pageRef = useRef(null);
  const skillsRef = useRef(null);
  const [profileActive, setProfileActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setProfileActive(true), 500);
    return () => clearTimeout(timer);
  }, []);
  const [skillsActive, setSkillsActive] = useState(false);

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
            color: '#16a34a',
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
    } else {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    }

    const root = pageRef.current;
    if (!root) {
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealVisible);
          }
        });
      },
      {threshold: 0.12, rootMargin: '0px 0px -48px 0px'},
    );

    root.querySelectorAll(`.${styles.reveal}`).forEach((el) => revealObserver.observe(el));

    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsActive(true);
          skillsObserver.disconnect();
        }
      },
      {threshold: 0.2},
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      revealObserver.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  return (
    <Layout
      title="Portfolio"
      description="Projects, skills, contributions, and practical security work by EffortlessSecurity.">
      <main className={styles.pageWrap} ref={pageRef}>
        <div className={styles.gridBg} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />

        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={`${styles.heroEyebrow} ${styles.fadeIn}`} style={{'--delay': '0.05s'}}>
                  <span className={styles.prompt}>{'$'}</span> portfolio
                </p>
                <div className={`${styles.roleBadge} ${styles.fadeIn}`} style={{'--delay': '0.1s'}}>
                  Senior Product Security Engineer
                </div>
                <h1 className={`${styles.heroTitle} ${styles.fadeIn}`} style={{'--delay': '0.15s'}}>
                  Amit Kumar
                </h1>
                <p className={`${styles.heroRole} ${styles.fadeIn}`} style={{'--delay': '0.2s'}}>
                  Product Security
                </p>
                <p className={`${styles.heroText} ${styles.fadeIn}`} style={{'--delay': '0.26s'}}>
                  AppSec · DevSecOps · Threat modeling · Secure code review ·
                  Mobile &amp; cloud security · Open-source research.
                </p>
                <div className={`${styles.heroActions} ${styles.fadeIn}`} style={{'--delay': '0.34s'}}>
                  <a
                    className={`button button--primary button--lg ${styles.btnPrimary}`}
                    href="https://github.com/effortlessdevsec?tab=repositories"
                    target="_blank"
                    rel="noreferrer">
                    {'>'} GitHub Projects
                  </a>
                  <button
                    type="button"
                    className={`button button--outline button--lg ${styles.btnOutline}`}
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.Calendly?.showPopupWidget) {
                        window.Calendly.showPopupWidget('https://calendly.com/amitparajapat343/30min');
                      }
                    }}>
                    {'>'} Schedule a Call
                  </button>
                </div>
                <div className={`${styles.heroTags} ${styles.fadeIn}`} style={{'--delay': '0.42s'}}>
                  {heroTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={`${styles.heroAside} ${styles.fadeIn}`} style={{'--delay': '0.2s'}}>
                <PortfolioProfileCard stats={heroAchievements} active={profileActive} />
              </div>
            </div>
          </div>
        </section>

        <SectionJumpNav />

        <section id="projects" className={`${styles.sectionBlock} ${styles.sectionAnchor}`}>
          <div className="container">
            <SectionHeader
              eyebrow="projects"
              title="Open-source & research"
              description="Security tools, vulnerable labs, and learning resources — built in public on GitHub."
            />
            <div className={styles.projectGrid}>
              {featuredProjects.map((project, index) => (
                <a
                  key={project.name}
                  className={`${styles.projectCard} ${styles.reveal}`}
                  style={{'--reveal-index': index}}
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

        <section id="skills" className={`${styles.sectionBlock} ${styles.sectionAnchor}`}>
          <div className="container">
            <SectionHeader
              eyebrow="skills"
              title="Core strengths"
              description="Grouped by domain — SDLC, supply chain, AI agents, web, mobile, cloud, and leadership."
            />
            <div
              ref={skillsRef}
              className={`${styles.skillsGrid} ${skillsActive ? styles.skillsActive : ''}`}>
              {skillGroups.map((group, groupIndex) => (
                <article
                  key={group.id}
                  className={`${styles.skillGroup} ${styles.reveal}`}
                  style={{'--reveal-index': groupIndex}}
                  data-group={group.id}>
                  <p className={styles.skillGroupCmd}>{group.cmd}</p>
                  <h3 className={styles.skillGroupTitle}>{group.label}</h3>
                  <p className={styles.skillGroupDesc}>{group.description}</p>
                  <div className={styles.skillMeters}>
                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={styles.skillMeter}
                        style={{'--skill-index': groupIndex * 4 + skillIndex}}>
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className={`${styles.sectionBlockAlt} ${styles.sectionAnchor}`}>
          <div className="container">
            <SectionHeader
              eyebrow="experience"
              title="Professional journey"
              description="Product security, consulting, and hands-on offensive + defensive work."
            />
            <div className={styles.experienceFlow}>
              {experience.map((item, index) => (
                <div
                  key={`${item.role}-${item.period}`}
                  className={`${styles.experienceStep} ${styles.reveal}`}
                  style={{'--step-index': index, '--reveal-index': index}}>
                  <div className={styles.experienceNode}>
                    <span>{index + 1}</span>
                  </div>
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

        <section id="writing" className={`${styles.sectionBlockAlt} ${styles.sectionAnchor}`}>
          <div className="container">
            <SectionHeader
              eyebrow="writing"
              title="Blog & contributions"
              description="Published research, engineering deep-dives, open-source work, and community knowledge sharing."
            />

            <div className={styles.blogGrid}>
              {blogWritings.map((item, index) => (
                <BlogCard key={item.url} item={item} index={index} />
              ))}
            </div>

            <div className={styles.contributionGrid}>
              {contributions.map((item, index) => (
                <div
                  key={item.title}
                  className={`${styles.infoCard} ${styles.reveal}`}
                  style={{'--reveal-index': index + blogWritings.length}}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="talks" className={`${styles.sectionBlock} ${styles.sectionAnchor}`}>
          <div className="container">
            <SectionHeader
              eyebrow="talks"
              title="Conferences & sessions"
              description="Talk recordings, Black Hat Arsenal, Seasides, and community speaking."
            />

            <div className={styles.videoGrid}>
              {talkVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`${styles.videoCard} ${styles.reveal}`}
                  style={{'--reveal-index': index}}>
                  <div className={styles.videoEmbed}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={`Talk recording ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <a
                    className={styles.videoLink}
                    href={video.url}
                    target="_blank"
                    rel="noreferrer">
                    {'>'} Watch on YouTube
                  </a>
                </div>
              ))}
            </div>

            <div className={styles.talkGrid}>
              {conferences.map((item, index) => (
                <TalkCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaStrip}>
          <div className="container">
            <div className={`${styles.ctaCard} ${styles.reveal}`}>
              <p className={styles.ctaPrompt}>{'$ ./connect.sh'}</p>
              <h2>Let&apos;s work together</h2>
              <p>Open to security consulting, talks, and collaboration on open-source AppSec tools.</p>
              <div className={styles.heroActions} style={{justifyContent: 'center'}}>
                <a
                  className="button button--primary button--lg"
                  href="https://github.com/effortlessdevsec"
                  target="_blank"
                  rel="noreferrer">
                  {'>'} GitHub
                </a>
                <button
                  type="button"
                  className="button button--outline button--lg"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.Calendly?.showPopupWidget) {
                      window.Calendly.showPopupWidget('https://calendly.com/amitparajapat343/30min');
                    }
                  }}>
                  {'>'} Book a call
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
