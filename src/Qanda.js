import React, { useEffect, useState } from 'react';
import Faqs from './Faqs';
import styles from './Fqas.module.css';

export default function Qanda() {
  // const [question, setQuestion] = useState(null);
  // const [answer, setAnswer] = useState(null);
  // const [value, setValue] = useState([]);
  // useEffect(() => {
  //   fetch('https://lxpi9qne2a.api.quickmocker.com/getReactFAQs')
  //     .then((res) => res.json())
  //     .then(({ response }) => {
  //       setValue(response);
  //       console.log(value);

  // value.map(({ title, Message }) => {
  //   console.log(title, Message);
  //   setQuestion(title);
  //   setAnswer(Message);
  // });
  //     });
  // }, []);
  //console.log(response);
  // console.log(question);
  // console.log(answer);
  return (
    <article className={styles['column-1']}>
      <p className={styles['q']}>What is a professional traffic permit?</p>
      <p className={styles['a']}>
        Traffic permits are a requirement for conducting professional traffic.
      </p>
    </article>
  );
}
{
  /* {value.map(({ title, Message }) => (
        <Faqs data={(title, Message)} />
      ))} */
}
