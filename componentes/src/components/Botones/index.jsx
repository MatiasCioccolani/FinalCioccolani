import React from 'react';
import styles from './boton.module.scss';

const Botones = ({ texto }) => { 
  return (
    <button className={styles.btn}>{texto}</button>
  );
};

export default Botones;