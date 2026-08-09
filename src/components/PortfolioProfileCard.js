import React, {useEffect, useState} from 'react';
import styles from './PortfolioProfileCard.module.css';

const terminalLines = [
  {type: 'prompt', text: 'amit@sec:~$ whoami'},
  {type: 'output', text: 'role → Senior Product Security Engineer'},
  {type: 'output', text: 'focus → AppSec · DevSecOps · Mobile'},
  {type: 'gap'},
  {type: 'prompt', text: 'amit@sec:~$ cat mission.txt'},
  {type: 'highlight', text: 'Find it before they do.'},
];

function AnimatedStat({value, suffix, label, active, index}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) {
      return undefined;
    }

    let frame;
    const start = performance.now();
    const duration = 1200 + index * 150;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value, index]);

  return (
    <div className={styles.stat} style={{'--stat-index': index}}>
      <strong>
        {display}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function PortfolioProfileCard({stats, active}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.glowOrb} aria-hidden="true" />
      <div className={styles.card}>
        <div className={styles.borderGlow} aria-hidden="true" />
        <div className={styles.scanlines} aria-hidden="true" />

        <div className={styles.titleBar}>
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="green" />
          <span className={styles.title}>amit@sec — portfolio</span>
        </div>

        <div className={styles.body}>
          <div className={styles.profileRow}>
            <div className={styles.avatar}>
              <span>AK</span>
            </div>
            <div className={styles.profileMeta}>
              <h2>Amit Kumar</h2>
              <p>Product Security Engineer</p>
              <div className={styles.status}>
                <span className={styles.statusDot} />
                Open for consulting &amp; talks
              </div>
            </div>
          </div>

          <div className={styles.statsRow}>
            {stats.map((item, index) => (
              <AnimatedStat
                key={item.label}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                active={active}
                index={index}
              />
            ))}
          </div>

          <div className={styles.terminal}>
            {terminalLines.map((line, i) => {
              if (line.type === 'gap') {
                return <div key={i} className={styles.gap} />;
              }
              return (
                <div key={i} className={styles.line} data-type={line.type}>
                  {line.text}
                </div>
              );
            })}
            <div className={styles.cursorLine}>
              <span className={styles.prompt}>amit@sec:~$</span>
              <span className={styles.cursor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
