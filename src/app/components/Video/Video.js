import React from 'react'
import styles from './video.css'

export default function Video({src}) {
  return (
    <video controls  className={styles.video}>
      <source src={src} type='video/mp4'></source>
    </video>
  )
}