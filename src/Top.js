import React, { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import styles from './Top.module.css';
import useAnimation from './useAnimation';

function Top() {
  const [setRef, visible] = useAnimation({ rootMargin: '-100px' });
  return (
    <header className={styles['header-main']}>
      <div className={styles['scene']}></div>
      {/* <div className={styles['Bg']}></div> */}
      <Nav />
      <h1 className={styles['text-main']}>
        Your awesome traffic permit consultant.
      </h1>
      <a href="#contact-us" className={styles['get-started']}>
        get started
      </a>
      <div
        className={`
        ${styles['model']} 
        ${styles[visible ? 'model-animation' : '']}
        `}
        ref={setRef}
      ></div>
    </header>
  );
}

export default Top;
