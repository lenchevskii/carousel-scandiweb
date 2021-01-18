import { Button }                       from 'components'
import styles                           from './header.scss'
import React                            from 'react'

const Header = () => (
  <header className   = { styles.container }>
    <Button   writing = { styles.content }
              badge   = { "fa-instagram" }
              style   = { styles.btn_add }
              text    = { 'Add post or file URL' }
              href    = { '#add' }
    />
    <Button   writing = { styles.content }
              badge   = { "fa-minus-square" }
              style   = { styles.btn_remove }
              text    = { 'Remove last element' }
              href    = { '#remove' }
              // click   = { () => (alert('Warning: you will remove the collection!'))}
    />
  </header>
)

export default Header