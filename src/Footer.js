import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer-main']}>
      <div className={styles['footer-Bg']}></div>
      <div className={styles['footer-illustration-container']}>
        <div className={styles['footer-illustration-semicircle-pink']}></div>
        <div className={styles['footer-illustration-trekmobil']}></div>
        <div className={styles['footer-illustration-semicircle-dark']}></div>
      </div>
      <section className={styles['footer-group-form']}>
        <div className={styles['side-bar']}></div>
        <p className={styles['footer-text']}>
          We provide traffic management consultants so you get started quickly,
          contact us for a quote today!
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
          <button className={styles['form-button']}>get started</button>
        </form>
      </section>
      <nav className={styles['footer-menu']}>
        <h2 className={styles['footer-logo']}></h2>
        <ul>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#how to">how to</a>
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
  );
}
