import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Top.module.css';

export default function Nav() {
  function toLink() {}
  return (
    <nav className={styles['nav-main']}>
      <div className={styles['logo']}></div>
      <ul className={styles['menu-main']}>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#how to">how to</a>
        </li>
        <li>
          <a href="#faqs">faqs</a>
        </li>
        <li>
          <a href="#contact us">contact us</a>
        </li>
      </ul>
    </nav>
  );
}
