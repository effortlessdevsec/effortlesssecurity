import React from 'react';
import styles from './TerminalCard.module.css';

const lines = [
  {type: 'prompt', text: 'amit@sec:~$ whoami.sh'},
  {type: 'output', text: '> name: Amit Kumar'},
  {type: 'output', text: '> role: Senior Product Security Engineer'},
  {type: 'output', text: '> focus: AppSec, DevSecOps, Mobile Sec'},
  {type: 'output', text: '> status: securing prod (safely)'},
  {type: 'gap'},
  {type: 'prompt', text: 'amit@sec:~$ cat mission.txt'},
  {type: 'highlight', text: 'Find it before they do.'},
];

export default function TerminalCard() {
  return (
    <div className={styles.terminal}>
      <div className={styles.titleBar}>
        <span className={styles.dot} data-color="red" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="green" />
        <span className={styles.title}>hacker-terminal</span>
      </div>
      <div className={styles.body}>
        {lines.map((line, i) => {
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
  );
}
