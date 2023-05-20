import React from 'react'
import instagram from './instagram.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import styles from './Rodape.module.scss';


export default function Rodape() {
  return (
    <footer className={styles.rodape}> 
      <div className={styles.rodape__icones}>
          <a href='#' target="_blank"></a>
          <img src={facebook} alt='Facebook' />
        
          <a href='#' target="_blank"></a>
          <img src={twitter} alt='twitter' /> 
        
          <a href='#' target="_blank"></a>
          <img src={instagram} alt='instagram' />
      </div>
      <p>Desenvolvido por Alura</p>
    </footer>
  )
}
