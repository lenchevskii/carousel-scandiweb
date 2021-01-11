import React                            from 'react'
import styles                           from './header.scss'
import { ButtonPopup }                  from 'components'

const Header = () => (
  <header className = {styles.container}>
    <ButtonPopup  writing = {styles.content}
                  badge   = {"fa-instagram"}
                  style   = {styles.btn_add}
                  text    = 'Add post or file URL'
    />
    <ButtonPopup  writing = {styles.content}
                  badge   = {"fa-minus-square"}
                  style   = {styles.btn_remove}
                  text    = 'Remove last element'
    />
  </header>
)

export default Header