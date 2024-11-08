import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import categories from '../../../docs/category.json';

const baseUrl = '/category/';
const basetag = '/tags/';


const FeatureList = [
  {
    title: 'Category Labels',
    Svg: require('@site/static/img/programming-monitor.svg').default,
    description: (
      <>
        <div className="container">
         
          <div id="categories">
            <ul>
              {categories.map((category, idx) => {
                // Render the label
                if (category.label) {
                  return (
                    <li key={idx}>
                      <a href={`${baseUrl}${encodeURIComponent(category.label.toLowerCase().replace(/\s+/g, '-'))}`}>
                        {category.label}
                      </a>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Tags',
    Svg: require('@site/static/img/programming-monitor.svg').default,
    description: (
      <>
        <div className="container">
        
          <div id="categories">
            <ul>
              {categories.map((category, idx) => {
                // Render the tag
                if (category.tag) {
                  return (
                    <li key={idx}>
                      <a href={`${basetag}${encodeURIComponent(category.tag.toLowerCase().replace(/\s+/g, '-'))}`}>
                        {category.tag}
                      </a>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
