import React from 'react'
import styles from './header.scss'

const Header = () => (
  <div className={styles.container}>
    <div className={styles.header_panel}>
      <button className={styles.btn_styles}>
        <p className={styles.content}>
          Bonjour
        </p>
      </button>
    </div>
  </div>
)

export default Header