import styles                           from './splash.scss'
import React                            from 'react'

const Splash = ({Application}) => (
  <div>
    <div className={styles.container}>
      <Application />
    </div>
    <div className={styles.greeting}>
      welcom to the world my visual lover
    </div>
  </div>
)

export default Splash