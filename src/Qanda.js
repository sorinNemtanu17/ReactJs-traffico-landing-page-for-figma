import React, { useEffect, useState } from 'react';
import Faqs from './Faqs';
import styles from './Fqas.module.css';

export default function Qanda() {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    fetch('https://lxpi9qne2a.api.quickmocker.com/getReactFAQs')
      .then((res) => res.json())
      .then(({ response }) => {
        //console.log({ response });
        response.forEach(({ title, Message }) => {
          setQuestion(title);
          setAnswer(Message);
        });
      });
  }, []);
  console.log(question);
  console.log(answer);
  return <div></div>;
  // (
  //   <div className={styles['column-1']}>
  //     {response.map(({ title, Message }) => (
  //       <Faqs title={(title, Message)} />
  //     ))}
  //   </div>
  // );
}

// /* <p className={styles['q']}>What is a professional traffic permit?</p>
// <p className={styles['a']}>
//     Traffic permits are a requirement for conducting professional traffic.
//   </p> */
