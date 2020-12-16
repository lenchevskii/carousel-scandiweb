import React from 'react'
import styles from './footer.scss'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer_panel}>
          <p className={styles.content}>
          Au revoir...
          </p>
      </div>
    </div>
  )
}