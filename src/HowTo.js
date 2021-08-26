import React from 'react';
import styles from './How-to.module.css';
import useAnimation from './useAnimation';

export default function HowTo() {
  const [setRef, visible] = useAnimation({ rootMargin: '-100px' });
  return (
    <section id="how-to" className={styles['how-to']}>
      <div
        className={`${styles['how-to-illustration']} ${
          styles[visible ? 'how-to-illustration-animation' : '']
        }`}
        ref={setRef}
      ></div>
      <div className={styles['how-to-description']}>
        <h2>how-to</h2>
        <p className={styles['first-paragraph']}>
          When applying for a traffic permit, there are certain requirements
          that you must meet that are included in the examination: requirements
          for professional knowledge, solid establishment, good reputation and
          financial resources. Important to remember is to confirm your
          application for a traffic permit by the company's company signer or
          CEO.
        </p>
      </div>
    </section>
  );
}
