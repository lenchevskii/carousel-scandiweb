import styles                           from './splash.scss'
import React                            from 'react'

const Splash = ({Application}) => (
  <div className={styles.container}>
    <Application />
  </div>
)

export default Splash