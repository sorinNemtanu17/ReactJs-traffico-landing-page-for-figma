import React from 'react';
import styles from './Fqas.module.css';
import Qanda from './Qanda';

export default function Faqs() {
  return (
    <section id="faqs" className={styles['faqs']}>
      <div className={styles['Bg-faqs']}></div>
      <div className={styles['faqs-top-container']}>
        <div className={styles['faqs-text']}>
          <h2>faq</h2>
          <p>Questions and Answers on Professional Traffic Permits:</p>
        </div>
        <div className={styles['faqs-illustration']}></div>
      </div>
      <div className={styles['q-and-a']}>
        <Qanda />
      </div>
    </section>
  );
}
