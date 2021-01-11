import { Button }                       from 'components'
import styles                           from './footer.scss'
import React                            from 'react'

const Footer = () => (
  <footer className={styles.container}>
    <Button style={styles.btn_jump}
            text='Jump to the specific slide'
            writing={styles.content}
            badge={"fa-chevron-circle-right"}
    />
  </footer>
)

export default Footer