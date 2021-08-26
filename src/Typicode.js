import React, { useRef, useState } from 'react';
import styles from './Fqas.module.css';

export function FaqsColumn1(data) {
  const ref = useRef();
  const [bg, setBg] = useState(false);
  const [visible, setVisible] = useState(false);
  const { title, body, id } = data;
  //console.log(data);
  // data.map((element, i) => {
  //   console.log(i);
  // });
  function handleClick() {
    setBg(!bg);
    setVisible(!visible);
  }
  if (title && body) {
    return (
      <article
        className={`
        ${styles['column-1']} 
        ${styles[bg ? 'expend-a' : null]} 
        ${styles[id === 1 ? 'expend-a' : null]}
        `}
      >
        <div className={styles['q']}>
          <p>{title}</p>
          <button className={styles['see-more']} onClick={handleClick}></button>
        </div>
        <p
          className={styles['a']}
          className={`
          ${styles['a']} 
          ${styles[visible ? 'visible' : null]} 
          ${styles[id === 1 ? 'visible' : null]}`}
        >
          {body}
        </p>
      </article>
    );
  }
  return null;
}
export function FaqsColumn2(data) {
  const ref = useRef();
  const [bg, setBg] = useState(false);
  const [visible, setVisible] = useState(false);
  const { title, body, id } = data;

  // data.map((element, i) => {
  //   console.log(i);
  // });
  function handleClick() {
    setBg(!bg);
    setVisible(!visible);
  }
  if (title && body) {
    return (
      <article
        className={`
        ${styles['column-1']} 
        ${styles[bg ? 'expend-a' : null]} 
        `}
      >
        <div className={styles['q']}>
          <p>{title}</p>
          <button className={styles['see-more']} onClick={handleClick}></button>
        </div>
        <p
          className={styles['a']}
          className={`
          ${styles['a']} 
          ${styles[visible ? 'visible' : null]} 
          `}
        >
          {body}
        </p>
      </article>
    );
  }
  return null;
}
