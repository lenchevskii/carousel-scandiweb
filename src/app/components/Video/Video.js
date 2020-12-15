import React from 'react'
import styles from './video.css'

export default function Video({src}) {
  return <source src={src} type='video/mp4' className={styles.video}></source>
}