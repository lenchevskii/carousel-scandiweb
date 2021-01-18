import { Button, Popup }                from 'components'
import styles                           from './footer.scss'
import React                            from 'react'

const Footer = () => (
  <footer className = { styles.container }>
    <Button writing = { styles.content }
            style   = { styles.btn_jump }
            badge   = { "fa-chevron-circle-right" }
            text    = { 'Jump to the specific slide' }
            href    = { '#jump' }
    />
  </footer>
)

export default Footer