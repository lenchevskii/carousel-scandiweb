import React                            from 'react'
import styles                           from './popup.scss'

const Popup = ({ id, style, close, placeholder }) => (
  <div>
    <form action='' method='POST' id={id} className={style}>
      <input type='text' placeholder={placeholder} />
      <a href={'#'} class={close ? styles.close : ''}></a>
    </form>
  </div>
)

export default Popup