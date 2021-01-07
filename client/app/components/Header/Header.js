import { Button }                       from 'components'
import React                            from 'react'
import styles                           from './header.scss'

const Header = () => (
  <div className={styles.container}>
    <Button style={styles.btn_add}
            text='Add post or file URL'
            writing={styles.content}
            badge={"fa-instagram"}
    />
    <Button style={styles.btn_remove}
            text='Remove last element'
            writing={styles.content}
            badge={"fa-minus-square"}
    />
  </div>
)

export default Header