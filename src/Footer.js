import React, { useState } from 'react';
import styles from './Footer.module.css';
import useAnimation from './useAnimation';
import style from './Message.module.css';

export default function Footer() {
  const [setRef, visible] = useAnimation({ rootMargin: '-100px' });
  const [isVisible, setIsVisible] = useState(false);

  function message() {
    return (
      <div className={style['work-in-progres']}>
        <div className={style['message-container']}>
          <p>work in progress</p>
          <button onClick={() => setIsVisible(false)}>X</button>
        </div>
      </div>
    );
  }
  return (
    <>
      {isVisible ? message() : null}
      <footer className={styles['footer-main']}>
        <div className={styles['footer-Bg']}></div>
        <div className={styles['footer-illustration-container']}>
          <div className={styles['footer-illustration-semicircle-pink']}></div>
          <div
            className={`
          ${styles['footer-illustration-trekmobil']} 
          ${styles[visible ? 'trekmobil-animation' : '']}
          `}
            ref={setRef}
          ></div>
          <div className={styles['footer-illustration-semicircle-dark']}></div>
        </div>
        <section id="contact-us" className={styles['footer-group-form']}>
          <div className={styles['side-bar']}></div>
          <p className={styles['footer-text']}>
            We provide traffic management consultants so you get started
            quickly, contact us for a quote today!
          </p>
          <form action="" className={styles['footer-form']}>
            <div className={styles['form-input']}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className={styles['form-input']}>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" />
            </div>
            <button
              onClick={() => setIsVisible(true)}
              className={styles['form-button']}
            >
              get started
            </button>
          </form>
        </section>
        <nav className={styles['footer-menu']}>
          <div className={styles['footer-logo']}></div>
          <ul>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#how-to">how to</a>
            </li>
            <li>
              <a href="#faqs">faqs</a>
            </li>
          </ul>
        </nav>
        <section className={styles['social-media']}>
          <h2 className={styles['copyright']}>Copyright @ 2019</h2>
          <nav className={styles['media-nav']}>
            <a className={styles['facebook']} href="#"></a>
            <a className={styles['twitter']} href="#"></a>
            <a className={styles['instegram']} href="#"></a>
          </nav>
        </section>
      </footer>
    </>
  );
}
