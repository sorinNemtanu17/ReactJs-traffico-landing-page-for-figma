import React, { useEffect, useState } from 'react';
import styles from './Fqas.module.css';
import { FaqsColumn1, FaqsColumn2 } from './Typicode';

export default function Faqs() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((data) => {
        setValues(data.slice(0, 12));
      });
  }, []);
  function getAllfaqs() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((data) => {
        setValues(data.slice(0, 14));
      });
  }

  if (values.length === 12) {
    return (
      <section id="faqs" className={styles['faqs']}>
        <div className={styles['faqs-top-container']}>
          <div className={styles['faqs-text']}>
            <h2>faq</h2>
            <p>Questions and Answers on Professional Traffic Permits:</p>
          </div>
          <div className={styles['faqs-illustration']}></div>
        </div>
        <div className={styles['q-and-a-container']}>
          <div className={styles['q-and-a']}>
            {values.map((value, i) => {
              if (i % 2 === 0 && i < 8) {
                return <FaqsColumn1 {...value} key={value.id} />;
              }
            })}
          </div>
          <div className={styles['q-and-a']}>
            {values.map((value, i) => {
              if (i % 2 === 1 && i < 12) {
                return <FaqsColumn2 {...value} key={value.id} />;
              }
            })}
            <article className={styles['']}>
              <div className={`${styles['']} ${styles['load-more']}`}>
                <p>load more</p>
                <button
                  className={styles['see-more']}
                  onClick={getAllfaqs}
                ></button>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  } else if (values.length === 14) {
    return (
      <section id="faqs" className={styles['faqs']}>
        <div className={styles['faqs-top-container']}>
          <div className={styles['faqs-text']}>
            <h2>faq</h2>
            <p>Questions and Answers on Professional Traffic Permits:</p>
          </div>
          <div className={styles['faqs-illustration']}></div>
        </div>
        <div className={styles['q-and-a-container']}>
          <div className={styles['q-and-a']}>
            {values.map((value, i) => {
              if (i % 2 === 0 && i < 11) {
                return <FaqsColumn1 {...value} key={value.id} />;
              }
            })}
          </div>
          <div className={styles['q-and-a']}>
            {values.map((value, i) => {
              if (i % 2 === 1 || i === 12) {
                return <FaqsColumn2 {...value} key={value.id} />;
              }
            })}
            <article className={styles['']}>
              <div className={`${styles['']} ${styles['load-more']}`}>
                <p>load more</p>
                <button
                  className={styles['see-more']}
                  onClick={getAllfaqs}
                ></button>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
  return null;
}
