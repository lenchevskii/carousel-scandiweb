import React from 'react'
import styles from './image.scss'

export default function Image({src}) {
  return <img src={src} alt="slide-img" className={styles.image}></img>
}