import { Button }                       from 'components'
import React                            from 'react'
import styles                           from './header.scss'

const Header = () => (
  <header className={styles.container}>
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
  </header>
)

export default Header