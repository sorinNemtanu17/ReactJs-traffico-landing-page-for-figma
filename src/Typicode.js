import React, { useState } from 'react';
import styles from './Fqas.module.css';

export function FaqsColumn1(props) {
  const [visible, setVisible] = useState(false);
  const { title, body, id } = props;

  function handleClick() {
    setVisible(!visible);
  }
  if (title && body) {
    return (
      <article
        className={`
        ${styles['column-1']}
        ${styles[visible || id === 1 ? 'expend-a' : null]} 
        `}
        //${styles[id === 1 && !bg ? 'column-1' : null]}
      >
        <div className={styles['q']}>
          <p>{title}</p>
          <button
            className={`
            ${styles['see-more']} 
            ${styles[visible || id === 1 ? 'see-less' : null]}`}
            onClick={handleClick}
          ></button>
        </div>
        <p
          className={`
          ${styles['a']} 
          ${styles[visible || id === 1 ? 'visible' : null]} 
          `}
        >
          {body}
        </p>
      </article>
    );
  }
  return null;
}
export function FaqsColumn2(data) {
  const [visible, setVisible] = useState(false);
  const { title, body } = data;

  function handleClick() {
    setVisible(!visible);
  }
  if (title && body) {
    return (
      <>
        <article
          className={`
        ${styles['column-1']} 
        ${styles[visible ? 'expend-a' : null]} 
        `}
        >
          <div className={styles['q']}>
            <p>{title}</p>
            <button
              className={`
              ${styles['see-more']} 
              ${styles[visible ? 'see-less' : null]}
              `}
              onClick={handleClick}
            ></button>
          </div>
          <p
            className={`
          ${styles['a']} 
          ${styles[visible ? 'visible' : null]} 
          `}
          >
            {body}
          </p>
        </article>
      </>
    );
  }

  return null;
}
