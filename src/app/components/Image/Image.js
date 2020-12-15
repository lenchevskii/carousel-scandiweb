import React from 'react'
import styles from './image.css'

export default function Image({src}) {
  return <img src={src} alt="slide-img" className={styles.image}></img>
}