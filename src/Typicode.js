import React, { useRef, useState } from 'react';
import styles from './Fqas.module.css';

export function FaqsColumn1(props) {
  const ref = useRef();
  const [bg, setBg] = useState(false);
  const [visible, setVisible] = useState(false);
  const { title, body, id, data } = props;
  console.log(data);

  function handleClick() {
    setVisible(!visible);
  }
  if (title && body) {
    return (
      <article
        //id > 7 ? 'column-1-hide' :
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
          //${styles[id === 1 ? 'a' : null]}
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
  //console.log(id);

  // data.map((element, i) => {
  //   console.log(i);
  // });
  function handleClick() {
    setVisible(!visible);
  }
  if (title && body) {
    return (
      <>
        <article
          //id > 13 ? 'column-1-hide' :
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
            className={styles['a']}
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
