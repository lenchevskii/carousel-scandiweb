import { Button }                       from 'components'
import styles                           from './footer.scss'
import React                            from 'react'

const Footer = () => (
  <div className={styles.container}>
    <Button style={styles.btn_jump}
            text='Jump to the specific slide'
            writing={styles.content}
            badge={"fa-chevron-circle-right"}
    />
  </div>
)

export default Footer