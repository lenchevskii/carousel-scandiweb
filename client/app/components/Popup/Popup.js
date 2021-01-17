import React                            from 'react'
import styles                           from './popup.scss'

const Popup = ({ id, style, close }) => (
  <a class={close === true ? 'close' : ''}>
    <form action='' method='POST' id={id} className={style}>
      Link:<br/>
      <input type='text' />
    </form>
  </a>
)

export default Popup