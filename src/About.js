import React from 'react';
import styles from './About.module.css';
import useAnimation from './useAnimation';

export default function About() {
  const [setRef, visible] = useAnimation({ rootMargin: '-100px' });
  return (
    <section id="about" className={styles['about-us']}>
      <div className={styles['about-us-description']}>
        <h2>about us</h2>
        <p className={styles['first-paragraph']}>
          The occupational traffic permit is one of the most important things in
          the company when carrying out freight transport. In fact, it is a
          prerequisite for doing business traffic at all.
        </p>
        <div className={styles['second-paragraph-container']}>
          <p className={styles['second-paragraph']}>
            How do you do when you need to obtain a commercial traffic permit
            for freight transport to your business?
          </p>
        </div>
      </div>
      <div
        className={`${styles['about-us-illustration']} ${
          styles[visible ? 'about-illustration-animation' : '']
        }`}
        ref={setRef}
      ></div>
    </section>
  );
}
