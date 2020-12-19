import React from 'react'
import styles from './video.scss'

export default function Video({ src }) {
  return (
    <video controls
      className={styles.video}
      tabIndex='-1'>
      <source src={src} type='video/mp4'></source>
    </video>
  )
}